import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
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

export default function AddPassengerModal({open, setOpen}) {

  const { auth } = useSelector(data => data.persistedReducer);
  const dispatch = useDispatch();
  const [isLoading, startLoading, restLoading] = LoaderConsumer();
  const userId = auth.userId;
  const [passengerDetails, setPassengerDetails] = useState({
    name: "",
    email: "",
    dob: "",
    gender: "",
    nationality: "",
    passportNumber: "",
    expiryDate: "",
    issuingCountry: ""
  })


  function handleChanges(event){
    const {name, value} = event.target;

    setPassengerDetails(prevState => ({...prevState, [name]: value}))
  }

  async function addTraveller(){
    try{
        startLoading();
        const response = await axios({
            method: "post",
            url: `${BASE_URL}/addTraveller`,
            data: {userId, ...passengerDetails}
        })
        if(response.status === 200){
            const getuser = await axios.post(`${BASE_URL}/getUser`,{userId});
            dispatch(setUserDetails(getuser.data));
            setOpen(false);
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
        open={open}
        onClose={() => setOpen(false)}
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
                    <Typography variant='h4'>Add traveller</Typography>
                    <IconButton onClick={() => setOpen(false)}>
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
                    >
                        <MenuItem value="male">Male</MenuItem>
                        <MenuItem value="female">Female</MenuItem>
                        <MenuItem value="unknown">Unknown</MenuItem>
                    </InputField>

                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DesktopDatePicker
                            disableFuture
                            label="Date of birth"
                            renderInput={(params) => <InputField name='dob' fullWidth size="medium" {...params} />}
                            value={passengerDetails.dob}
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
                            renderInput={(params) => <InputField name='expiryDate' fullWidth size="medium" {...params} />}
                            value={passengerDetails.expiryDate}
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
                    <BlueButton loading={isLoading} onClick={addTraveller} size='large'>
                        Add passenger
                    </BlueButton>
                </Stack>
            </Box>
      </Modal>
    </Box>
  );
}