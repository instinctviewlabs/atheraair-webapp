import React from "react";
import { Box, Divider, Stack, Typography } from '@mui/material';
import { AnchorText, BlueBox, WhiteCard } from '../../Lib/MuiThemes/MuiComponents';
import { emiratesAirlineLogo } from '../../Assests/assets';
import { FaPlane } from 'react-icons/fa';


function FlightDetailsCard(){
    return(
        <WhiteCard>
            <Stack width="100%" spacing={2}>
                <Box sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center"
                }}>
                    <Typography variant='h5' color="text.main">Emirates A380 Airbus</Typography>
                    <AnchorText variant="h4">$104</AnchorText>
                </Box>
                <Stack direction="row" justifyContent="space-between">
                    <Typography variant='h6' color="text.main">Return Wed, Dec 8</Typography>
                    <Typography variant='body1' color="text.main">2h 28m</Typography>
                </Stack>
                <Stack direction={{xs: "column", sm: "row"}} justifyContent="space-between" alignItems="center">
                    <BlueBox sx={{p: 2}}>
                        <Box sx={{height: "70px", width: "100px"}}>
                            <img src={emiratesAirlineLogo} alt="img" height="100%" width="100%" style={{objectFit: "cover"}} />
                        </Box>
                        <Box sx={{display: "flex", gap: 2, flexDirection: "column"}}>
                            <Typography variant='h5' color="text.main">Emirates</Typography>
                            <Typography variant='subtitle2'>A380 Airbus</Typography>
                        </Box>
                    </BlueBox>
                </Stack>
                <Stack direction="row" justifyContent="center" alignItems="center" spacing={{xs: 2, sm: 10}}>
                    <Box>
                        <Typography variant='body2'>Newark(EWR)</Typography>
                        <Typography color="text.main" variant='h5'>12:00 pm</Typography>
                    </Box>
                    <Divider orientation='horizontal' sx={{width: {xs: 50, sm: 150}, color: "text.main"}}>
                        <FaPlane fontSize={25}/>
                    </Divider>
                    <Box>
                        <Typography variant='body2'>Newark(EWR)</Typography>
                        <Typography color="text.main" variant='h5'>6:00 pm</Typography>
                    </Box>
                </Stack>
            </Stack>
        </WhiteCard>
    )
}

export default FlightDetailsCard