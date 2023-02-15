import React, { useState } from 'react';
import { Box, Divider, FormControl, Radio, RadioGroup, Stack, Typography } from '@mui/material';
import FlightDetailsCard from '../ReusableComponents/FlightDetailsCard';
import { AnchorText, BlueButton, StyledRadioControl, WhiteCard } from '../../Lib/MuiThemes/MuiComponents';
import { emiratesFlight } from '../../Assests/assets';
import ChoosePaymentMethod from './BookingDetailsFragments/ChoosePaymentMethod';

function BookingDetails() {
  const [paymentMethod, setPaymentMethod] = useState("Book myself");

  function handlePaymentMethod(event){
    setPaymentMethod(event.target.value);
  }

  return (
    <Box sx={{
        height: "auto",
        width: "auto",
        display: "flex",
        flexDirection: {xs: "column", md: "row"},
        gap: 2,
        backgroundColor: "common.background",
        px: {
            xs: 1,
            md: 10
        },
        py: 1
    }}>
        <Box 
            display="flex"
            flexDirection="column"
            gap={2}
            flex={2} 
            px={{
                xs: 0,
                md: 3
            }}
        >
            <FlightDetailsCard></FlightDetailsCard>
            <ChoosePaymentMethod></ChoosePaymentMethod>
        </Box>
        <Box
            flex={2} 
            display="flex"
            flexDirection="column"
            gap={3}
            px={{
                xs: 0,
                md: 3
            }}
        >
            <WhiteCard>
                <Stack spacing={3}>
                    <Box sx={{
                        display: "flex", 
                        alignItems: "center", 
                        flexDirection: "row", 
                        gap: 5
                    }}>
                        <Box sx={{
                            height: "120px", 
                            width: "150px", 
                            borderRadius: 3, 
                            overflow: "hidden"
                        }}>
                            <img src={emiratesFlight} alt="img" height="100%" width="100%" style={{objectFit: "cover"}} />
                        </Box>
                        <Box sx={{
                            display: "flex", 
                            gap: 2, 
                            flexDirection: "column"
                        }}>
                            <Typography variant='body2'>Economy</Typography>
                            <Typography variant='h5' color="text.main">Emirates A380 Airbus</Typography>
                        </Box>
                    </Box>
                    <Divider orientation='horizontal'></Divider> 
                    <Box>
                        <Typography color="text.main">Your booking is protected by <Typography color="text.main" variant='h6' component="span">Athera Air</Typography></Typography>
                    </Box>
                    <Divider orientation='horizontal'></Divider> 
                    <Stack spacing={3}>
                        <Typography variant='h6' color="text.main">Price details</Typography>
                        <Stack direction="row" justifyContent="space-between">
                            <Typography variant='body1' color="text.main">Base fair</Typography>
                            <AnchorText variant='h6'>$400</AnchorText>
                        </Stack>
                        <Stack direction="row" justifyContent="space-between">
                            <Typography variant='body1' color="text.main">Discount</Typography>
                            <AnchorText variant='h6'>-$24.68</AnchorText>
                        </Stack>
                        <Stack direction="row" justifyContent="space-between">
                            <Typography variant='body1' color="text.main">Taxes</Typography>
                            <AnchorText variant='h6'>$80</AnchorText>
                        </Stack>
                        <Stack direction="row" justifyContent="space-between">
                            <Typography variant='body1' color="text.main">Service fee</Typography>
                            <AnchorText variant='h6'>$16.25</AnchorText>
                        </Stack>
                    </Stack>
                    <Divider orientation='horizontal'></Divider> 
                    <Stack spacing={1} direction="row" justifyContent="space-between">
                        <Typography variant='body1' color="text.main">Total</Typography>
                        <AnchorText variant='h6'>$400</AnchorText>
                    </Stack>
                </Stack>
            </WhiteCard>
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
            <BlueButton sx={{my: 1}} fullWidth>Pay</BlueButton>
        </Box>
    </Box>
  )
}

export default BookingDetails