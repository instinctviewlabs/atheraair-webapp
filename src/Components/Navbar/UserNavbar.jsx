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
} from '@mui/material';
import { AccountCircle, ExpandLess, ExpandMore, KeyboardArrowRight, Language, Logout, Payment, PersonAdd, Public, Settings, StarBorder } from '@mui/icons-material';
import { logoutUser } from '../../Lib/Redux/AuthSlice';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import useMenu from '../../Lib/CustomHooks/useMenu';
import { ReuseMenu } from '../../Lib/MuiThemes/MuiComponents';
import { accountReducer, clearUserDetails } from '../../Lib/Redux/AccountSlice';
import useSwitch from '../../Lib/CustomHooks/useSwitch';

function UserNavbar({auth, profile}) {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {menu, openMenu, closeMenu} = useMenu();
    const [toggle, setToggle] = useSwitch();

    function logout(){
        dispatch(logoutUser());
        dispatch(clearUserDetails())
        return navigate("/", {replace: true})
    }

    return (
    <>
        <Badge
            overlap="circular"
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            // badgeContent={<BsCheckCircleFill style={{color: "black", fontSize: 18}}/>}
        >
            <Avatar onClick={openMenu} sx={{height: "50px", width: "50px", border: "3px solid rgb(184, 218, 255)", cursor: "pointer"}} alt="Remy Sharp" src={profile.profilePicture }/>
        </Badge>
        <ReuseMenu menu={menu} closeMenu={closeMenu}>
            <ListItemButton onClick={() => {
                navigate("/profile/account")
                closeMenu()
            }}>
                <ListItemIcon>
                    <AccountCircle></AccountCircle>
                </ListItemIcon>
                <ListItemText primary={<Typography variant='subtitle1'>Profile</Typography>} />
            </ListItemButton>
            
            <ListItemButton>
                <ListItemIcon>
                    <Public></Public>
                </ListItemIcon>
                <ListItemText primary={<Typography variant='subtitle1'>Country</Typography>} />
            </ListItemButton>
            {/* <Collapse in={!toggle} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                    <StarBorder />
                    </ListItemIcon>
                    <ListItemText primary="Starred" />
                </ListItemButton>
                </List>
            </Collapse> */}
                
            <ListItemButton onClick={setToggle}>
                <ListItemIcon>
                    <Language></Language>
                </ListItemIcon>
                <ListItemText primary={<Typography variant='subtitle1'>Language</Typography>} />
                {!toggle ? <KeyboardArrowRight /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={toggle} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 4 }}>
                        <ListItemText primary="English - en" />
                    </ListItemButton>
                    <ListItemButton sx={{ pl: 4 }}>
                        <ListItemText primary="French - fr" />
                    </ListItemButton>
                    <ListItemButton sx={{ pl: 4 }}>
                        <ListItemText primary="Spanish - es" />
                    </ListItemButton>
                </List>
            </Collapse>
    
        <Divider />
        <MenuItem onClick={closeMenu}>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Support
        </MenuItem>
        <MenuItem onClick={() => {
            logout() 
            closeMenu()
        }}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
        </ReuseMenu>
    </>
    )
}

export default UserNavbar