import React from 'react';
import { Box, Divider, Stack, Typography } from "@mui/material";
import { AnchorText, BlueBox, BlueButton, WhiteCard } from "../../../Lib/MuiThemes/MuiComponents";
import { emiratesAirlineLogo } from "../../../Assests/assets";

function FlightListCard() {
  return (
    <WhiteCard>
        <Stack direction={{xs: "column", sm: "row"}} spacing={3} justifyContent="space-between">
            <BlueBox>
                <img src={emiratesAirlineLogo} alt="img" height="110px" width="150px" style={{objectFit: "cover"}} />
            </BlueBox>
            <Stack spacing={2} direction="column" >
                <Stack direction="row" spacing={4} alignItems="center">
                    <Box>
                        <Typography variant='body2'>Emirates</Typography>
                        <Typography color="text.main" variant='h5'>12:00 pm</Typography>
                    </Box>
                    <Divider sx={{color: "text.main"}}>----</Divider>
                    <Box>
                        <Typography variant='body2'>Emirates</Typography>
                        <Typography color="text.main" variant='h5'>6:00 pm</Typography>
                    </Box>
                    <Box>
                        <Typography variant="subtitle2">non stop</Typography>
                    </Box>
                    <Box>
                        <Typography variant="h5" color="text.main">2h 28m</Typography>
                    </Box>
                </Stack>
                <Stack direction="row" spacing={4} alignItems="center">
                    <Box>
                        <Typography variant='body2'>Emirates</Typography>
                        <Typography color="text.main" variant='h5'>12:00 pm</Typography>
                    </Box>
                    <Divider sx={{color: "text.main"}}>----</Divider>
                    <Box>
                        <Typography variant='body2'>Emirates</Typography>
                        <Typography color="text.main" variant='h5'>6:00 pm</Typography>
                    </Box>
                    <Box>
                        <Typography variant="subtitle2">non stop</Typography>
                    </Box>
                    <Box>
                        <Typography variant="h5" color="text.main">2h 28m</Typography>
                    </Box>
                </Stack>
                <Divider></Divider>
                <BlueButton fullWidth>View Deals</BlueButton>
            </Stack>
            <Box>
                <Typography variant="subtitle1" color="text.main">Starting from</Typography>
                <AnchorText variant="h5">$104</AnchorText>
            </Box>
        </Stack>
    </WhiteCard>
  )
}

export default FlightListCard