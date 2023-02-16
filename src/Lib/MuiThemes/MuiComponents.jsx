import React from 'react';
import { Button, styled, Card, TextField, Box, Typography, Avatar, FormControlLabel, Menu,  } from '@mui/material';
import { appleColorIcon, normalLogo, facebookColorIcon, googleColorIcon, transparentLogo } from '../../Assests/assets';
import { LoadingButton } from '@mui/lab';


export const BlueButton = styled(LoadingButton)(({theme}) => ({    //Contained Blue button
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.text.white,
    gap: 5,
    minWidth: 150,
    cursor: "pointer",
    "&:hover": {
        backgroundColor: theme.palette.primary.light,
    }
}));

export const BlueBox = styled(Box)(({theme}) => ({                 // Box with blue border

    display: "flex",
    alignItems: "center", 
    height: "auto", 
    width: "auto",
    gap: "10px", 
    border: `1px solid ${theme.palette.primary.main}`, 
    borderRadius: "10px",
    padding: "5px",

}))


export const BlackButton = styled(Button)(({theme}) => ({   //Contained black button
    backgroundColor: theme.palette.common.black,
    color: theme.palette.text.white,
    "&:hover": {
        backgroundColor: theme.palette.common.black
    }
}))

export const BlackButtonOutlined = (props) => {     //Border lined black button
    return <LoadingButton variant='outlined' color='text' {...props}>{props.children}</LoadingButton>
}

export const WhiteCard = (props) => {      //white card component
    return(
        <Card {...props} elevation={0} sx={{
            backgroundColor: "card.background",
            borderRadius: "10px",
            p: 2,
            boxShadow: "0px 4px 16px rgba(141, 211, 187, 0.15)",
        }}>
            {props.children}
        </Card>
    )
}

export const InputField = styled(TextField)(({theme}) => ({     //Styled input field
    backgroundColor: theme.palette.card.background,
    borderRadius: theme.shape.borderRadius,
    border: theme.palette.text.main,
    input: {
        color: theme.palette.text.main,
    },
    '& label': {
        color: theme.palette.text.main,
    },
    '& label.Mui-focused': {
        color: theme.palette.text.main,
    },
    ".css-11su70q-MuiFormLabel-root-MuiInputLabel-root.Mui-disabled": {
        color: theme.palette.text.main
    },
    ".css-nz481w-MuiInputBase-input-MuiInput-input.Mui-disabled ": {
        "-webkit-text-fill-color": theme.palette.text.main
    },

    '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: theme.palette.text.main,
        },
        '&:hover fieldset': {
          borderColor: theme.palette.text.main,
        },
        '&.Mui-focused fieldset': {
          borderColor: theme.palette.text.main,
        },
    }
}));

export const TitleLogo = () => (                          // tiltle with logo
    <Box 
        display="flex" 
        flexDirection="row"
        justifyContent="center" 
        alignItems="center" 
        gap="5px"
    >
        <img src={transparentLogo} alt="logo" />
    </Box>
);

export const AnchorText = styled(Typography)(() => ({   // Yellow color link text
    display: "flex", 
    alignItems: "center",
    color: "#FF8682",
    cursor: "pointer"
}));

export const SpanText = styled(Typography)(() => ({   // Yellow color span text
    color: "#FF8682",
    cursor: "pointer"
}));

export const GoogleButton = (props) => {                // Google button component
    return(
        <Button 
            variant="outlined"
            sx={{gap: "10px"}}
            {...props}
        >
            <img src={googleColorIcon} alt="img" height={21} width={21} />
            {props.children}
        </Button>
    )
}

export const AppleButton = (props) => {                //Apple button Component
    return(
        <Button variant="outlined"
            sx={{gap: "10px"}}
        >
            <img src={appleColorIcon} alt="img" height={21} width={21} />
            {props.children}
        </Button>
    )
}

export const FacebookButton = (props) => {                //Facebook button Component
    return(
        <Button 
            variant="outlined"
            sx={{gap: "10px"}}
        >
            <img src={facebookColorIcon} alt="img" height={21} width={21} />
            {props.children}
        </Button>
    )
}

export const AvatarProfile =  styled(Avatar)(({ theme }) => ({
    width: 160,
    height: 160,
    border: `4px solid ${theme.palette.veryLightBlue.main}`,
}));

export const FullScreenLoader = () => (
    <>
    <Box sx={{
        height: "100vh", 
        width: "auto", 
        backgroundColor: "card.background",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        filter: "blur(4px)"
    }}>
        <img height={200} width={200} src={normalLogo} alt="loader" />
    </Box>
    </>
)

export const SavedCard = styled(Box)(({theme}) => ({
    height: "200px",
    width: "auto",
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.text.white,
    borderRadius: "15px",
    padding: "20px",
    display: "flex", 
    flexDirection: "column", 
    justifyContent: "space-between",
    boxSizing: "border-box",
    cursor: "pointer"
}));

export const AddNewCard = styled(Box)(({theme}) => ({
    height: "198px",
    width: "auto",
    color: theme.palette.primary.main,
    border: `3px dashed ${theme.palette.primary.main}`,
    borderRadius: "15px",
    padding: "20px",
    display: "flex",
    flexDirection: "column", 
    alignItems: "center",
    justifyContent: "center",
    boxSizing: "border-box",
    cursor: "pointer"
}))


export const StyledRadioControl = styled(FormControlLabel)(() => ({
    padding: "10px",
    marginRight: 2, 
    borderRadius: "10px",
    display: "flex",
    gap: 10,
    transition: "all 0.2s ease-in",
}));

export const ReuseMenu = (props) => {
    // const [openMenu, setOpenMenu] = React.useState(null);

    return (
        <Menu
            anchorEl={props.menu}
            open={Boolean(props.menu)}
            onClose={props.closeMenu}
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
                elevation: 1,
                sx: {
                    overflow: 'visible',
                    // filter: 'drop-shadow(2px 2px 2px rgba(0,0,0,0.5))',
                    boxShadow: 1,
                    mt: -1,
                    '& .MuiAvatar-root': {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                    },
                    // '&:before': {
                    // content: '""',
                    // display: 'block',
                    // position: 'absolute',
                    // top: 0,
                    // right: 14,
                    // width: 10,
                    // height: 10,
                    // bgcolor: 'background.paper',
                    // transform: 'translateY(-50%) rotate(45deg)',
                    // boxShadow: "0px 0px 2px 0px",
                    // zIndex: 0,
                    // }
                }
            }}
        >
            {props.children}
            {/* <ListItemButton onClick={() => {
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
            </ListItemButton> */}
        </Menu>
    )
}