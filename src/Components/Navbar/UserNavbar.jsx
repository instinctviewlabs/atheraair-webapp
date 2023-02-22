import React from 'react';
import { 
    Typography, 
    Badge,
    Avatar,
    ListItemButton,
    ListItemText,
    ListItemIcon,
    MenuItem,
    Divider,
    Collapse,
    List,
    Box,
} from '@mui/material';
import { AccountCircle, ExpandLess, ExpandMore, KeyboardArrowRight, Language, Logout, Payment, PersonAdd, Public, Settings, StarBorder } from '@mui/icons-material';
import { logoutUser } from '../../Lib/Redux/AuthSlice';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import useMenu from '../../Lib/CustomHooks/useMenu';
import { ReuseMenu } from '../../Lib/MuiThemes/MuiComponents';
import { accountReducer, clearUserDetails } from '../../Lib/Redux/AccountSlice';
import useSwitch from '../../Lib/CustomHooks/useSwitch';
import useLanguageConsumer from '../../Lib/CustomHooks/useLanguageConsumer';
import { useTranslation } from 'react-i18next';

function UserNavbar({auth, profile}) {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {menu, openMenu, closeMenu} = useMenu();
    const [toggle, setToggle] = useSwitch();
    const {language, setLanguage} = useLanguageConsumer()
    const {i18n} = useTranslation()

    function logout(){
        dispatch(logoutUser());
        dispatch(clearUserDetails())
        return navigate("/", {replace: true})
    }

    return (
    <>
        <Typography variant='h6' color="text.main">{language}</Typography>
        <Badge
            overlap="circular"
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            // badgeContent={<BsCheckCircleFill style={{color: "black", fontSize: 18}}/>}
        >
            <Avatar onClick={openMenu} sx={{height: "40px", width: "40px", border: "3px solid rgb(184, 218, 255)", cursor: "pointer"}} src={profile.profilePicture }/>
        </Badge>
        <ReuseMenu menu={menu} closeMenu={closeMenu}>

            <ListItemButton onClick={(e) => {
                e.stopPropagation()
            }}>
                <ListItemIcon>
                    <Avatar sx={{ border: "3px solid rgb(184, 218, 255)", cursor: "pointer"}} src={profile.profilePicture }/>
                </ListItemIcon>
                <ListItemText primary={<Typography variant='h6'>{profile.name}</Typography>} />
            </ListItemButton>

            <Divider></Divider>

            <ListItemButton onClick={() => {
                navigate("/profile/account")
                closeMenu()
            }}>
                <ListItemIcon>
                    <AccountCircle></AccountCircle>
                </ListItemIcon>
                <ListItemText primary={<Typography variant='subtitle1'>My account</Typography>} />
            </ListItemButton>
            <Divider></Divider>
            <ListItemButton>
                <ListItemIcon>
                    <Public></Public>
                </ListItemIcon>
                <ListItemText primary={<Typography variant='subtitle1'>Country</Typography>} />
            </ListItemButton>
            <Divider></Divider>

            <ListItemButton onClick={(e) => {
                e.stopPropagation();
                setToggle();
            }}>
                <ListItemIcon>
                    <Language></Language>
                </ListItemIcon>
                <ListItemText primary={<Typography variant='subtitle1'>Language</Typography>} />
                {!toggle ? <KeyboardArrowRight /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={toggle} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 4 }} onClick={() => {
                        setLanguage("en")
                        // localStorage.setItem("i18nextLng", "en")
                    }}>
                        <ListItemText primary="English - en" />
                    </ListItemButton>
                    <ListItemButton sx={{ pl: 4 }} onClick={() => {
                        setLanguage("fr")
                        // localStorage.setItem("i18nextLng", "fr")}
                    }}>
                        <ListItemText primary="French - fr" />
                    </ListItemButton>
                    <ListItemButton sx={{ pl: 4 }} onClick={() => {
                        setLanguage("es")
                        localStorage.setItem("i18nextLng", "es")
                    }}>
                        <ListItemText primary="Spanish - es" />
                    </ListItemButton>
                </List>
            </Collapse>
    
            <Divider />

            <ListItemButton>
                <ListItemIcon>
                    <PersonAdd />
                </ListItemIcon>
                <ListItemText primary={<Typography variant='subtitle1'>Support</Typography>} />
            </ListItemButton>
            <Divider></Divider>
            <ListItemButton onClick={() => {
                logout() 
                closeMenu()
            }}>
                <ListItemIcon>
                    <Logout />
                </ListItemIcon>
                <ListItemText primary={<Typography variant='subtitle1'>Logout</Typography>} />
            </ListItemButton>
        </ReuseMenu>
    </>
    )
}

export default UserNavbar