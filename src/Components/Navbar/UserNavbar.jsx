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
} from '@mui/material';
import { AccountCircle, Logout, Payment, PersonAdd, Settings } from '@mui/icons-material';
import { logoutUser } from '../../Lib/Redux/AuthSlice';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import useMenu from '../../Lib/CustomHooks/useMenu';
import { ReuseMenu } from '../../Lib/MuiThemes/MuiComponents';
import { clearUserDetails } from '../../Lib/Redux/AccountSlice';

function UserNavbar({auth, profile}) {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {menu, openMenu, closeMenu} = useMenu();

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
            <Avatar onClick={openMenu} sx={{height: "50px", width: "50px", border: "3px solid rgb(184, 218, 255)", cursor: "pointer"}} alt="Remy Sharp" src={auth.photoUrl}/>
        </Badge>
        <Typography variant="h5" color="text.main">{profile.name}</Typography>

        <ReuseMenu menu={menu} closeMenu={closeMenu}>
            {/* <ListItemButton onClick={() => {
                navigate("/profile/account")
                closeMenu()
            }}>
                <ListItemIcon>
                    <AccountCircle></AccountCircle>
                </ListItemIcon>
                <ListItemText primary={<Typography variant='subtitle1'>Profile</Typography>} />
            </ListItemButton>
            <ListItemButton onClick={closeMenu}>
                <ListItemIcon>
                    <Payment></Payment>
                </ListItemIcon>
                <ListItemText primary={<Typography variant='subtitle1'>Support</Typography>} />
            </ListItemButton>
                
            <ListItemButton onClick={() => {
                logout() 
                closeMenu()
            }}>
                <ListItemIcon>
                    <Logout></Logout>
                </ListItemIcon>
                <ListItemText primary={<Typography variant='subtitle1'>Logout</Typography>} />
            </ListItemButton> */}
        <MenuItem onClick={() => {
            navigate("/profile/account");
            closeMenu();
        }}>
          <Avatar /> Profile
        </MenuItem>
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