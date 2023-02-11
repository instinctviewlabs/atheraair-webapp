import React, { useState } from 'react';
import { Box, Checkbox, Divider, IconButton, InputAdornment, Stack, TextField, Typography } from '@mui/material';
import {VscEye, VscEyeClosed} from "react-icons/vsc";
import { AnchorText, BlueButton, GoogleButton, SpanText, TitleLogo } from '../../Lib/MuiThemes/MuiComponents';
import { usePasswordVisibility } from '../../Lib/CustomHooks/usePasswordVisibility';
import SideCarousel from './SideCarousel';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../Lib/Firebase/FirebaseConfig';



function Login() {

  const navigate = useNavigate();
  const [hidePassword, setHidePassword] = usePasswordVisibility();
  const [loginData, setLoginData] = useState({email: "", password: ""});
  const [isDataValidated, setDataValidated] = useState({email: false, password: false})

  /************** Form handling function ***************/

  const handleChange = (event) => {
    const {name, value} = event.target;
    setLoginData(prev => ({...prev, [name]: value}))
    setDataValidated(prev => ({...prev, [name]: false}))
  }

  /************** Form validation function ***************/

  const handleDataValidation = () => {

    let isValidated = true;

    if(loginData.email.length > 50){
        setDataValidated(prev => ({...prev, email: true}))
        isValidated = false;
    }

    if(loginData.password === ""){
        setDataValidated(prev => ({...prev, password: true}))
        isValidated = false;
    }

    return isValidated;
  }

  /************************** Api call : Post method  ******************/

  const login = async(event) => {
    event.preventDefault();

    if(handleDataValidation()){
        try{
            
            const loginUser = await signInWithEmailAndPassword(auth, loginData.email, loginData.password);
            console.log(loginUser)
            navigate("/")
        }catch(error){
            console.error(error)
        }
    }else{
        console.error("validation error");
    }
  }

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
            <Box>
                <Typography variant='h4'>Login</Typography>
                <Typography variant='subtitle2'>Login to access your Errances voyages account</Typography>
            </Box>
            <form onSubmit={login}>
            <Stack spacing={3} direction="column" width={{xs: 350, sm: 550}}>
                <TextField
                    name="email"
                    size='small'
                    type="email"
                    label="Email"
                    value={loginData.email}
                    onChange={handleChange}
                    error={isDataValidated.email}
                    helperText={isDataValidated.email && "Please enter a valid email"}
                    required
                />

                <TextField
                    required
                    name="password"
                    size='small'
                    label="Password"
                    type={hidePassword ? 'password' : 'text'}
                    edge="end"
                    value={loginData.password}
                    onChange={handleChange}
                    error={isDataValidated.password}
                    helperText={isDataValidated.password && "Password is must"}
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
                <BlueButton type='submit'>Login</BlueButton>
            </Stack>
            </form>
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