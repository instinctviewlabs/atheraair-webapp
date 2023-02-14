// functional and config imports
import React, { useEffect, useRef, useState } from 'react';
import { BASE_URL } from '../../Lib/Axios/AxiosConfig';
import { capitalize } from '../../Lib/utils/helperFunctions';
import moment from 'moment/moment';
import axios from 'axios';
import useLoader from '../../Lib/CustomHooks/useLoader';

// ui imports
import { Autocomplete, Box, Card, Checkbox, IconButton, InputAdornment, Menu, MenuItem, Popper, Stack, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material';
import { BlueButton, InputField, WhiteCard } from '../../Lib/MuiThemes/MuiComponents';
import {FiSend} from "react-icons/fi";
import { DesktopDatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { FaMinus, FaPlus } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getFlightsData } from '../../Lib/Redux/FlightSearchResultSlice';
import { LoaderConsumer } from '../../Lib/Contexts/LoaderContext';
import useSnackBar from '../../Lib/CustomHooks/useSnackBar';
import { AddCircleOutline, RemoveCircleOutline } from '@mui/icons-material';
import useCounter from '../../Lib/CustomHooks/useCounter';


function SearchFlightBox() {

  /************************** States and Variables ******************************/  
  
  const navigate = useNavigate()
  const [originKey, setOriginKey] = useState({searchKey: "", options: []})
  const [destinationKey, setDestinationKey] = useState({searchKey: "", options: []})
  const [adultCount, increaseAdultCount, decreaseAdultCount] = useCounter(1);
  const [childrenCount, increaseChildrenCount, decreaseChildrenCount] = useCounter(0);
  const [infantCount, increaseInfantCount, decreaseInfantCount] = useCounter(0);
  const dispatch = useDispatch();
  const suggestRef = useRef(false);
  const [isLoading, startLoading, restLoading] = useLoader();
  const [seachLoading, startSearchLoading, restSearchLoading] = LoaderConsumer();
  const { showSnackBar } = useSnackBar();
//   const [seachLoading, startSearchLoading, restSearchLoading] = useLoader();
  const [searchData, setSearchData] = useState({
    origin: "",
    desination: "",
    trip: "oneway",
    departureDate: moment().format("YYYY-MM-DD"),
    returnDate: moment().format("YYYY-MM-DD"),
    class: "economy"
  });
  console.log(searchData);

  const anchorRef = useRef();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  console.log(anchorRef);
  /**************API call : Flight suggestion for origin and destination****************/

  useEffect(() => {   
    const controller = axios.CancelToken.source();
    if(suggestRef.current && originKey.searchKey !== ""){
        (async () => {
            try{
                startLoading();
                const fetch = await axios(`${BASE_URL}/airports?keyword=${originKey.searchKey}`, {cancelToken: controller.token});
                console.log(fetch)
                setOriginKey(prev => ({...prev, options: fetch.data}))
                restLoading();
            }catch(err){
                console.error(err)
            }finally{
                restLoading();
            }
        })()
        suggestRef.current = false;
        
    }

    return () => {
        suggestRef.current = true;
        restLoading();
        controller.cancel();
    }
  },[originKey.searchKey]);

  useEffect(() => {
    const controller = axios.CancelToken.source();
    if(suggestRef.current && destinationKey.searchKey !== ""){
        (async () => {
            try{
                startLoading();
                const fetch = await axios(`${BASE_URL}/airports?keyword=${destinationKey.searchKey}`, {cancelToken: controller.token});
                console.log(fetch)
                setDestinationKey(prev => ({...prev, options: fetch.data}))
                restLoading();
            }catch(err){
                console.error(err)
            }finally{
                restLoading();
            }
        })()
        suggestRef.current = false;
    }

    return () => {
        suggestRef.current = true;
        restLoading();
        controller.cancel();
    }
  },[destinationKey.searchKey]);

/***************************API call : Search Flight ******************************/

  async function searchFlight(){
    if(searchData.origin === "" || searchData.desination === ""){
        console.error("please fill the required field");
        return showSnackBar("error", "Unable to search flight without from and to")
    }
    try{
        startSearchLoading();
        const controller = axios.CancelToken.source();
        const response = await axios(`${BASE_URL}/oneway?origin=${searchData.origin}&destination=${searchData.desination}&departureDate=${searchData.departureDate}&returnDate=${searchData.returnDate}&adults=${adultCount}&children=${childrenCount}&infants=${infantCount}`,{cancelToken: controller.token});
        // console.log(response);
        dispatch(getFlightsData(response.data.data))
        restLoading();
        navigate("/flightslist");
    }catch(error){
        console.error(error)
    }finally{
        restSearchLoading();
    }
  }

  return (
    <Box sx={{
        height: "auto",
        width: "auto",
        backgroundColor: "common.background",
        px: {
            xs: 1,
            sm: 10
        },
        py: 5
    }}>
        <WhiteCard>
            <Typography variant='h5' color="text.main" textAlign="center">
                Where are you flying?
            </Typography>
            <Box sx={{
                display: "flex",
                justifyContent: "space-evenly",
                flexDirection: "column",
                px: 30,
                mt: 4,
                gap: 3,
            }}>
                <Stack>
                    <ToggleButtonGroup
                        color='primary'
                        fullWidth
                        size='medium'
                        value={searchData.trip}
                        exclusive
                        onChange={(event, value) => value !== null && setSearchData(prev => ({...prev, trip: value}))}
                    >
                        <ToggleButton value="oneway">One way</ToggleButton>
                        <ToggleButton value="roundtrip">Round trip</ToggleButton>
                        <ToggleButton value="multi">Multi city</ToggleButton>
                    </ToggleButtonGroup>
                </Stack>

                <Stack direction="row" spacing={3}>
                    <Autocomplete
                        fullWidth
                        loading={isLoading}
                        onChange={(event, newVal) => setSearchData(prev => ({...prev, origin: newVal ? newVal.iataCode : ""}))}
                        size="medium"
                        options={originKey.options}
                        getOptionLabel={(option) => `${capitalize(option.name)} - ${option.iataCode}` || ""}
                        // isOptionEqualToValue={(option, value) =>  console.log(option.name, " ---- ", value.name, option.name === value.name)}
                        isOptionEqualToValue={(option, value) => true}
                        noOptionsText="No flights available"
                        renderInput={(params) => (
                            <InputField
                                // error={!searchData.origin}
                                // helperText={!searchData.origin && "Please choose your origin"}
                                {...params}
                                label="From"
                                value={originKey.searchKey}
                                onChange={(e) => setOriginKey(prev => ({...prev, searchKey: e.target.value}))}
                                inputProps={{
                                    ...params.inputProps,
                                    autoComplete: 'off',
                                }}
                            />
                        )}
                    />
                    
                    <Autocomplete
                        fullWidth
                        loading={isLoading}
                        onChange={(event, newVal) => setSearchData(prev => ({...prev, desination: newVal ? newVal.iataCode : ""}))}
                        size="medium"
                        options={destinationKey.options}
                        getOptionLabel={(option) => `${capitalize(option.name)} - ${option.iataCode}` || ""}
                        // isOptionEqualToValue={(option, value) =>  console.log(option.name, " ---- ", value.name, option.name === value.name)}
                        isOptionEqualToValue={(option, value) => true}
                        noOptionsText="No flights available"
                        renderInput={(params) => (
                            <InputField
                                // error={!searchData.desination}
                                // helperText={!searchData.desination && "Please choose destination"}
                                autoComplete='off'
                                {...params}
                                value={destinationKey.searchKey}
                                onChange={(e) => setDestinationKey(prev => ({...prev, searchKey: e.target.value}))}
                                label="To"
                                inputProps={{
                                    ...params.inputProps,
                                    autoComplete: 'off',
                                }}
                            />
                        )}
                    />
                </Stack>

                <Stack direction="row" spacing={3}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DesktopDatePicker
                            disablePast
                            label="Departure date"
                            renderInput={(params) => <InputField fullWidth size="medium" {...params} />}
                            value={searchData.departureDate}
                            onChange={(newValue) => newValue !== null && setSearchData(prev => ({...prev, departureDate: moment(newValue["$d"]).format("YYYY-MM-DD")}))}
                        />
                    </LocalizationProvider>
                    {searchData.trip === "roundtrip" && <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DesktopDatePicker
                            disablePast
                            label="Return date"
                            renderInput={(params) => <InputField fullWidth size="medium" {...params} />}
                            value={searchData.returnDate}
                            onChange={(newValue) => newValue !== null && setSearchData(prev => ({...prev, returnDate: moment(newValue["$d"]).format("YYYY-MM-DD")}))}

                        />
                    </LocalizationProvider>}
                </Stack>

                <Stack direction="row" spacing={3}>

                    <InputField
                        ref={anchorRef}
                        fullWidth
                        size='medium'
                        label="Passengers"
                        onFocus={handleClick}
                        value={`Adult - ${adultCount}, Children - ${childrenCount}, Infants - ${infantCount}`}
                        // onChange={(e) => {
                        //     return e.target.value > 0 && e.target.value <= 9 ? setSearchData(prev => ({...prev, infants: e.target.value})) :  setSearchData(prev => ({...prev, infants: "0"}))
                        // }}
                            
                    ></InputField>
                    <Popper open={open} anchorEl={anchorEl}>
                        <Card sx={{px: 4}}>
                            <Stack direction="row" py={1} gap={2} justifyContent="space-between" alignItems="center">
                                <Typography>Adults</Typography>
                                <Stack direction="row" spacing={1} alignItems="center">
                                    <IconButton onClick={decreaseAdultCount}>
                                    <RemoveCircleOutline/>
                                    </IconButton>
                                    <Typography>{adultCount}</Typography>
                                    <IconButton onClick={increaseAdultCount}>
                                        <AddCircleOutline></AddCircleOutline>
                                    </IconButton>
                                </Stack>
                            </Stack>
                            <Stack direction="row" py={1} gap={2} justifyContent="space-between" alignItems="center">
                                <Typography>Children</Typography>
                                <Stack direction="row" spacing={1} alignItems="center">
                                    <IconButton onClick={decreaseChildrenCount}>
                                    <RemoveCircleOutline/>
                                    </IconButton>
                                    <Typography>{childrenCount}</Typography>
                                    <IconButton onClick={increaseChildrenCount}>
                                        <AddCircleOutline></AddCircleOutline>
                                    </IconButton>
                                </Stack>
                            </Stack>
                            <Stack direction="row" py={1} gap={2} justifyContent="space-between" alignItems="center">
                                <Typography>Infants</Typography>
                                <Stack direction="row" spacing={1} alignItems='center'>
                                    <IconButton onClick={decreaseInfantCount}>
                                    <RemoveCircleOutline/>
                                    </IconButton>
                                    <Typography>{infantCount}</Typography>
                                    <IconButton onClick={increaseInfantCount}>
                                        <AddCircleOutline></AddCircleOutline>
                                    </IconButton>
                                </Stack>
                            </Stack>
                        </Card> 
                    </Popper>

                    <InputField
                        fullWidth
                        size='medium'
                        select
                        label="Class"
                        value={searchData.class}
                        onChange={(event) => setSearchData(prev => ({...prev, class: event.target.value}))}
                        InputProps={{ inputProps: { sx: { color: 'text.main' }}}}

                    >
                        <MenuItem value="economy">Economy</MenuItem>
                        <MenuItem value="business">Business</MenuItem>
                        <MenuItem value="firstclass">First</MenuItem>
                    </InputField>
                </Stack>
                <Stack>
                    <BlueButton size='large' disabled={seachLoading} onClick={searchFlight}>
                        <FiSend/>
                        Show flights
                    </BlueButton>
                </Stack>
            </Box>
        </WhiteCard>
    </Box>
  )
}

export default SearchFlightBox