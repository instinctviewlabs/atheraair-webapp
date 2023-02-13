import React from 'react';
import { 
    Box,
    AppBar, 
    Toolbar, 
    Typography, 
    Button,
    Tabs,
    Tab,
    IconButton,
} from '@mui/material';
import {TbPlaneInflight} from "react-icons/tb"
import { BlackButtonOutlined, TitleLogo } from '../../Lib/MuiThemes/MuiComponents';
import { BiSun, BiMoon } from "react-icons/bi";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setTheme } from '../../Lib/Redux/ThemeSlice';
import UserNavbar from './UserNavbar';
import { AdminPanelSettingsOutlined } from '@mui/icons-material';


export default function Navbar({auth}){

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {theme} = useSelector(data => data.persistedReducer);
  const [value, setValue] = React.useState(0);

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
        Admin
    </Typography>
    </Box>
  )


  return (
    <AppBar position='sticky' sx={{backgroundColor: "card.background"}}>
        <Toolbar sx={{display: "flex", justifyContent: "space-between", height: "80px"}}>
            <Box display={{
                xs: "none",
                sm: "flex"
                }}
                flexDirection="row" 
                alignItems="center" 
                gap="5px"
            >
                <Tabs value={value} onChange={(e, newVal) => setValue(newVal)} centered>
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
                        >
                        <TbPlaneInflight/>
                        <Typography 
                            color="text.main"
                            variant='h6' 
                        >
                            Find Flight
                        </Typography>
                        </Box>
                    } />
                    {/* {auth.auth && auth.role === "admin" && <AdminNavbar />} */}
                    {auth.auth && auth.role === "admin" && 
                    <Tab 
                        onClick={() => navigate(`/${auth.role}`)}
                        value={1}
                        label={adminOption} 
                    />}
                </Tabs>  
            </Box>
            <TitleLogo/>
            <Box display="flex" flexDirection="row" alignItems="center" gap="15px">
                <IconButton color='primary' onClick={() => dispatch(setTheme())}>
                    {theme ? <BiMoon/> : <BiSun/>}
                </IconButton>
                {auth.auth && ( auth.role === "admin" || auth.role === "user" ) ? <UserNavbar auth={auth}/> :

                <>
                <Button onClick={() => navigate("login")} variant='text'>Login</Button>
                <BlackButtonOutlined onClick={() => navigate("signup")}>Sign up</BlackButtonOutlined>
                </>
                }
                
            </Box>
        </Toolbar>
    </AppBar>
  )
}
