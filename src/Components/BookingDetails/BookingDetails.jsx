import React, { useState } from 'react';
import { Box, Divider, FormControl, Link, Radio, RadioGroup, Stack, Typography } from '@mui/material';
import FlightDetailsCard from '../ReusableComponents/FlightDetailsCard';
import { AnchorText, BlueButton, StyledRadioControl, WhiteCard } from '../../Lib/MuiThemes/MuiComponents';
import { emiratesAirlineLogo, emiratesFlight } from '../../Assests/assets';
import BookingOptions from './BookingDetailsFragments/BookingOptions';
import TravellerDetailsCard from './BookingDetailsFragments/TravellerDetailsCard';
import SendBookingDetailsTo from './BookingDetailsFragments/SendBookingDetailsTo';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineOppositeContent, TimelineSeparator } from '@mui/lab';
import FareSummary from './BookingDetailsFragments/FareSummary';
// import ChoosePaymentMethod from './BookingDetailsFragments/ChoosePaymentMethod';

function BookingDetails() {
  

  return (
    <Box sx={{
        height: "auto",
        width: "auto",
        display: "flex",
        flexDirection: {xs: "column", md: "row"},
        backgroundColor: "common.background",
        gap: 3,
        px: {
            xs: 1,
            md: 10
        },
        py: 5   
    }}>
        <Box 
            display="flex"
            flexDirection="column"
            gap={2}
            flex={3} 
        >
            <WhiteCard>
                <Stack width="100%" spacing={3}>
                    <Stack direction="row" alignItems="center" spacing={{xs: 2, sm: 5}}>
                        <Box>
                            <Typography color="text.main" variant='h5'>London</Typography>
                        </Box>
                        <HiArrowNarrowRight/>
                        <Box>
                            <Typography color="text.main" variant='h5'>Chennai</Typography>
                        </Box>
                    </Stack>
                    <Stack direction="row" justifyContent="space-between" alignItems="center">
                        <Stack direction="row" spacing={2} alignItems="center">
                            <Box sx={{
                                backgroundColor: "veryLightBlue.main",
                                borderRadius: 2,
                                p: "5px"
                            }}>
                                <Typography variant='subtitle1'>Wednesday, Feb 22</Typography>
                            </Box>
                            <Box>
                                <Typography variant='subtitle2'>Non-stop</Typography>
                            </Box>
                            <Box>
                                <Typography variant='subtitle2'>3h 30m</Typography>
                            </Box>
                        </Stack>
                        <Link><Typography variant='body1'>View fare rules</Typography></Link>
                    </Stack>
                    <Stack direction="row" justifyContent="space-between" alignItems="center">
                        <Stack direction={{xs: "column", sm: "row"}} spacing={3} alignItems="center">
                            <Box sx={{height: "70px", width: "100px"}}>
                                <img src={emiratesAirlineLogo} alt="img" height="100%" width="100%" style={{objectFit: "cover"}} />
                            </Box>
                            <Typography variant='h5' color="text.main">Emirates</Typography>
                            <Typography variant='subtitle2'>A380 Airbus</Typography>
                        </Stack>
                        <Typography variant='body1'>Business</Typography>
                    </Stack>
                    <Stack direction="row" justifyContent="space-between">
                        <Timeline position="right" sx={{padding: 0, m: 0}}>
                            <TimelineItem>
                                <TimelineOppositeContent sx={{flex: 0}}>4:00 </TimelineOppositeContent>
                                <TimelineSeparator>
                                    <TimelineDot color='primary' />
                                    <TimelineConnector sx={{height: 70}} />
                                </TimelineSeparator>
                                <TimelineContent>
                                    <Typography variant='h6'>Delhi - DEL</Typography>  
                                    <Typography variant='subtitle1'>Indira Gandhi International Airport</Typography>  
                                </TimelineContent>
                            </TimelineItem>
                            <TimelineItem>
                                <TimelineOppositeContent sx={{flex: 0}}>12:00</TimelineOppositeContent>
                                <TimelineSeparator>
                                    <TimelineDot color="primary" />
                                </TimelineSeparator>
                                <TimelineContent>
                                    <Typography variant='h6'> Tiruchirapalli - TRZ</Typography>  
                                    <Typography variant='subtitle1'>Tiruchirapalli International Airport</Typography>  
                                </TimelineContent>
                            </TimelineItem>
                        </Timeline>
                        <Stack direction="row" spacing={5}>
                            <Stack alignItems="center">
                                <Typography variant='subtitle2'>Baggage</Typography>
                                <Typography variant='body1'>Adult</Typography>
                            </Stack>
                            <Stack alignItems="center">
                                <Typography variant='subtitle2'>Check-in</Typography>
                                <Typography variant='body1'>30 Kgs</Typography>
                            </Stack>
                            <Stack alignItems="center">
                                <Typography variant='subtitle2'>Cabin</Typography>
                                <Typography variant='body1'>7 Kgs</Typography>
                            </Stack>
                        </Stack>
                    </Stack>
                </Stack>
            </WhiteCard>
            <BookingOptions/>
            <Stack direction="row" spacing={2} justifyContent="space-between">
                <TravellerDetailsCard/>
                <SendBookingDetailsTo/>
            </Stack>
        </Box>
        <Box
            flex={2} 
            display="flex"
            flexDirection="column"
            gap={3}
        >
            <FareSummary></FareSummary>
        </Box>
    </Box>
  )
}

export default BookingDetails