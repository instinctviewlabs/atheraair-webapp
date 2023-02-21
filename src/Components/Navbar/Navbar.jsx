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


export default function Navbar({auth, profile}){

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isLoading] = LoaderConsumer();
  const {language, setLanguage} = useLanguageConsumer()
  const {theme} = useSelector(data => data.persistedReducer);
  const [value, setValue] = useState(0);

  //Localisation
//   const [language, setLanguage] = useState("en");
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
                <Tabs TabIndicatorProps={{sx: {height: 2}}} value={value} onChange={(e, newVal) => setValue(newVal)} centered>
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
                <IconButton color='primary' onClick={() => dispatch(setTheme())}>
                    {theme ? <BiMoon/> : <BiSun/>}
                </IconButton>
                <InputField
                    size='small'
                    variant='standard'
                    select
                    value={language}
                    onChange={(e) => setLanguage(e.target.value)}
                >
                    <MenuItem value="en">en</MenuItem>
                    <MenuItem value="es">es</MenuItem>
                    <MenuItem value="fr">fr</MenuItem>
                </InputField>
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
