import React from 'react';
import { 
    Box,
    AppBar, 
    Toolbar, 
    Typography, 
    Button,
    Tabs,
    Tab,
    IconButton
} from '@mui/material';
import {TbPlaneInflight} from "react-icons/tb"
import { AtheraTitle, BlackButtonOutlined } from '../../Lib/MuiThemes/MuiComponents';
import { BiSun, BiMoon } from "react-icons/bi";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setTheme } from '../../Lib/Redux/ThemeSlice';
import { useAuth } from '../../Lib/Contexts/AuthContext';



export default function Navbar(){

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {theme} = useSelector(data => data);
  const [value, setValue] = React.useState(0);
  const user = useAuth();
  console.log(user)

  return (
    <AppBar position='sticky' sx={{backgroundColor: "common.background"}}>
        <Toolbar sx={{display: "flex", justifyContent: "space-between", height: "90px"}}>
            <Box display={{
                xs: "none",
                sm: "flex"
                }}
                flexDirection="row" 
                alignItems="center" 
                gap="5px"
            >
                <Tabs value={value} onChange={(e, newVal) => setValue(newVal)} centered>
                    <Tab label={
                        <Box 
                            color="text.main"
                            display={{
                                xs: "none",
                                sm: "flex"
                            }}
                            flexDirection="row" 
                            alignItems="center" 
                            gap="5px"
                            onClick={() => console.log("Find flight")}
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
                </Tabs>
            </Box>
            <AtheraTitle/>
            <Box display="flex" gap="15px">
                <IconButton color='primary' onClick={() => dispatch(setTheme())}>
                    {theme ? <BiMoon/> : <BiSun/>}
                </IconButton>
                <Button onClick={() => navigate("login")} variant='text'>Login</Button>
                <BlackButtonOutlined onClick={() => navigate("signup")}>Sign up</BlackButtonOutlined>
            </Box>
        </Toolbar>
    </AppBar>
  )
}
