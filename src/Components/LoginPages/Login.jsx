import React from 'react';
import { Box, Checkbox, Divider, IconButton, InputAdornment, Stack, TextField, Typography } from '@mui/material';
import { atheraNormalLogo } from '../../Assests/assets';
import {VscEye, VscEyeClosed} from "react-icons/vsc";
import { AnchorText, BlueButton, GoogleButton, SpanText } from '../../Lib/MuiThemes/MuiComponents';
import { usePasswordVisibility } from '../../Lib/CustomHooks/usePasswordVisibility';
import SideCarousel from './SideCarousel';
import { useNavigate } from 'react-router-dom';



function Login() {

  const navigate = useNavigate();
  const [hidePassword, setHidePassword] = usePasswordVisibility();

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
            <Box>
                <Typography variant='h4'>Login</Typography>
                <Typography variant='subtitle2'>Login to access your Athera account</Typography>
            </Box>
            <Stack spacing={3} direction="column" width={{xs: 350, sm: 550}}>
                <TextField
                    size='small'
                    type="email"
                    label="Email"
                    required
                />

                <TextField
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
                        <Checkbox aria-label='Remember me' defaultChecked/>
                        <Typography>Remember me</Typography>
                    </Box>
                    <AnchorText onClick={() => navigate("/password/forgot")}>Forgot Password?</AnchorText>
                </Stack>
                <BlueButton>Login</BlueButton>
            </Stack>
            <Box 
                display="flex" 
                flexDirection="row" 
                justifyContent="center"
            >
                <Typography>Don't have an account? <SpanText onClick={() => navigate("/signup")} component="span"> Sign up</SpanText></Typography>
            </Box>
            <Divider><Typography variant='subtitle2'>Or Login with</Typography></Divider>
            <GoogleButton>Sign In with Google</GoogleButton>
        </Stack>
    </Stack>
  )
}

export default Login