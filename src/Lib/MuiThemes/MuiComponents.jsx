import React from 'react';
import { Button, styled, Card, TextField, Box, Typography, Avatar  } from '@mui/material';
import { appleColorIcon, atheraNormalLogo, facebookColorIcon, googleColorIcon } from '../../Assests/assets';


export const BlueButton = styled(Button)(({theme}) => ({    //Contained Blue button
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.text.white,
    gap: 5,
    minWidth: 150,
    "&:hover": {
        backgroundColor: theme.palette.primary.light,
    }
}));

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

export const AtheraTitle = () => (                          // Athera tiltle with logo
    <Box 
        display="flex" 
        flexDirection="row" 
        alignItems="center" 
        gap="5px"
    >
        <img src={atheraNormalLogo} alt="logo" />
        <Typography variant='h4' color="text.main">
            ATHERA AIR
        </Typography>
    </Box>
);

export const AnchorText = styled(Typography)(() => ({   // Yellow color link text
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