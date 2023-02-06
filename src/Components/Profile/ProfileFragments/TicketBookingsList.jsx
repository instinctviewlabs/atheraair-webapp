import React from 'react'
import { Box, Divider, Grid, Stack, Typography } from '@mui/material'
import {MdOutlineKeyboardArrowDown} from "react-icons/md"
import { AnchorText,  BlueBox, BlueButton, WhiteCard } from '../../../Lib/MuiThemes/MuiComponents'
import { TbPlaneInflight } from 'react-icons/tb'
import { emiratesAirlineLogo } from '../../../Assests/assets'
import { FaCalendar, FaClock, FaDoorClosed } from 'react-icons/fa'
import { MdAirlineSeatReclineNormal } from "react-icons/md"

function TicketBookingsList() {
  return (
    <Stack 
        width={{xs: "100%", md: "80%"}} 
        spacing={2}
    >
        <Box 
            sx={{
                display: "flex", 
                justifyContent: "space-between"
            }}>
            <Typography color="text.main" variant='h4'>Tickets / Bookings</Typography>
            <AnchorText variant='subtitle1'>Upcoming <MdOutlineKeyboardArrowDown/></AnchorText>
        </Box>
        <WhiteCard>
            <Box 
                color="text.main"
                display="flex"
                flexDirection="row" 
                alignItems="center" 
                gap="5px"
                onClick={() => console.log("Find flight")}
            >
                <TbPlaneInflight/>
                <Typography 
                    color="text.main"
                    variant='h6' 
                >
                    Flights
                </Typography>
            </Box>
        </WhiteCard>
        <Box sx={{
            display: "flex", 
            flexDirection: "column",  
            gap: "15px"
        }}>
            <WhiteCard>
                <Stack 
                    direction={{xs: "column", sm: "row"}} 
                    justifyContent="space-between" 
                    alignItems="center"
                    spacing={2}
                >
                    <Stack direction={{xs: "column", sm: "row"}} spacing={2}>
                        <BlueBox>
                            <img src={emiratesAirlineLogo} alt="img" height="70px" width="100px" style={{objectFit: "cover"}} />
                        </BlueBox>
                        <Stack spacing={2} direction={{xs: "column", md: "row"}}>
                            <Stack direction="row" spacing={1} alignItems="center">
                                <Box>
                                    <Typography variant='body2'>Newark(EWR)</Typography>
                                    <Typography color="text.main" variant='h5'>12:00 pm</Typography>
                                </Box>
                                <Divider sx={{color: "text.main"}}>----</Divider>
                                <Box>
                                    <Typography variant='body2'>Newark(EWR)</Typography>
                                    <Typography color="text.main" variant='h5'>6:00 pm</Typography>
                                </Box>
                            </Stack>
                            <Divider sx={{display: {xs: "none", md: "block"}}} orientation="vertical"></Divider>
                            <Grid container>
                                <Grid item xs={6} >
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
                                </Grid>
                                <Grid item xs={6} >
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
                                </Grid>
                                <Grid item xs={6} >
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
                                </Grid>
                                <Grid item xs={6} >
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
                                </Grid>
                            </Grid>
                        </Stack>
                    </Stack>
                    <Box>
                        <BlueButton>Download Ticket</BlueButton>
                    </Box>
                </Stack>
            </WhiteCard>
        </Box>
    </Stack>
  )
}

export default TicketBookingsList