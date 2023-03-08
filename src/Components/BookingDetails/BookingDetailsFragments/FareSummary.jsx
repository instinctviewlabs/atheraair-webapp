import { Box, Divider, Stack, Typography } from '@mui/material';
import React from 'react';
import { FormattedNumber } from 'react-intl';
import { useNavigate } from 'react-router-dom';
import { emiratesFlight } from '../../../Assests/assets';
import { AnchorText, BlueButton, WhiteCard } from '../../../Lib/MuiThemes/MuiComponents';

function FareSummary({fareSummaryDetails}) {
 
  const navigate = useNavigate();
  const {price} = fareSummaryDetails.bookingObj.flightOffers[0].travelerPricings[0];
  

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
                    <Typography variant='body2'>(need class name here)</Typography>
                    <Typography variant='h5' color="text.main">(need airlines name)</Typography>
                </Box>
            </Box>
            <Divider orientation='horizontal'></Divider> 
            <Box>
                <Typography color="text.main">Your booking is protected by <Typography color="text.main" variant='h6' component="span">Errances Voyages</Typography></Typography>
            </Box>
            <Divider orientation='horizontal'></Divider> 
            <Stack spacing={3}>
                <Typography variant='h6' color="text.main">Price details</Typography>
                <Stack direction="row" justifyContent="space-between">
                    <Typography variant='body1' color="text.main">Base fair</Typography>
                    <AnchorText variant='h6'>
                        <FormattedNumber value={price.base} currency={price.currency} style="currency"/>
                    </AnchorText>
                </Stack>
                {/* <Stack direction="row" justifyContent="space-between">
                    <Typography variant='body1' color="text.main">Discount</Typography>
                    <AnchorText variant='h6'>-$24.68</AnchorText>
                </Stack> */}
                <Stack direction="row" justifyContent="space-between">
                    <Typography variant='body1' color="text.main">Refundable taxes</Typography>
                    <AnchorText variant='h6'>
                        <FormattedNumber value={price.refundableTaxes} currency={price.currency} style="currency"/>
                    </AnchorText>
                </Stack>
                {/* <Stack direction="row" justifyContent="space-between">
                    <Typography variant='body1' color="text.main">Service fee</Typography>
                    <AnchorText variant='h6'>$16.25</AnchorText>
                </Stack> */}
            </Stack>
            <Divider orientation='horizontal'></Divider> 
            <Stack spacing={1} direction="row" justifyContent="space-between">
                <Typography variant='body1' color="text.main">Total</Typography>
                <AnchorText variant='h6'>
                    <FormattedNumber value={price.total} currency={price.currency} style="currency"/>
                </AnchorText>
            </Stack>
        </Stack>
        <BlueButton onClick={() => navigate("/bookingdetails")} sx={{my: 1}} fullWidth>Continue</BlueButton>
    </WhiteCard>
  )
}

export default FareSummary