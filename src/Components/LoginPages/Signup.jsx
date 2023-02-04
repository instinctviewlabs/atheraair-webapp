import React from 'react';
import { Box, Checkbox, Divider, IconButton, InputAdornment, Stack, Step, StepLabel, Stepper, TextField, Typography } from '@mui/material';
import { usePasswordVisibility } from '../../Lib/CustomHooks/usePasswordVisibility';
import { atheraNormalLogo } from '../../Assests/assets';
import {VscEye, VscEyeClosed} from "react-icons/vsc";
import { AnchorText, BlueButton, GoogleButton } from '../../Lib/MuiThemes/MuiComponents';
import SideCarousel from './SideCarousel';
import { useNavigate } from 'react-router-dom';


function Signup() {
  
  const navigate = useNavigate();
  const [hidePassword, setHidePassword] = usePasswordVisibility();
  const [hideConfirmPassword, setHideConfirmPassword] = usePasswordVisibility();
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
            <Stepper activeStep={0} alternativeLabel >
            {steps.map((label) => (
                <Step key={label}>
                <StepLabel><Typography variant='subtitle1'>{label}</Typography></StepLabel>
                </Step>
            ))}
            </Stepper>
            <Box>
                <Typography variant='h4'>Sign up</Typography>
                <Typography variant='subtitle2'>Let's get you all set up so that you can access your personal account</Typography>
            </Box>
            <Stack spacing={2} direction="column" width={{xs: 350, sm: 550}}>
                <Box sx={{
                    display: "flex",
                    flexDirection: {xs: "column", sm: "row"},
                    justifyContent: "space-between",
                    gap: "20px"
                }}>
                    <TextField
                        fullWidth
                        size='small'
                        type="text"
                        label="First Name"
                        required
                    />
                    <TextField
                        fullWidth
                        size='small'
                        type="text"
                        label="Last Name"
                        required

                    />
                </Box>

                <Box sx={{
                    display: "flex",
                    flexDirection: {xs: "column", sm: "row"},
                    justifyContent: "space-between",
                    gap: "20px"
                }}>
                    <TextField
                        fullWidth
                        size='small'
                        type="email"
                        label="Email"
                        required

                    />

                    <TextField
                        fullWidth
                        size='small'
                        type="text"
                        label="Phone number"
                        required

                    />
                </Box>
                <TextField
                    fullWidth
                    required
                    size='small'
                    label="Password"
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
                <TextField
                    fullWidth
                    required
                    size='small'
                    label="Confirm Password"
                    type={hideConfirmPassword ? 'password' : 'text'}
                    edge="end"
                    // value={values.password}
                    // onChange={handleChange('password')}
                    InputProps={{
                        endAdornment: <InputAdornment position="end">{hideConfirmPassword ? 
                            <IconButton onClick={() => setHideConfirmPassword(false)}>
                            <VscEyeClosed/>
                            </IconButton> : 
                            <IconButton onClick={() => setHideConfirmPassword(true)}>
                            <VscEye/>
                            </IconButton>
                        }
                        </InputAdornment>,
                    }}
                />
                <Stack 
                    justifyContent="space-between" 
                    alignItems="center" 
                    direction="row"
                >
                    <Box 
                        display="flex" 
                        flexDirection="row" 
                        alignItems="center"
                    >
                        <Checkbox aria-label='terms-and-conditions'/>
                        <Typography>I agree to all the<AnchorText component="span"> terms </AnchorText> and <AnchorText component="span"> privacy policies </AnchorText></Typography>
                    </Box>
                </Stack>
                <BlueButton>Create account</BlueButton>
            </Stack>
            <Box 
                display="flex" 
                justifyContent="center"
            >
                <Typography>Already have an account? <AnchorText onClick={() => navigate("/login")} component="span">Login</AnchorText></Typography>
            </Box>
            <Divider><Typography variant='subtitle2'>Or Sign up with</Typography></Divider>
            <GoogleButton>Sign up with Google</GoogleButton>
        </Stack>
    </Stack>
  )
}

export default Signup