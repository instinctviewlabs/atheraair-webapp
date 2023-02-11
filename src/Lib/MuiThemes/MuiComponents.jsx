import React from 'react';
import { Button, styled, Card, TextField, Box, Typography, Avatar, FormControlLabel  } from '@mui/material';
import { appleColorIcon, normalLogo, facebookColorIcon, googleColorIcon, transparentLogo } from '../../Assests/assets';


export const BlueButton = styled(Button)(({theme}) => ({    //Contained Blue button
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.text.white,
    gap: 5,
    minWidth: 150,
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
    return <Button variant='outlined' color='text' {...props}>{props.children}</Button>
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
    input: {
        color: theme.palette.text.main
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
    boxSizing: "border-box"
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
    boxSizing: "border-box"
}))


export const StyledRadioControl = styled(FormControlLabel)(() => ({
    padding: "10px",
    marginRight: 2, 
    borderRadius: "10px",
    display: "flex",
    gap: 10,
    transition: "all 0.2s ease-in",
}))