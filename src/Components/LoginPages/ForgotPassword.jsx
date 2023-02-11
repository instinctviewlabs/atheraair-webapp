import React from 'react';
import { Box, Divider, Stack, TextField, Typography } from '@mui/material';
import { normalLogo} from '../../Assests/assets';
import { AnchorText, BlueButton, GoogleButton, TitleLogo } from '../../Lib/MuiThemes/MuiComponents';
import {MdOutlineKeyboardArrowLeft} from "react-icons/md";
import SideCarousel from './SideCarousel';
import { useNavigate } from 'react-router-dom';

function ForgotPassword() {
  
  const navigate = useNavigate();
  return (
    <Stack 
        direction="row" 
        height="99vh" 
        justifyContent="center"
        gap={10}
    >
        <SideCarousel></SideCarousel>   
        <Stack 
            p={5} 
            flexDirection="column"
            gap={3}

        >
            <TitleLogo></TitleLogo>
            <AnchorText onClick={() => navigate(-1)}>
                    <MdOutlineKeyboardArrowLeft/>
                    <Typography variant='subtitle1' component="span">
                        Back
                    </Typography>
            </AnchorText>
            <Stack spacing={5} direction="column" width={{xs: 350, sm: 550}}>
                <Box>
                    <Typography variant='h4'>Forgot your Password?</Typography>
                    <Typography variant='subtitle2'>Don't worry, happens to all of us. Enter your email below and recover your password</Typography>
                </Box>
                <TextField
                    size='small'
                    type="email"
                    label="Email"
                    required
                />
                <BlueButton>Submit</BlueButton>
                <Divider><Typography variant='subtitle2'>Or Login with</Typography></Divider>
                <GoogleButton>Sign In with Google</GoogleButton>
            </Stack>
        </Stack>
    </Stack>
  )
}

export default ForgotPassword