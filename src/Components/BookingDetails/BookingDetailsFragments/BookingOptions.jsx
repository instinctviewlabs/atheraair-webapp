import { Divider, FormControl, Radio, RadioGroup, Typography } from '@mui/material'
import React, { useState } from 'react'
import { StyledRadioControl, WhiteCard } from '../../../Lib/MuiThemes/MuiComponents'

function BookingOptions() {

  const [paymentMethod, setPaymentMethod] = useState("Book myself");

  function handlePaymentMethod(event){
    setPaymentMethod(event.target.value);
  }

  return (
    <WhiteCard>
        <FormControl fullWidth>
            <RadioGroup
                sx={{gap: 2}}
                value={paymentMethod}
                onChange={handlePaymentMethod}
            >
                <StyledRadioControl
                    value="Book myself" 
                    control={<Radio />} 
                    label={
                        <>
                        <Typography variant='h6' color="text.main">Book Myself</Typography>
                        <Typography variant='subtitle1' color="text.main">Pay the total fair by yourself</Typography>
                        </>
                    } 
                />
                <Divider></Divider>
                <StyledRadioControl 
                    value="Book through admin" 
                    control={<Radio />} 
                    label={
                        <>
                        <Typography variant='h6' color="text.main">Book through admin</Typography>
                        <Typography variant='subtitle1' color="text.main">Pay $207.43 now, and the rest ($207.43) will be automatically charged to the same payment method on Nov 14, 2022. No extra fees</Typography>
                        </>
                    }
                />
            </RadioGroup>
        </FormControl>
    </WhiteCard>
  )
}

export default BookingOptions