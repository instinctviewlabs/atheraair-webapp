// functional and config imports
import React, { useEffect, useRef, useState } from 'react';
import { BASE_URL } from '../../Lib/Axios/AxiosConfig';
import { capitalize } from '../../Lib/utils/helperFunctions';
import moment from 'moment/moment';
import axios from 'axios';
import useLoader from '../../Lib/CustomHooks/useLoader';

// ui imports
import { Autocomplete, Box, MenuItem, Typography } from '@mui/material';
import { BlueButton, InputField, WhiteCard } from '../../Lib/MuiThemes/MuiComponents';
import {FiSend} from "react-icons/fi";
import { DesktopDatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { FaMinus, FaPlus } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getFlightsData } from '../../Lib/Redux/FlightSearchResultSlice';
import { LoaderConsumer, loaderConsumer } from '../../Lib/Contexts/LoaderContext';


function SearchFlightBox() {

  /************************** States and Variables ******************************/  
  
  const navigate = useNavigate()
  const [originKey, setOriginKey] = useState({searchKey: "", options: []})
  const [destinationKey, setDestinationKey] = useState({searchKey: "", options: []})
  const dispatch = useDispatch();
  const suggestRef = useRef(false);
  const [isLoading, startLoading, restLoading] = useLoader();
  const [seachLoading, startSearchLoading, restSearchLoading] = LoaderConsumer();
//   const [seachLoading, startSearchLoading, restSearchLoading] = useLoader();
  const [searchData, setSearchData] = useState({
    origin: "",
    desination: "",
    trip: "oneway",
    departureDate: moment().format("YYYY-MM-DD"),
    returnDate: moment().format("YYYY-MM-DD"),
    adult: "1",
    children: "0",
    infants: "0"
  });

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
        return;
    }
    try{
        startSearchLoading();
        const controller = axios.CancelToken.source();
        const response = await axios(`${BASE_URL}/oneway?origin=${searchData.origin}&destination=${searchData.desination}&departureDate=${searchData.departureDate}&returnDate=${searchData.returnDate}&adults=${searchData.adult}&children=${searchData.children}&infants=${searchData.infants}`,{cancelToken: controller.token});
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
            <Typography variant='h5' color="text.main">
                Where are you flying?
            </Typography>
            <Box sx={{
                display: "flex",
                justifyContent: "space-evenly",
                mt: 4,
                flexDirection: {
                    xs: "column",
                    md: "row"
                },
                gap: 3,
            }}>

                <Autocomplete
                    loading={isLoading}
                    onChange={(event, newVal) => setSearchData(prev => ({...prev, origin: newVal ? newVal.iataCode : ""}))}
                    size="small"
                    sx={{ width: 400}}
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
                    loading={isLoading}
                    onChange={(event, newVal) => setSearchData(prev => ({...prev, desination: newVal ? newVal.iataCode : ""}))}
                    size="small"
                    sx={{ width: 400 }}
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
                <InputField
                    size='small'
                    select
                    label="Trip"
                    value={searchData.trip}
                    onChange={(event) => setSearchData(prev => ({...prev, trip: event.target.value}))}
                    InputProps={{ inputProps: { sx: { color: 'text.main' }}}}
                    sx={{
                        minWidth: 150,
                        maxWidth: "auto"
                    }}

                >
                    <MenuItem value="roundtrip">Round trip</MenuItem>
                    <MenuItem value="oneway">One way</MenuItem>
                    <MenuItem value="multi">Multi city</MenuItem>
                </InputField>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DesktopDatePicker
                        disablePast
                        label="Departure date"
                        renderInput={(params) => <InputField size="small" {...params} />}
                        value={searchData.departureDate}
                        onChange={(newValue) => setSearchData(prev => ({...prev, departureDate: moment(newValue["$d"]).format("YYYY-MM-DD")}))}
                    />
                </LocalizationProvider>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DesktopDatePicker
                        disablePast
                        label="Return date"
                        renderInput={(params) => <InputField size="small" {...params} />}
                        value={searchData.returnDate}
                        onChange={(newValue) => setSearchData(prev => ({...prev, returnDate: moment(newValue["$d"]).format("YYYY-MM-DD")}))}

                    />
                </LocalizationProvider>
                
                 {/* <Menu
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                    'aria-labelledby': 'basic-button',
                    }}
                >
                    <Stack direction="row">
                        <Typography>Adults</Typography>
                        <Stack direction='row' alignItems="center">
                            <IconButton size="small">
                                <FaMinus/>
                            </IconButton>
                            <Typography>1</Typography>
                            <IconButton size='small'>
                                <FaPlus/>
                            </IconButton>
                        </Stack>
                    </Stack>
                </Menu> */}

                <InputField
                    size='small'
                    label="Adults"
                    type="number"
                    value={searchData.adult}
                    onChange={(e) => {
                        return e.target.value > 1 && e.target.value <= 9 ? setSearchData(prev => ({...prev, adult: e.target.value})) :  setSearchData(prev => ({...prev, adult: "1"}))
                    }}
                />
                <InputField
                    size='small'
                    label="Children"
                    type="number"
                    value={searchData.children}
                    onChange={(e) => {
                        return e.target.value > 0 && e.target.value <= 9 ? setSearchData(prev => ({...prev, children: e.target.value})) :  setSearchData(prev => ({...prev, children: "0"}))
                    }}
                />
                <InputField
                    size='small'
                    label="Infants"
                    type="number"
                    value={searchData.infants}
                    onChange={(e) => {
                        return e.target.value > 0 && e.target.value <= 9 ? setSearchData(prev => ({...prev, infants: e.target.value})) :  setSearchData(prev => ({...prev, infants: "0"}))
                    }}
                />
            </Box>
            <BlueButton sx={{my: 2, float: "right"}} disabled={seachLoading} onClick={searchFlight}>
                <FiSend/>
                Show flights
            </BlueButton>
        </WhiteCard>
    </Box>
  )
}

export default SearchFlightBox