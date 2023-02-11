import React, { useState } from 'react';

// ui imports
import { Alert, Box, Checkbox, Divider, FormControlLabel, FormGroup, IconButton, InputAdornment, Snackbar, Stack, Step, StepLabel, Stepper, TextField, Typography } from '@mui/material';
import { usePasswordVisibility } from '../../Lib/CustomHooks/usePasswordVisibility';
import {VscEye, VscEyeClosed} from "react-icons/vsc";
import { BlueButton, GoogleButton, SpanText, TitleLogo } from '../../Lib/MuiThemes/MuiComponents';
import SideCarousel from './SideCarousel';

// Config imports
import { auth } from "../../Lib/Firebase/FirebaseConfig";
import useAxios from '../../Lib/CustomHooks/useAxios';
import { AxiosConfig, BASE_URL } from '../../Lib/Axios/AxiosConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';



function Signup() {
  
  /****************** States *******************/

  const navigate = useNavigate();
  const [signupData, setSignupData] = useState({firstname: "", lastname: "", email: "",phoneno: "", password: "", confirmPassword: "", isTCchecked: false});
  const [isDataValidated, setDataValidated] = useState({firstname: false, lastname: false, email: false, phoneno: false, password: false})
  const [hidePassword, setHidePassword] = usePasswordVisibility();
  const [hideConfirmPassword, setHideConfirmPassword] = usePasswordVisibility();
  const steps = [
    'Set up your account',
    'Verify code via email',
    'Add payment method',
  ];
  const [open, setOpen] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  /************** Form handling function ***************/

  const handleChange = (event) => {
    const {name, value, checked, type} = event.target;
    setSignupData(prev => ({...prev, [name]: type === "checkbox" ? checked : value}))
    setDataValidated(prev => ({...prev, [name]: false}))
  }

  /************** Form validation function ***************/

  const handleDataValidation = () => {

    let isValidated = true;

    if(signupData.firstname.length > 20){
        setDataValidated(prev => ({...prev, firstname: true}))
        isValidated = false;
    }

    if(signupData.lastname.length > 20){
        setDataValidated(prev => ({...prev, lastname: true}))
        isValidated = false;
    }

    if(signupData.email.length > 50){
        setDataValidated(prev => ({...prev, email: true}))
        isValidated = false;
    }

    if(signupData.phoneno.length !== 10){
        setDataValidated(prev => ({...prev, phoneno: true}))
        isValidated = false;
    }

    if(signupData.password !== signupData.confirmPassword){
        setDataValidated(prev => ({...prev, password: true}))
        isValidated = false;
    }

    if(!signupData.isTCchecked){
        isValidated = false;
    }
    
    return isValidated;
  }

  /************** API call : Post method ***************/

  const signup = async(event) => {
    event.preventDefault();

    if(handleDataValidation()){
        
        try{
            
            const createuser = await createUserWithEmailAndPassword(auth, signupData.email, signupData.password);
            console.log(createuser)
            const response = await axios.post(`${BASE_URL}/createUser`, {
                userId: auth.currentUser.uid,
                name: `${signupData.firstname} ${signupData.lastname}`, 
                email: signupData.email, 
                pass: signupData.password
            });

            if(response.status === 200 && response.data === "Success"){
                navigate("/user/verify")
            }
        }catch(error){
            console.error(error)
        }
    }else{
        console.error("validation error");
        // <Snackbar 
        //     open={open} 
        //     message="Hello there" 
        //     autoHideDuration={6000} 
        //     onClose={handleClose}
        //     anchorOrigin={{vertical: "bottom", horizontal: "center"}}
        // ></Snackbar>
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
            gap={2}
        >
            <TitleLogo></TitleLogo>
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
            <form onSubmit={signup}>
            <Stack spacing={2} direction="column" width={{xs: 350, sm: 550}}>
                <Box sx={{
                    display: "flex",
                    flexDirection: {xs: "column", sm: "row"},
                    justifyContent: "space-between",
                    gap: "20px"
                }}>
                    <TextField
                        fullWidth
                        error={isDataValidated.firstname}
                        helperText={isDataValidated.firstname && "Please enter a valid First name"}
                        name="firstname"
                        size='small'
                        type="text"
                        label="First Name"
                        required
                        value={signupData.firstname}
                        onChange={handleChange}
                    />
                    <TextField
                        fullWidth
                        error={isDataValidated.lastname}
                        helperText={isDataValidated.lastname && "Please enter a valid Last name"}
                        name="lastname"
                        size='small'
                        type="text"
                        label="Last Name"
                        required
                        value={signupData.lastname}
                        onChange={handleChange}

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
                        name="email"
                        size='small'
                        type="email"
                        label="Email"
                        required
                        value={signupData.email}
                        onChange={handleChange}
                        error={isDataValidated.email}
                        helperText={isDataValidated.email && "Please enter a valid Email"}
                    />

                    <TextField
                        fullWidth
                        name="phoneno"
                        size='small'
                        type="text"
                        label="Phone number"
                        required
                        value={signupData.phoneno}
                        onChange={handleChange}
                        error={isDataValidated.phoneno}
                        helperText={isDataValidated.phoneno && "Please enter a valid mobile number format"}
                    />
                </Box>
                <TextField
                    fullWidth
                    required
                    name='password'
                    size='small'
                    label="Password"
                    type={hidePassword ? 'password' : 'text'}
                    edge="end"
                    value={signupData.password}
                    onChange={handleChange}
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
                    name='confirmPassword'
                    size='small'
                    label="Confirm Password"
                    type={hideConfirmPassword ? 'password' : 'text'}
                    edge="end"
                    value={signupData.confirmPassword}
                    onChange={handleChange}
                    error={isDataValidated.password}
                    helperText={isDataValidated.password && "Password does not match"}
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
                    <FormGroup>
                        <FormControlLabel
                            aria-label='terms-and-conditions' 
                            name="isTCchecked" 
                            checked={signupData.isTCchecked} 
                            onChange={handleChange} 
                            control={<Checkbox />} 
                            label={<Typography>I agree to all the<SpanText component="span"> terms </SpanText> and <SpanText component="span"> privacy policies </SpanText></Typography>} 
                        />
                    </FormGroup>
                </Stack>
                <BlueButton type="submit">Create account</BlueButton>
            </Stack>
            </form>
            <Box 
                display="flex" 
                justifyContent="center"
            >
                <Typography>Already have an account? <SpanText onClick={() => navigate("/login")} component="span">Login</SpanText></Typography>
            </Box>
            <Divider><Typography variant='subtitle2'>Or Sign up with</Typography></Divider>
            <GoogleButton>Sign up with Google</GoogleButton>
        </Stack>
    </Stack>
  )
}

export default Signup