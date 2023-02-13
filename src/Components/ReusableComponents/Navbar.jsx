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
    Badge,
    Stack,
    Avatar,
    Menu,
    List,
    ListItemButton,
    ListItemText,
    ListItem,
    ListItemIcon,
    MenuItem
} from '@mui/material';
import {TbPlaneInflight} from "react-icons/tb"
import { BlackButtonOutlined, TitleLogo } from '../../Lib/MuiThemes/MuiComponents';
import { BiSun, BiMoon } from "react-icons/bi";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setTheme } from '../../Lib/Redux/ThemeSlice';
import { AccountCircle, Logout, Payment } from '@mui/icons-material';
import { logoutUser } from '../../Lib/Redux/AuthSlice';



export default function Navbar(){

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {auth, theme} = useSelector(data => data.persistedReducer);
  const [value, setValue] = React.useState(0);
  const [openMenu, setOpenMenu] = React.useState(null);

  const handleMenu = (event) => {
    setOpenMenu(event.currentTarget);
  }


  function logout(){
    dispatch(logoutUser());
    return navigate("/", {replace: true})
  }

  

  const renderNavbar =  auth.auth && auth.role === "user" ? (
    <>
        <Badge
            overlap="circular"
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            // badgeContent={<BsCheckCircleFill style={{color: "black", fontSize: 18}}/>}
        >
            <Avatar onClick={handleMenu} sx={{height: "50px", width: "50px", border: "3px solid rgb(184, 218, 255)", cursor: "pointer"}} alt="Remy Sharp" src={auth.photoUrl}/>
        </Badge>
        <Typography variant="h5" color="text.main">{auth.name ? auth.name : "user"}</Typography>
        <Menu
            anchorEl={openMenu}
            open={Boolean(openMenu)}
            onClose={() => setOpenMenu(null)}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            sx={{
                top: "20px",
            }}
            PaperProps={{
                elevation: 0,
                sx: {
                  overflow: 'visible',
                  filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                  mt: 1.5,
                  '& .MuiAvatar-root': {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                  },
                  '&:before': {
                    content: '""',
                    display: 'block',
                    position: 'absolute',
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: 'background.paper',
                    transform: 'translateY(-50%) rotate(45deg)',
                    zIndex: 0,
                  }
                }
            }}
        >
            <ListItemButton onClick={() => {
                navigate("/profile/account")
                setOpenMenu(null)
            }}>
                <ListItemIcon>
                    <AccountCircle></AccountCircle>
                </ListItemIcon>
                <ListItemText primary={<Typography variant='subtitle1'>Profile</Typography>} />
            </ListItemButton>
            <ListItemButton onClick={() => setOpenMenu(null)}>
                <ListItemIcon>
                    <Payment></Payment>
                </ListItemIcon>
                <ListItemText primary={<Typography variant='subtitle1'>Support</Typography>} />
            </ListItemButton>
                
            <ListItemButton onClick={() => {
                logout() 
                setOpenMenu(null)
            }}>
                <ListItemIcon>
                    <Logout></Logout>
                </ListItemIcon>
                <ListItemText primary={<Typography variant='subtitle1'>Logout</Typography>} />
            </ListItemButton>
        </Menu>
    </>
  ) : (
    <>
        <Button onClick={() => navigate("login")} variant='text'>Login</Button>
        <BlackButtonOutlined onClick={() => navigate("signup")}>Sign up</BlackButtonOutlined>
    </>
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
                </Tabs>
            </Box>
            <TitleLogo/>
            <Box display="flex" flexDirection="row" alignItems="center" gap="15px">
                <IconButton color='primary' onClick={() => dispatch(setTheme())}>
                    {theme ? <BiMoon/> : <BiSun/>}
                </IconButton>
                {renderNavbar}
            </Box>
        </Toolbar>
    </AppBar>
  )
}
