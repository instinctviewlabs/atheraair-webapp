import { Stack, Typography } from '@mui/material'
import React from 'react'
import { AnchorText, InputField, WhiteCard } from '../../../Lib/MuiThemes/MuiComponents'

function SendBookingDetailsTo() {
  return (
    <WhiteCard>
        <Stack spacing={3} height="100%" width="100%">
            <Stack direction="row" justifyContent="space-between" alignItems="center">
                <Typography variant='h5'>Booking details will be sent to</Typography>
            </Stack>
            <Stack spacing={2} direction="column" justifyContent="space-between">
                <InputField
                    fullWidth
                    name="phoneno"
                    size='small'
                    type="text"
                    label="Phone number"
                    // required
                    value={"+91 1234567890"}
                    // onChange={handleChange}
                    // error={isDataValidated.phoneno}
                    // helperText={isDataValidated.phoneno && "Phone number must be in valid format"}
                    />
                <InputField
                    fullWidth
                    name="email"
                    size='small'
                    type="email"
                    label="Email"
                    // required
                    value={"test@mail.com"}
                    // onChange={handleChange}
                    // error={isDataValidated.email}
                    // helperText={isDataValidated.email && "Please enter a valid Email"}
                    />

            </Stack>
        </Stack>
    </WhiteCard>
  )
}

export default SendBookingDetailsTo