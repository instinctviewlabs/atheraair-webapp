import React from 'react';
import { Avatar, Box, Card, Divider, Grid, Stack, Typography } from '@mui/material'
import { RiPlaneFill } from 'react-icons/ri'
import { BlueBox } from '../../../Lib/MuiThemes/MuiComponents';
import { FaCalendar, FaClock, FaDoorClosed } from 'react-icons/fa';
import { MdAirlineSeatReclineNormal } from 'react-icons/md';

function TicketDetailsCard() {
  return (
    <Card>
        <Stack direction="row">
            <Stack bgcolor="#EBF6F2" direction="column" justifyContent="center" alignItems="center" spacing={3} p={4}>
                <Box>
                    <Typography variant='h5'>12:00 pm</Typography>
                    <Typography variant='body2'>Newark(EWR)</Typography>
                </Box>
                <Divider orientation='vertical' sx={{width: {xs: 50, sm: 200}, height: 150}}>
                    <RiPlaneFill style={{
                        "-webkit-transform": "scaleY(-1)",
                        transform: "scaleY(-1)"
                    }} fontSize={25}/>
                </Divider>
                <Box>
                    <Typography variant='h5'>6:00 pm</Typography>
                    <Typography variant='body2'>Newark(EWR)</Typography>
                </Box>
            </Stack>
            <Stack direction="column" width="100%" justifyContent="space-between">
                <Box bgcolor="primary.main" px={4} py={2} sx={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between"}}>
                    <Stack direction="row" spacing={2} alignItems="center">
                        <Avatar sx={{height: "50px", width: "50px", border: "3px solid rgb(184, 218, 255)", cursor: "pointer"}} alt="Remy Sharp" src=""/>
                        <Stack>
                            <Typography variant="h5" color="text.white">John Doe</Typography>
                            <Typography variant="subtitle1" color="text.white">Boarding pass N'123</Typography>
                        </Stack>
                    </Stack>
                    <Stack>
                        <Typography variant="h5" color="text.white">Business class</Typography>
                    </Stack>
                </Box>
                <Box px={10} py={4} sx={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between"}}>
                    <Stack 
                        direction="row"  
                        alignItems="center" 
                        spacing={2}
                    >
                        <BlueBox sx={{p: 1}} color="primary.main"><FaCalendar fontSize={20}/></BlueBox>
                        <Box>
                            <Typography variant='subtitle2'>Date</Typography>
                            <Typography color="text.main" variant='subtitle1'>06-02-2023</Typography>
                        </Box>
                    </Stack>
                    <Stack 
                        direction="row" 
                        alignItems="center"
                        spacing={2}
                    >
                        <BlueBox sx={{p: 1}} color="primary.main"><FaDoorClosed fontSize={20}/></BlueBox>
                        <Box>
                            <Typography variant='subtitle2'>Gate</Typography>
                            <Typography color="text.main" variant='subtitle1'>A12</Typography>
                        </Box>
                    </Stack>
                    <Stack 
                        direction="row" 
                        alignItems="center"
                        spacing={2}
                    >
                        <BlueBox sx={{p: 1}} color="primary.main"><FaClock fontSize={20}/></BlueBox>
                        <Box>
                            <Typography variant='subtitle2'>Flight time</Typography>
                            <Typography color="text.main" variant='subtitle1'>Newark(EWR)</Typography>
                        </Box>
                    </Stack>
                    <Stack 
                        direction="row" 
                        alignItems="center"
                        spacing={2}
                    >
                        <BlueBox sx={{p: 1}} color="primary.main"><MdAirlineSeatReclineNormal fontSize={20}/></BlueBox>
                        <Box>
                            <Typography variant='subtitle2'>Seat no.</Typography>
                            <Typography color="text.main" variant='subtitle1'>128</Typography>
                        </Box>
                    </Stack>
                </Box>
                <Box px={10} py={4} sx={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between"}}>
                    <Stack>
                        <Typography variant='h4'>EK</Typography>
                        <Typography variant='body1'>ABC12345</Typography>
                    </Stack>
                    <Stack>
                        Dynamic barcode comes here
                    </Stack>
                </Box>
            </Stack>
        </Stack>
    </Card>
  )
}

export default TicketDetailsCard