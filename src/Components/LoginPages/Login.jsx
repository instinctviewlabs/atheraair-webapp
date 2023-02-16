import React, { useContext, useState } from 'react';
import { Box, Checkbox, Divider, IconButton, InputAdornment, Snackbar, Stack, TextField, Typography } from '@mui/material';
import {VscEye, VscEyeClosed} from "react-icons/vsc";
import { AnchorText, BlueButton, GoogleButton, SpanText, TitleLogo } from '../../Lib/MuiThemes/MuiComponents';
import { usePasswordVisibility } from '../../Lib/CustomHooks/usePasswordVisibility';
import SideCarousel from './SideCarousel';
import { useNavigate } from 'react-router-dom';
import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth, SignInWithGoogle } from '../../Lib/Firebase/FirebaseConfig';
import useLoader from '../../Lib/CustomHooks/useLoader';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../Lib/Redux/AuthSlice';
import { LoaderConsumer } from '../../Lib/Contexts/LoaderContext';
import useSnackBar from '../../Lib/CustomHooks/useSnackBar';
import axios from 'axios';
import { BASE_URL } from '../../Lib/Axios/AxiosConfig';



function Login() {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { showSnackBar } = useSnackBar();
  const [loading, startLoading, restLoading] = LoaderConsumer();
  const [hidePassword, setHidePassword] = usePasswordVisibility();
  const [loginData, setLoginData] = useState({email: "", password: ""});
  const [isDataValidated, setDataValidated] = useState({email: false, password: false});


  

  /************** Form handling function ***************/

  const handleChange = (event) => {
    const {name, value} = event.target;
    setLoginData(prev => ({...prev, [name]: value}))
    setDataValidated(prev => ({...prev, [name]: false}))
  }

  /************** Form validation function ***************/

  const handleDataValidation = () => {

    let isValidated = true;

    if(loginData.email.length === 0 || !/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i.test(loginData.email)){
        setDataValidated(prev => ({...prev, email: true}))
        isValidated = false;
    }

    if(loginData.password.length < 6 || loginData.password.length > 18 || !/^(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,16}$/.test(loginData.password)){
        setDataValidated(prev => ({...prev, password: true}))
        isValidated = false;
    }

    return isValidated;
  }

  /************************** Api call : Login with credentials  ******************/

  const login = async(event) => {
    event.preventDefault();

    if(handleDataValidation()){
        try{

            startLoading();
            const loginWithEmailAndPassword = await signInWithEmailAndPassword(auth, loginData.email, loginData.password);
            // console.log(loginWithEmailAndPassword);
            const getuser = await axios.post(`${BASE_URL}/getUser`, {userId: auth.currentUser.uid})
            console.log(getuser);
            dispatch(loginUser({
                auth: true, 
                role: getuser.data.type, 
                userId: auth.currentUser.uid,
                email: getuser.data.email,
                name: getuser.data.name,
                // issuingCountry: "India",
                // nationality: "American",
                // type: "user",
                // gender: "male",
                // name: "John",
                // dob: "1863/06/02",
                // masterList: [],
                // number: "456456",
                // email: "test5@test5.com",
                // expiryDate: "2023/06/06",
                // passportNumber: "abc123"
            }))
            navigate("/", {replace: true})

        }catch(error){

            console.log(error)
            showSnackBar("error", "Error occured please try again later");

        }finally{
            restLoading();
        }
    }else{
        showSnackBar("warning", "Please enter valid inputs to login")
    }
  }

  /******************************Api call : Login with google***************************** */

  const loginWithGoogle = async() => {
    try{
        const provider = new GoogleAuthProvider();
        const response = await signInWithPopup(auth, provider)
        const getuser = await axios.post(`${BASE_URL}/getUser`, {userId: auth.currentUser.uid})
        console.log(getuser);
        dispatch(loginUser({
            auth: true,
            role: "admin", 
            name: response.user.displayName, 
            email: response.user.email,
            emailVerified: response.user.emailVerified,
            phoneNumber: response.user.phoneNumber,
            photoUrl: response.user.photoURL
        }))
        navigate("/", {replace: true})
    }catch(err){
        console.log(err)
        showSnackBar("error", "Error occured please try again later") 
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
                    helperText={isDataValidated.password && "Password must contains alpha-numeric characters and length should be above 6 digit"}
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
                <BlueButton loading={loading} type='submit'>Login</BlueButton>
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
            <GoogleButton onClick={loginWithGoogle}>Sign In with Google</GoogleButton>
        </Stack>
    </Stack>
  )
}

export default Login