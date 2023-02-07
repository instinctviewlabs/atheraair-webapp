import React from 'react';
import { Box, MenuItem, Typography } from '@mui/material';
import { BlueButton, InputField, WhiteCard } from '../../Lib/MuiThemes/MuiComponents';
import {FiSend} from "react-icons/fi";
import { DesktopDatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';


function SearchFlightBox() {
  const [date, setDate] = React.useState(new Date());
  console.log(date);
  return (
    <Box sx={{
        height: "auto",
        width: "auto",
        backgroundColor: "common.background",
        px: {
            xs: 1,
            sm: 10
        },
        py: 5
    }}>
        <WhiteCard>
            <Typography variant='h5' color="text.main">
                Where are you flying?
            </Typography>
            <Box sx={{
                display: "flex",
                justifyContent: "space-evenly",
                mt: 4,
                flexDirection: {
                    xs: "column",
                    md: "row"
                },
                gap: 3,
            }}>

                <InputField
                    label="From"
                    size="small"
                    // value="Lahore"
                />
                
                <InputField 
                    label="To"
                    size="small"
                    // value="Karachi"

                />
                <InputField
                    size='small'
                    select
                    label="Trip"
                    value="return"
                    InputProps={{ inputProps: { sx: { color: 'text.main' }}}}
                    sx={{
                        minWidth: 150,
                        maxWidth: "auto"
                    }}

                >
                    <MenuItem value="return">Return</MenuItem>
                    <MenuItem value="return">Return</MenuItem>
                    <MenuItem value="return">Return</MenuItem>
                </InputField>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DesktopDatePicker
                        // label="Depart - Return"
                        renderInput={(params) => <InputField size="small" {...params} />}
                        value={date}
                        onChange={(newValue) => {
                            setDate(newValue);
                        }}
                    />
                </LocalizationProvider>
                <InputField 
                    label="Passenger - Class"
                    size="small"
                />
                <BlueButton>
                    <FiSend/>
                    Show flights
                </BlueButton>
            </Box>
        </WhiteCard>
    </Box>
  )
}

export default SearchFlightBox