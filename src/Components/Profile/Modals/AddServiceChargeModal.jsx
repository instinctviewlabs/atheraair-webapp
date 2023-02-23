import React, { useState } from 'react';
import { Autocomplete, Box, Button, IconButton, InputAdornment, MenuItem, Modal, Stack, Typography } from '@mui/material';
import { countries } from '../../../Lib/Countries/countries';
import { BlueButton, InputField } from '../../../Lib/MuiThemes/MuiComponents';
import { Close } from '@mui/icons-material';
import currencyList from "../../../Lib/utils/currencyList.json";
import { LoaderConsumer } from '../../../Lib/Contexts/LoaderContext';
import axios from 'axios';
import { BASE_URL } from '../../../Lib/Axios/AxiosConfig';
import useSnackBar from '../../../Lib/CustomHooks/useSnackBar';

function AddServiceChargeModal({open, handleClose}) {

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
  const [serviceCharge, setServiceCharge] = useState("");

  async function addServiceChage(){
    if(countryName === "" || currencyFormat === "" || serviceCharge === ""){
        return showSnackBar("error", "Please fill the required fields")
    }
    try{
        startLoading();
        const urlencoded = new URLSearchParams();
        urlencoded.append("countryName", countryName);
        urlencoded.append("currencyFormat", currencyFormat);
        urlencoded.append("serviceCharge", serviceCharge);

        const response = await axios({
            method: 'POST',
            url: `${BASE_URL}/updateServiceCharge`,
            data: urlencoded,
            redirect: 'follow'
        });
        if(response.status === 200){
            showSnackBar("success", "Service charge added successfully");
            handleClose(false)
        }
    }catch(err){
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
                    <IconButton onClick={() => handleClose(false)}>
                        <Close/>
                    </IconButton>
                </Stack>
                <Autocomplete
                    fullWidth
                    options={countries}
                    autoHighlight
                    getOptionLabel={(option) => option.label}
                    isOptionEqualToValue={(option, value) => true}
                    onChange={(event, newVal) => setCountryName(newVal.label)}
                    renderOption={(props, option) => (
                        <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                        <img
                            loading="lazy"
                            width="20"
                            src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                            srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                            alt="flag"
                        />
                        {option.label} 
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
                    select
                    fullWidth
                    size='medium'
                    type="text"
                    label="Currency format"
                    required
                    value={currencyFormat}
                    onChange={(e) => setCurrencyFormat(e.target.value)}
                >
                    <MenuItem value="">Select Currency format</MenuItem>
                    {currencyList.map((item, index) => (
                        <MenuItem key={index} value={item.code}>{item.name} - {item.symbol}</MenuItem>
                    ))}
                </InputField>

                <InputField
                    fullWidth
                    size='medium'
                    type="text"
                    label="Service charge"
                    value={serviceCharge}
                    onChange={(e) => setServiceCharge(e.target.value)}
                    required
                />
                <Stack direction="row" spacing={3} justifyContent="space-between">
                    <Button fullWidth variant="outlined" color='primary' onClick={() => handleClose(false)}>Cancel</Button>
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