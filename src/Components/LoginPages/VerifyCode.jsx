import React from 'react';
import { Box, Stack, TextField, Typography, InputAdornment, IconButton, Stepper, Step, StepLabel } from '@mui/material';
import {VscEye, VscEyeClosed} from "react-icons/vsc";
import { atheraNormalLogo} from '../../Assests/assets';
import { AnchorText, BlueButton } from '../../Lib/MuiThemes/MuiComponents';
import {MdOutlineKeyboardArrowLeft} from "react-icons/md";
import SideCarousel from './SideCarousel';
import { usePasswordVisibility } from '../../Lib/CustomHooks/usePasswordVisibility';
import { useNavigate } from 'react-router-dom';

function VerifyCode() {

  const navigate = useNavigate();
  const [hidePassword, setHidePassword] = usePasswordVisibility();
  const steps = [
    'Set up Athera account',
    'Verify code via email',
    'Add payment method',
  ];
  
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
            gap={2}

        >
            <Box 
                display="flex" 
                flexDirection="row" 
                alignItems="center" 
                gap="5px"
                justifyContent={{
                    xs: "center",
                    md: "flex-start"
                }}
            >
                <img src={atheraNormalLogo} alt="logo" />
                <Typography variant='h4' color="black">
                    ATHERA AIR
                </Typography>
            </Box>
            <Stepper activeStep={1} alternativeLabel >
            {steps.map((label) => (
                <Step key={label}>
                <StepLabel><Typography variant='subtitle1'>{label}</Typography></StepLabel>
                </Step>
            ))}
            </Stepper>
            <AnchorText onClick={() => navigate(-1)} sx={{display: "flex", alignItems: "center"}}>
                    <MdOutlineKeyboardArrowLeft/>
                    <Typography variant='subtitle1' component="span">
                        Back
                    </Typography>
            </AnchorText>
            <Stack spacing={3} direction="column" width={{xs: 350, sm: 550}}>
                <Box>
                    <Typography variant='h4'>Verify code</Typography>
                    <Typography variant='subtitle2'>An authentication code has been sent to your email</Typography>
                </Box>
                <TextField
                    fullWidth
                    required
                    size='small'
                    label="Enter code"
                    type={hidePassword ? 'password' : 'text'}
                    edge="end"
                    // value={values.password}
                    // onChange={handleChange('password')}
                    InputProps={{
                        endAdornment: <InputAdornment position="end">{hidePassword ? 
                            <IconButton onClick={() => setHidePassword(false)}>
                            <VscEyeClosed/>
                            </IconButton> : 
                            <IconButton onClick={() => setHidePassword(true)}>
                            <VscEye/>
                            </IconButton>
                        }
                        </InputAdornment>,
                    }}
                />
                <Typography>Didn't receive a code? <AnchorText component="span"> Resend </AnchorText></Typography>
                <BlueButton>Verify</BlueButton>
            </Stack>
        </Stack>
    </Stack>
  )
}

export default VerifyCode