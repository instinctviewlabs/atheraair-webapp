import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { BlueButton, InputField, WhiteCard } from '../../../Lib/MuiThemes/MuiComponents';
import { IconButton, MenuItem, Stack } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { LoaderConsumer } from '../../../Lib/Contexts/LoaderContext';
import axios from 'axios';
import { BASE_URL } from '../../../Lib/Axios/AxiosConfig';
import { setUserDetails } from '../../../Lib/Redux/AccountSlice';
import { Close } from '@mui/icons-material';
import useSnackBar from '../../../Lib/CustomHooks/useSnackBar';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 700,
  bgcolor: 'background.paper',
  boxShadow: 24,
  borderRadius: 3,
  p: 4,
  display: "flex",
  gap: "25px",
  flexDirection: "column"
};

export default function EditPassengerModal(props) {
    
  const constantTravellerDetails = props.travellerDetails;
  const { auth } = useSelector(data => data.persistedReducer);
  const dispatch = useDispatch();
  const [isLoading, startLoading, restLoading] = LoaderConsumer();
  const { showSnackBar } = useSnackBar();
  const userId = auth.userId;
  const [isDataValidated, setDataValidated] = useState({name: false, email: false, gender: false, dob: false});
  const [passengerDetails, setPassengerDetails] = useState({});

  useEffect(() => {
    setPassengerDetails({
        name: props.travellerDetails.name,
        email: props.travellerDetails.email,
        dob: props.travellerDetails.dob,
        gender: props.travellerDetails.gender,
        nationality: props.travellerDetails.nationality,
        passportNumber: props.travellerDetails.passportNumber,
        expiryDate: props.travellerDetails.expiryDate,
        issuingCountry: props.travellerDetails.issuingCountry
    })
  },[props.travellerDetails]);

//   console.log(passengerDetails);
  
  /****************************Handling changes**************************** */

  function handleChanges(event){
    const {name, value} = event.target;

    setPassengerDetails(prevState => ({...prevState, [name]: value}));
    setDataValidated(prevState => ({...prevState, [name]: false}));
  }

  /****************************Form validation functions*******************************/

  const handleDataValidation = () => {

    let isValidated = true;

    if(passengerDetails.name.length > 50 || passengerDetails.name.length === 0){
        setDataValidated(prev => ({...prev, name: true}))
        isValidated = false;
    }

    if(passengerDetails.email.length === 0 || !/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i.test(passengerDetails.email)){
        setDataValidated(prev => ({...prev, email: true}))
        isValidated = false;
    }

    if(passengerDetails.gender === ""){
        setDataValidated(prev => ({...prev, gender: true}))
        isValidated = false;
    }
    
    if(passengerDetails.dob.length === 0){
        setDataValidated(prev => ({...prev, dob: true}))
        isValidated = false;
    }
    
    return isValidated;
  }

  /**************************API call : Add master passenger *******************************/

  async function EditTraveller(){
    if(!handleDataValidation()){
        return showSnackBar("error", "Please fill the mandatory fields")
    }
    try{
        startLoading();
        const response = await axios({
            method: "post",
            url: `${BASE_URL}/removeTraveller`,
            data: {userId, ...constantTravellerDetails}
        })
        
        if(response.status === 200){
            const addTraveller = await axios({
                method: "post",
                url: `${BASE_URL}/addTraveller`,
                data: {userId, ...passengerDetails}
            });
            if(addTraveller.status === 200){
                const getuser = await axios({
                    method: "post",
                    url: `${BASE_URL}/getUser`,
                    data: { userId }
                })
                if(getuser.status === 200){
                    dispatch(setUserDetails(getuser.data));
                    props.setOpen(false);
                }
            }
            
        }
    }catch(error){
        console.error(error)
    }finally{
        restLoading();
    }
  }


  return (
    <Box>
      <Modal
        open={props.open}
        onClose={() => {
            props.setOpen(false)
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
          {/* <Box sx={{
              display: "flex",
              justifyContent: "space-evenly",
              flexDirection: "column",
              px: 30,
              mt: 4,
              gap: 3,
            }}> */}
            <Box sx={style}>
                <Stack direction="row" alignItems="center" justifyContent="space-between">
                    <Typography variant='h4'>Edit traveller details</Typography>
                    <IconButton onClick={() => props.setOpen(false)}>
                        <Close></Close>
                    </IconButton>
                </Stack>
                <Typography variant='h5'>Mandatory</Typography>
                <Stack direction="row" spacing={4}>
                    <InputField
                        fullWidth
                        name="name"
                        type="text"
                        variant='outlined'
                        label="Name"
                        size='medium'
                        value={passengerDetails.name}
                        onChange={handleChanges}
                        error={isDataValidated.name}
                        helperText={isDataValidated.name && "Please enter a valid passenger name"}
                    />
                    <InputField
                        fullWidth
                        name="email"
                        type="email" 
                        variant='outlined'
                        label="Email"
                        size='medium'
                        value={passengerDetails.email}
                        onChange={handleChanges}
                        error={isDataValidated.email}
                        helperText={isDataValidated.email && "Please enter a valid email format"}
                    />
                </Stack>
                <Stack direction="row" spacing={4}>
                    <InputField
                        fullWidth
                        size='medium'
                        name='gender'
                        select
                        label="Gender"
                        value={passengerDetails.gender}
                        onChange={handleChanges}
                        error={isDataValidated.gender}
                        helperText={isDataValidated.gender && "Please enter gender"}
                    >
                        
                        <MenuItem value="">Select Gender</MenuItem>
                        <MenuItem value="Male">Male</MenuItem>
                        <MenuItem value="Female">Female</MenuItem>
                    </InputField>

                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DesktopDatePicker
                            disableFuture
                            label="Date of birth"
                            renderInput={(params) => <InputField
                                {...params}
                                onKeyDown={(e) => e.preventDefault()}
                                name='dob' 
                                fullWidth 
                                size="medium" 
                                error={isDataValidated.dob}
                                helperText={isDataValidated.dob && "Please enter a valid date format"}
                                inputProps={{"aria-readonly": true}}
                                value={passengerDetails.dob}
                                />}
                            onChange={(newValue) => newValue !== null && setPassengerDetails(prev => ({...prev, dob: moment(newValue["$d"]).format("YYYY-MM-DD")}))}
                        />
                    </LocalizationProvider>
                </Stack>
                <Typography variant='h5'>Optional fields</Typography>
                <Stack direction="row" spacing={4}>
                <InputField
                        fullWidth
                        name="nationality"
                        type="text" 
                        variant='outlined'
                        label="Nationality"
                        size='medium'
                        value={passengerDetails.nationality}
                        onChange={handleChanges}
                    />
                    <InputField
                        fullWidth
                        name="passportNumber"
                        type="text" 
                        variant='outlined'
                        label="Passport number"
                        size='medium'
                        value={passengerDetails.passportNumber}
                        onChange={handleChanges}
                    />
                </Stack>
                <Stack direction="row" spacing={4}>   
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DesktopDatePicker
                            disablePast
                            label="Expiry Date"
                            renderInput={(params) => <InputField 
                                name='expiryDate' 
                                fullWidth 
                                size="medium" 
                                {...params}
                                onKeyDown={(e) => e.preventDefault()}
                                inputProps={{"aria-readonly": true}}
                                value={passengerDetails.expiryDate}
                            />}
                            onChange={(newValue) => newValue !== null && setPassengerDetails(prev => ({...prev, expiryDate: moment(newValue["$d"]).format("YYYY-MM-DD")}))}
                        />
                    </LocalizationProvider>
                    <InputField
                        fullWidth
                        name="issuingCountry"
                        type="text" 
                        variant='outlined'
                        label="Passport issuing country"
                        size='medium'
                        value={passengerDetails.issuingCountry}
                        onChange={handleChanges}
                    />
                </Stack>
                <Stack>
                    <BlueButton loading={isLoading} onClick={EditTraveller} size='large'>
                        Save
                    </BlueButton>
                </Stack>
            </Box>
      </Modal>
    </Box>
  );
}
