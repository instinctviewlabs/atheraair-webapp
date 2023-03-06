import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineOppositeContent, TimelineSeparator } from '@mui/lab';
import { Box, Link, Stack, Typography } from '@mui/material';
import moment from 'moment';
import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { emiratesAirlineLogo } from '../../../Assests/assets';
import { WhiteCard } from '../../../Lib/MuiThemes/MuiComponents'

function BookingDetailsCard({bookingDetails}) {
  return (
    <WhiteCard>
        <Stack width="100%" spacing={3}>
            <Stack direction="row" alignItems="center" spacing={{xs: 2, sm: 5}}>
                <Box>
                    <Typography color="text.main" variant='h5'>{bookingDetails.from}</Typography>
                </Box>
                <HiArrowNarrowRight/>
                <Box>
                    <Typography color="text.main" variant='h5'>{bookingDetails.to}</Typography>
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
                        <Typography variant='subtitle2'>(need stops)</Typography>
                    </Box>
                    <Box>
                        <Typography variant='subtitle2'>(need duration)</Typography>
                    </Box>
                </Stack>
                <Link><Typography variant='body1'>View fare rules</Typography></Link>
            </Stack>
            <Stack direction="row" justifyContent="space-between" alignItems="center">
                <Stack direction={{xs: "column", sm: "row"}} spacing={3} alignItems="center">
                    <Box sx={{height: "70px", width: "100px"}}>
                        <img src={emiratesAirlineLogo} alt="img" height="100%" width="100%" style={{objectFit: "cover"}} />
                    </Box>
                    <Typography variant='h5' color="text.main">(need airlines name)</Typography>
                    <Typography variant='subtitle2'>{bookingDetails.display[0][0].flightNumber}</Typography>
                </Stack>
                <Typography variant='body1'>(need class)</Typography>
            </Stack>
            <Stack direction="row" justifyContent="space-between">
                <Stack width="50%">
                {bookingDetails.bookingObj.flightOffers[0].itineraries[0].segments.map((data, index) => (
                        <Timeline key={index} position="right" sx={{padding: 0, margin: 0}}>
                            <TimelineItem>
                                <TimelineOppositeContent sx={{maxWidth: "100px", paddingLeft: 0, paddingRight: '10px'}}>{moment(data.departure.at).format("h:mm A")}</TimelineOppositeContent>
                                <TimelineSeparator>
                                    <TimelineDot color='primary' />
                                    <TimelineConnector sx={{height: 80}} />
                                </TimelineSeparator>
                                <TimelineContent>
                                    <Typography variant='subtitle2'>Depart at</Typography>  
                                    <Typography variant='body1'>(Airport fullname) - {data.departure.iataCode}</Typography>  
                                    <Typography variant='body1'>(country fullname) - {moment(data.departure.at).format("MM-DD-YYYY")}</Typography>
                                    <Typography variant='body1'>Travel duration: {data.duration.slice(2).toLowerCase()}</Typography>  
                                    {/* {data.departure.terminal && <Typography variant='subtitle1'>Terminal: {data.departureDate}</Typography>}   */}
                                </TimelineContent>
                            </TimelineItem>
                            <TimelineItem>
                                <TimelineOppositeContent sx={{maxWidth: "100px", paddingLeft: 0, paddingRight: '10px'}}>{moment(data.arrival.at).format("h:mm A")}</TimelineOppositeContent>
                                <TimelineSeparator>
                                    <TimelineDot color="primary" />
                                </TimelineSeparator>
                                <TimelineContent>
                                    <Typography variant='subtitle2'>Arrive at</Typography>  
                                    <Typography variant='body1'>(Airport fullname) - {data.arrival.iataCode}</Typography>  
                                    <Typography variant='body1'>(country fullname) - {moment(data.arrival.at).format("MM-DD-YYYY")}</Typography>  
                                    {/* {data.arrival.terminal && <Typography variant='subtitle1'>Terminal: {data.arrival.terminal}</Typography>}   */}
                                </TimelineContent>
                            </TimelineItem>
                        </Timeline>
                    ))}
                </Stack>
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
  )
}

export default BookingDetailsCard