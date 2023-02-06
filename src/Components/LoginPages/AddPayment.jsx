import React, { useState } from 'react';
import { usePasswordVisibility } from '../../Lib/CustomHooks/usePasswordVisibility';
import { Box, Checkbox, Stack, TextField, Typography, IconButton, InputAdornment, MenuItem, Stepper, Step, StepLabel } from '@mui/material';
import { atheraNormalLogo } from '../../Assests/assets';
import {VscEye, VscEyeClosed} from "react-icons/vsc";
import { AnchorText, BlueButton } from '../../Lib/MuiThemes/MuiComponents';
import SideCarousel from './SideCarousel';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';


function AddPayment() {

  const navigate = useNavigate();
  const [hideCvc, setHideCvc] = usePasswordVisibility();
  const [date, setDate] = useState(new Date());
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
            <Stepper activeStep={2} alternativeLabel >
            {steps.map((label) => (
                <Step key={label}>
                <StepLabel><Typography variant='subtitle1'>{label}</Typography></StepLabel>
                </Step>
            ))}
            </Stepper>
            <Stack direction="row" justifyContent="space-between">
                <AnchorText onClick={() => navigate(-1)}>
                    <MdOutlineKeyboardArrowLeft/>
                    <Typography variant='subtitle1' component="span">
                        Back
                    </Typography>
                </AnchorText>
                <AnchorText>
                    <Typography variant='subtitle1' component="span">
                        Skip for now
                    </Typography>
                    <MdOutlineKeyboardArrowRight/>
                </AnchorText>
            </Stack>
            <Box>
                <Typography variant='h4'>Add a payment method</Typography>
                <Typography variant='subtitle2'>Let's get you all set up so that you can access your personal account</Typography>
            </Box>
            <Stack spacing={2} direction="column" width={{xs: 350, sm: 550}}>
                <TextField
                    fullWidth
                    size='small'
                    type="text"
                    label="Card Number"
                    required
                    helperText="Card number"
                />

                <Box sx={{
                    display: "flex",
                    flexDirection: {xs: "column", sm: "row"},
                    justifyContent: "space-between",
                    gap: "20px"
                }}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                            views={['year', 'month']}
                            label="Exp. Date"

                            // minDate={dayjs('2012-03-01')}
                            // maxDate={dayjs('2023-06-01')}
                            value={date}
                            onChange={(newValue) => {
                                setDate(newValue);
                            }}
                            renderInput={(params) => <TextField {...params} fullWidth size="small" helperText="expiry date" />}
                        />
                    </LocalizationProvider>

                    <TextField
                        fullWidth
                        required
                        size='small'
                        label="CVC"
                        type={hideCvc ? 'password' : 'text'}
                        edge="end"
                        helperText="CVC"

                        // value={values.password}
                        // onChange={handleChange('password')}
                        InputProps={{
                            endAdornment: <InputAdornment position="end">{hideCvc ? 
                                <IconButton onClick={() => setHideCvc(false)}>
                                <VscEyeClosed/>
                                </IconButton> : 
                                <IconButton onClick={() => setHideCvc(true)}>
                                <VscEye/>
                                </IconButton>
                            }
                            </InputAdornment>,
                        }}
                    />
                </Box>
                <TextField
                    fullWidth
                    size='small'
                    type="text"
                    label="Name on Card"
                    required
                    helperText="Card holder name"

                />

                <TextField
                    select
                    fullWidth
                    size='small'
                    type="text"
                    label="Country or Region"
                    required
                    helperText="Country or Region"
                    value={"India"}
                >
                    <MenuItem value="America">America</MenuItem>
                    <MenuItem value="India">India</MenuItem>
                    <MenuItem value="Canada">Canada</MenuItem>
                </TextField>
                <Box 
                    display="flex" 
                    flexDirection="row" 
                    alignItems="center"
                >
                    <Checkbox aria-label='save-my-card'/>
                    <Typography>Securely save my information for 1-click checkout</Typography>
                </Box>
                <BlueButton>Add Payment method</BlueButton>
            </Stack>
        </Stack>
    </Stack>
  )
}
export default AddPayment