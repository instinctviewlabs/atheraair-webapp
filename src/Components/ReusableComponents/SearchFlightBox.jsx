// functional and config imports
import React, { useEffect, useRef, useState } from 'react';
import { BASE_URL } from '../../Lib/Axios/AxiosConfig';
import { capitalize } from '../../Lib/utils/helperFunctions';
import moment from 'moment/moment';
import axios from 'axios';
import useLoader from '../../Lib/CustomHooks/useLoader';

// ui imports
import { Autocomplete, Box, Card, Checkbox, CircularProgress, ClickAwayListener, Grow, IconButton, InputAdornment, Menu, MenuItem, MenuList, Paper, Popper, Stack, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material';
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
import { AddCircleOutline, Close, RemoveCircleOutline } from '@mui/icons-material';
import useCounter from '../../Lib/CustomHooks/useCounter';
import { useTranslation } from 'react-i18next';
import { auth } from '../../Lib/Firebase/firebase.config';
import { Axios } from '../../Lib/Axios/AxiosConfig';


function SearchFlightBox(props) {

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
  const { t } = useTranslation();
  const [seachLoading, startSearchLoading, restSearchLoading] = LoaderConsumer();
  const { showSnackBar } = useSnackBar();
//   const [seachLoading, startSearchLoading, restSearchLoading] = useLoader();
  const [searchData, setSearchData] = useState({
    origin: "",
    originName: "",
    desination: "",
    destinationName: "",
    trip: "oneway",
    departureDate: moment().format("YYYY-MM-DD"),
    returnDate: moment().format("YYYY-MM-DD"),
    class: "ECONOMY"
  });
//   console.log(searchData);


  // popper
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === 'Escape') {
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  /**************API call : Flight suggestion for origin and destination****************/

  useEffect(() => {   
    const controller = axios.CancelToken.source();
    if(suggestRef.current && originKey.searchKey !== ""){
        (async () => {
            try{
                startLoading();
                // const verifyId = await auth.currentUser.getIdToken();
                const fetch = await Axios({
                    url: `airports?keyword=${originKey.searchKey}`,
                    method: "get",
                    cancelToken: controller.token
                });

                if(fetch.status === 200){
                    setOriginKey(prev => ({...prev, options: fetch.data}))
                }
                // console.log(fetch);
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
        controller.cancel();
    }
  },[originKey.searchKey]);

  useEffect(() => {
    const controller = axios.CancelToken.source();
    if(suggestRef.current && destinationKey.searchKey !== ""){
        (async () => {
            try{
                startLoading();
                // const verifyId = await auth.currentUser.getIdToken();
                const fetch = await Axios({
                    url: `/airports?keyword=${destinationKey.searchKey}`,
                    method: "get",
                    cancelToken: controller.token
                });
                if(fetch.status === 200){
                    setDestinationKey(prev => ({...prev, options: fetch.data}))
                }
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
        controller.cancel();
    }
  },[destinationKey.searchKey]);

/***************************API call : Search Flight ******************************/

  async function triggerSearch(){
    if(searchData.origin === "" || searchData.desination === ""){
        // console.error("please fill the required field");
        return showSnackBar("error", "Unable to search flight without from and to")
    }

    dispatch(getFlightsData({...searchData, adultCount, childrenCount, infantCount}));
    navigate("/flightslist");
    window.location.reload();
    // try{
    //     startSearchLoading();
    //     const controller = axios.CancelToken.source();
    //     const response = await axios(`${BASE_URL}/oneway?origin=${searchData.origin}&destination=${searchData.desination}&departureDate=${searchData.departureDate}&returnDate=${searchData.returnDate}&adults=${adultCount}&children=${childrenCount}&infants=${infantCount}`,{cancelToken: controller.token});
    //     // console.log(response);
    //     dispatch(getFlightsData(response.data.data))
    //     restLoading();
    //     navigate("/flightslist");
    // }catch(error){
    //     console.error(error)
    // }finally{
    //     restSearchLoading();
    // }
  }

  return (
    <Box sx={{
        height: "auto",
        width: "auto",
        backgroundColor: "common.background",
        px: {
            xs: 1,
            sm: props.px
        },
        // py: 5
        py: 1
    }}>
        <Box sx={{position: "relative", top: props.top, zIndex: 2}}>
        <WhiteCard>
            <Stack direction="row" justifyContent="space-between" alignItems="center">
                <Typography variant='h5' color="text.main">
                    {/* Where are you flying? */}
                    {t("whereAreYouFlying")}
                </Typography>
                <ToggleButtonGroup
                    color='primary'
                    size='small'
                    value={searchData.trip}
                    exclusive
                    onChange={(event, value) => value !== null && setSearchData(prev => ({...prev, trip: value}))}
                >
                    <ToggleButton value="oneway">{t("oneway")}</ToggleButton>
                    <ToggleButton value="twoway">{t("roundtrip")}</ToggleButton>
                    {/* <ToggleButton value="multi">{t("multicity")}</ToggleButton> */}
                </ToggleButtonGroup>
            </Stack>
            <Box sx={{
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "column",
                mt: 4,
                gap: 3,
            }}>
                <Stack direction="row" spacing={3}>
                    <Autocomplete
                        fullWidth
                        loading={isLoading}
                        onChange={(event, newVal) => setSearchData(prev => ({...prev, origin: newVal.iataCode ? newVal.iataCode : "", originName: newVal.name ? newVal.name: ""}))}
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
                                label={t("from")}
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
                        onChange={(event, newVal) => setSearchData(prev => ({...prev, desination: newVal.iataCode ? newVal.iataCode : "", destinationName: newVal.name ? newVal.name : ""}))}
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
                                label={t("to")}
                                inputProps={{
                                    ...params.inputProps,
                                    autoComplete: 'off',
                                }}
                            />
                        )}
                    />

                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DesktopDatePicker
                            disablePast
                            label={t("departureDate")}
                            renderInput={(params) => <InputField fullWidth size="medium" {...params} />}
                            value={searchData.departureDate}
                            onChange={(newValue) => newValue !== null && setSearchData(prev => ({...prev, departureDate: moment(newValue["$d"]).format("YYYY-MM-DD")}))}
                        />
                    </LocalizationProvider>
                    {searchData.trip === "twoway" && <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DesktopDatePicker
                            disablePast
                            label={t("returnDate")}
                            renderInput={(params) => <InputField fullWidth size="medium" {...params} />}
                            value={searchData.returnDate}
                            onChange={(newValue) => newValue !== null && setSearchData(prev => ({...prev, returnDate: moment(newValue["$d"]).format("YYYY-MM-DD")}))}

                        />
                    </LocalizationProvider>}

                    <InputField
                        ref={anchorRef}
                        fullWidth
                        size='medium'
                        label={t("passengers")}
                        onClick={handleToggle}
                        value={`${t("adult")} - ${adultCount}, ${t("children")} - ${childrenCount}, ${t("infants")} - ${infantCount}`}
                        // onChange={(e) => {
                        //     return e.target.value > 0 && e.target.value <= 9 ? setSearchData(prev => ({...prev, infants: e.target.value})) :  setSearchData(prev => ({...prev, infants: "0"}))
                        // }}
                    ></InputField>
                    <Popper
                        open={open}
                        anchorEl={anchorRef.current}
                        role={undefined}
                        placement="bottom-start"
                        transition
                        disablePortal
                        >
                        {({ TransitionProps, placement }) => (
                            <Grow
                            {...TransitionProps}
                            style={{
                                transformOrigin:
                                placement === 'bottom-start' ? 'left top' : 'left bottom',
                            }}
                            >
                            <Paper sx={{p: 2}}>
                                <ClickAwayListener onClickAway={handleClose}>
                                    <MenuList
                                        autoFocusItem={open}
                                        onKeyDown={handleListKeyDown}
                                    >
                                        <Stack direction="row" py={1} gap={2} justifyContent="space-between" alignItems="center">
                                            <Typography>{t("adult")}</Typography>
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
                                            <Typography>{t("children")}</Typography>
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
                                            <Typography>{t("infants")}</Typography>
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
                                    </MenuList>
                                </ClickAwayListener>
                            </Paper>
                            </Grow>
                        )}
                        </Popper>

                    <InputField
                        fullWidth
                        size='medium'
                        select
                        label={t("class")}
                        value={searchData.class}
                        onChange={(event) => setSearchData(prev => ({...prev, class: event.target.value}))}
                        InputProps={{ inputProps: { sx: { color: 'text.main' }}}}

                    >
                        <MenuItem value="ECONOMY">{t("economy")}</MenuItem>
                        <MenuItem value="BUSINESS">{t("business")}</MenuItem>
                        <MenuItem value="FIRSTCLASS">{t("first")}</MenuItem>
                    </InputField>
                    <BlueButton size='large'  disabled={seachLoading} onClick={triggerSearch}>
                        <FiSend/>
                        {t("showFlights")}
                    </BlueButton>
                </Stack>
            </Box>
        </WhiteCard>
        </Box>
    </Box>
  )
}

export default SearchFlightBox