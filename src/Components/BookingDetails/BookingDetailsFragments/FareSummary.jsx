import { Box, Divider, Stack, Typography } from '@mui/material';
import React from 'react';
import { emiratesFlight } from '../../../Assests/assets';
import { AnchorText, BlueButton, WhiteCard } from '../../../Lib/MuiThemes/MuiComponents';

function FareSummary() {
  return (
    <WhiteCard>
        <Stack spacing={3}>
            <Typography variant='h4'>Fare summary</Typography>
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
        <BlueButton sx={{my: 1}} fullWidth>Continue</BlueButton>
    </WhiteCard>
  )
}

export default FareSummary