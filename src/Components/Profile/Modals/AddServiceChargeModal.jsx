import React, { useState } from 'react';
import { Autocomplete, Box, Button, IconButton, InputAdornment, MenuItem, Modal, Stack, Typography } from '@mui/material';
// import { countries } from '../../../Lib/Countries/countries';
import countries from "../../../Lib/utils/all-countries-db/all-countries-db.json";
import { BlueButton, InputField } from '../../../Lib/MuiThemes/MuiComponents';
import { Close } from '@mui/icons-material';
// import currencyList from "../../../Lib/utils/currencyList.json";
import { LoaderConsumer } from '../../../Lib/Contexts/LoaderContext';
import axios from 'axios';
import { Axios, BASE_URL } from '../../../Lib/Axios/AxiosConfig';
import useSnackBar from '../../../Lib/CustomHooks/useSnackBar';

function AddServiceChargeModal({open, handleClose, setServiceChargesList}) {

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'card.background',
    borderRadius: 3,
    boxShadow: 24,
    p: 4,
  };

  const [isLoading, startLoading, restLoading] = LoaderConsumer();
  const {showSnackBar} = useSnackBar();
  const [countryName, setCountryName] = useState("");
  const [currencyFormat, setCurrencyFormat] = useState("");
  const [currencySymbol, setCurrencySymbol] = useState(null);
  const [serviceCharge, setServiceCharge] = useState("");
//   console.log(countryName);

  async function addServiceChage(){
    if(countryName === "" || currencyFormat === "" || serviceCharge === ""){
        return showSnackBar("error", "Please fill the required fields")
    }
    try{
        startLoading();

        const response = await Axios({
            method: 'post',
            url: `updateServiceCharge`,
            data: {
                countryName,
                currencyFormat,
                serviceCharge
            },
            auth: true,
        });
        if(response.status === 200){

            const getServiceCharge = await Axios({
                method: "get",
                url: `getServiceCharge`,
                auth: true,
            });
            console.log(getServiceCharge);
            if(getServiceCharge.status === 200){
                setServiceChargesList(getServiceCharge.data);
                showSnackBar("success", "Service charge added successfully");
                handleClose(false);
                setCurrencyFormat("");
                setCurrencySymbol(null);
                setServiceCharge("");
            }
            
        }
    }catch(err){
        console.log(err)
        showSnackBar("error", "Unable to add service charge, Try again later.")
    }finally{
        restLoading();
    }
  }

  return (
    <Modal
        open={open}
        onClose={() => handleClose(false)}
    >
            <Stack sx={style} spacing={3} direction="column">
                <Stack direction="row" alignItems="center" justifyContent="space-between">
                    <Typography variant='h4'>Add service charge</Typography>
                    <IconButton onClick={() => {
                        handleClose(false);
                        setCurrencyFormat("");
                        setCurrencySymbol(null);
                        setServiceCharge("");
                    }}>
                        <Close/>
                    </IconButton>
                </Stack>
                <Autocomplete
                    fullWidth
                    options={countries}
                    // autoHighlight
                    getOptionLabel={(option) => option.name ? option.name : ""}
                    isOptionEqualToValue={(option, value) => true}
                    onChange={(event, newVal) => {
                        if(newVal.name && newVal.currencies){
                            setCountryName(newVal.name)
                            setCurrencyFormat(`${newVal.currencies[0].name} - ${newVal.currencies[0].code}`)
                            setCurrencySymbol(newVal.currencies[0].symbol)
                        }
                    }}
                    renderOption={(props, option) => (
                        <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                        <img
                            loading="lazy"
                            width="20"
                            src={`https://flagcdn.com/w20/${option.alpha2Code.toLowerCase()}.png`}
                            srcSet={`https://flagcdn.com/w40/${option.alpha2Code.toLowerCase()}.png 2x`}
                            alt="flag"
                        />
                        {option.name} 
                        {/* ({option.code}) +{option.phone} */}
                        </Box>
                    )}
                    renderInput={(params) => (
                        <InputField 
                        {...params}
                        variant="outlined"
                        value={countryName}
                        label="Choose a country"
                        inputProps={{
                            ...params.inputProps,
                            autoComplete: 'off', // disable autocomplete and autofill
                        }}
                        />
                    )}
                />
                <InputField
                    fullWidth
                    size='medium'
                    type="text"
                    label="Currency format"
                    required
                    value={currencyFormat}
                    // onChange={(e) => setCurrencyFormat(e.target.value)}
                >
                    {/* <MenuItem value="">Select Currency format</MenuItem>
                    {currencyList.map((item, index) => (
                        <MenuItem key={index} value={item.code}>{item.name} - {item.symbol}</MenuItem>
                    ))} */}
                </InputField>

                <InputField
                    fullWidth
                    size='medium'
                    type="text"
                    label="Service charge"
                    value={serviceCharge}
                    onChange={(e) => setServiceCharge(e.target.value)}
                    InputProps={currencySymbol && {
                        startAdornment: <InputAdornment position="start">{currencySymbol}</InputAdornment>,
                    }}
                    required
                />
                <Stack direction="row" spacing={3} justifyContent="space-between">
                    <Button fullWidth variant="outlined" color='primary' onClick={() => {
                        handleClose(false);
                        setCurrencyFormat("");
                        setCurrencySymbol(null);
                        setServiceCharge("");
                    }}>Cancel</Button>
                    <BlueButton 
                        fullWidth 
                        loading={isLoading} 
                        onClick={() => {
                            addServiceChage();
                        }}
                    >
                        Add Service charge
                    </BlueButton>
                </Stack>
            </Stack>
    </Modal>
  )
}

export default AddServiceChargeModal