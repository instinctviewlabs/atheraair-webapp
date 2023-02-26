import React, { useState } from 'react';
import { 
    Box,
    AppBar, 
    Toolbar, 
    Typography, 
    Button,
    Tabs,
    Tab,
    IconButton,
    LinearProgress,
    MenuItem,
    Autocomplete,
} from '@mui/material';
import {TbPlaneInflight} from "react-icons/tb"
import { BlackButtonOutlined, InputField, TitleLogo } from '../../Lib/MuiThemes/MuiComponents';
import { BiSun, BiMoon } from "react-icons/bi";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setTheme } from '../../Lib/Redux/ThemeSlice';
import UserNavbar from './UserNavbar';
import { AdminPanelSettingsOutlined } from '@mui/icons-material';
import { LoaderConsumer } from '../../Lib/Contexts/LoaderContext';
import { useTranslation } from 'react-i18next';
import useLanguageConsumer from '../../Lib/CustomHooks/useLanguageConsumer';
import { countries } from '../../Lib/Countries/countries';


export default function Navbar({auth, profile}){

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isLoading] = LoaderConsumer();
  const {theme} = useSelector(data => data.persistedReducer);
  const [country, setCountry] = useState("India")
  const [value, setValue] = useState(0);
  const { t, i18n } = useTranslation();

  const adminOption = (
    <Box 
        color="text.main"
        display={{
            xs: "none",
            sm: "flex"
        }}
        flexDirection="row" 
        alignItems="center" 
        gap="5px"
    >
    <AdminPanelSettingsOutlined/>
    <Typography 
        color="text.main"
        variant='h6' 
    >
        {t("admin")}
    </Typography>
    </Box>
  )


  return (
    <AppBar position='sticky' sx={{backgroundColor: "card.background"}}>
        <Box>
            {isLoading && <LinearProgress />}
        </Box>
        <Toolbar sx={{display: "flex", justifyContent: "space-between", height: "80px"}}>
            <Box display={{
                xs: "none",
                sm: "flex"
                }}
                flexDirection="row" 
                alignItems="center" 
                gap="5px"
            >
                <Tabs TabIndicatorProps={{sx: {height: 3}}} value={value} onChange={(e, newVal) => setValue(newVal)} centered>
                    <Tab 
                        onClick={() => navigate("/")}
                        value={0}
                        label={
                        <Box 
                            color="text.main"
                            display={{
                                xs: "none",
                                sm: "flex"
                            }}
                            flexDirection="row" 
                            alignItems="center" 
                            gap="5px"
                            py={2}
                        >
                        <TbPlaneInflight/>
                        <Typography 
                            color="text.main"
                            variant='h6'
                             
                        >
                            {t("findFlight")}
                        </Typography>
                        </Box>
                    } />
                    {/* {auth.auth && auth.role === "admin" && <AdminNavbar />} */}
                    {auth.auth && auth.role === "admin" && 
                    <Tab 
                        onClick={() => navigate(`/${auth.role}`)}
                        value={1}
                        label={adminOption}
                        py={2} 
                    />}
                </Tabs>  
            </Box>
            <TitleLogo/>
            <Box display="flex" flexDirection="row" alignItems="center" gap="10px">
                {/* <Autocomplete
                    sx={{width: 200}}
                    fullWidth
                    options={countries}
                    autoHighlight
                    getOptionLabel={(option) => option.label}
                    isOptionEqualToValue={(option, value) => true}
                    renderOption={(props, option) => (
                        <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                        <img
                            loading="lazy"
                            width="20"
                            src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                            srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                            alt="img"
                        />
                        {option.label} ({option.code}) +{option.phone} */}
                        {/* </Box>
                    )}
                    renderInput={(params) => (
                        <InputField
                        {...params}
                        size="small"
                        variant="standard"
                        inputProps={{
                            ...params.inputProps,
                            autoComplete: 'off', // disable autocomplete and autofill
                        }}
                    />
                )}
                /> */}
                {/* <IconButton color='primary' onClick={() => dispatch(setTheme())}>
                    {theme ? <BiMoon/> : <BiSun/>}
                </IconButton> */}
                {auth.auth && ( auth.role === "admin" || auth.role === "user" ) ? <UserNavbar auth={auth} profile={profile}/> :

                <>
                <Button onClick={() => navigate("login")} variant='text'>{t("login")}</Button>
                <BlackButtonOutlined onClick={() => navigate("signup")}>{t("signup")}</BlackButtonOutlined>
                </>
                }
            </Box>
        </Toolbar>
    </AppBar>
  )
}
