import React from 'react';
import { 
    Typography, 
    Badge,
    Avatar,
    Menu,
    ListItemButton,
    ListItemText,
    ListItemIcon,
} from '@mui/material';
import { AccountCircle, Logout, Payment } from '@mui/icons-material';
import { logoutUser } from '../../Lib/Redux/AuthSlice';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

function UserNavbar({auth}) {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [openMenu, setOpenMenu] = React.useState(null);

    const handleMenu = (event) => {
        setOpenMenu(event.currentTarget);
    }

    function logout(){
        dispatch(logoutUser());
        return navigate("/", {replace: true})
    }

    return (
    <>
        <Badge
            overlap="circular"
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            // badgeContent={<BsCheckCircleFill style={{color: "black", fontSize: 18}}/>}
        >
            <Avatar onClick={handleMenu} sx={{height: "50px", width: "50px", border: "3px solid rgb(184, 218, 255)", cursor: "pointer"}} alt="Remy Sharp" src={auth.photoUrl}/>
        </Badge>
        <Typography variant="h5" color="text.main">{auth.name}</Typography>
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
    )
}

export default UserNavbar