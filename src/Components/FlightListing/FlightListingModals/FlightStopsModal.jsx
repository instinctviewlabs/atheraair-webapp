import React from 'react';
import { Box, Button, Checkbox, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Divider, Grid, IconButton, InputAdornment, List, ListItem, ListSubheader, MenuItem, Modal, Slide, Stack, Typography } from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { VscEye, VscEyeClosed } from 'react-icons/vsc';
import { usePasswordVisibility } from '../../../Lib/CustomHooks/usePasswordVisibility';
import { BlueButton, InputField } from '../../../Lib/MuiThemes/MuiComponents';
import { Circle, Close } from '@mui/icons-material';
import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineOppositeContent, TimelineSeparator } from '@mui/lab';
import moment from 'moment';


function FlightStopsModal({open, handleClose, cardData}) {
    // console.log(cardData);
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 1000,
        bgcolor: 'card.background',
        borderRadius: 3,
        border: "none",
        p: 2,
      };
  return (
          
    <Modal
        open={open}
        onClose={() => handleClose(false)}
        sx={{overflowY: "scroll"}}
    >
        <Stack sx={style} spacing={2} direction="column">
            <Stack direction="row" justifyContent="space-between" alignItems="center">
                <Typography variant='h4'>Flight details from {cardData.origin} to {cardData.destination} <Typography variant='subtitle2' component="span">({cardData.flightNumber})</Typography></Typography>
                <IconButton onClick={() => handleClose(false)}>
                    <Close />
                </IconButton>
            </Stack>
            <Divider />
            <Stack direction="row" spacing={5}>
                <Stack width={400}>
                    {cardData.seatObj[0].itineraries[0].segments.map((data, index) => (
                        <Timeline key={index} position="right" sx={{padding: 0, margin: 0}}>
                            <TimelineItem>
                                <TimelineOppositeContent sx={{maxWidth: "100px", paddingLeft: 0, paddingRight: '10px'}}>{moment(data.departure.at).format("h:mm A")}</TimelineOppositeContent>
                                <TimelineSeparator>
                                    <TimelineDot color='primary' />
                                    <TimelineConnector sx={{height: 80}} />
                                </TimelineSeparator>
                                <TimelineContent>
                                    <Typography variant='subtitle2'>Depart at</Typography>  
                                    <Typography variant='subtitle1'>(Airport fullname)</Typography>  
                                    <Typography variant='subtitle1'>(country fullname) - {data.departure.iataCode}</Typography>  
                                    {data.departure.terminal && <Typography variant='subtitle1'>Terminal: {data.departure.terminal}</Typography>}  
                                </TimelineContent>
                            </TimelineItem>
                            <TimelineItem>
                                <TimelineOppositeContent sx={{maxWidth: "100px", paddingLeft: 0, paddingRight: '10px'}}>{moment(data.arrival.at).format("h:mm A")}</TimelineOppositeContent>
                                <TimelineSeparator>
                                    <TimelineDot color="primary" />
                                </TimelineSeparator>
                                <TimelineContent>
                                    <Typography variant='subtitle2'>Arrive at</Typography>  
                                    <Typography variant='subtitle1'>(Airport fullname)</Typography>  
                                    <Typography variant='subtitle1'>(country fullname) - {data.arrival.iataCode}</Typography>  
                                    {data.arrival.terminal && <Typography variant='subtitle1'>Terminal: {data.arrival.terminal}</Typography>}  
                                </TimelineContent>
                            </TimelineItem>
                        </Timeline>
                    ))}
                </Stack>
                <Divider orientation='vertical' sx={{height: "inherit"}}/>
                {/* <Timeline position="right">
                    <TimelineItem>
                    <TimelineOppositeContent sx={{maxWidth: "1px", paddingLeft: '0px', paddingRight: '0px'}}></TimelineOppositeContent>
                    <TimelineSeparator>
                    <TimelineDot color='primary' />
                    <TimelineConnector sx={{height: 100}} />
                    </TimelineSeparator>
                    <TimelineContent>
                            <Typography variant='h6'>4:00 Delhi - DEL</Typography>  
                            <Typography variant='subtitle1'>Indira Gandhi International Airport</Typography>  
                            </TimelineContent>
                            </TimelineItem>
                            <TimelineItem>
                            <TimelineOppositeContent sx={{ maxWidth: "1px", paddingLeft: '0px', paddingRight: '0px' }} ></TimelineOppositeContent>
                            <TimelineSeparator>
                            <TimelineDot color="primary" />
                            </TimelineSeparator>
                            <TimelineContent>
                            <Typography variant='h6'>12:00 Tiruchirapalli - TRZ</Typography>  
                            <Typography variant='subtitle1'>Tiruchirapalli International Airport</Typography>  
                            </TimelineContent>
                            </TimelineItem>
                        </Timeline> */}
                <Stack width={700} direction="column" spacing={5}>
                    <Grid container>
                        <Grid item xs={4} >
                            <Stack direction="column" justifyContent="center" alignItems="center" p={2}>
                                <Typography variant='body2'>Flight Number</Typography>
                                <Typography variant='body1'>{cardData.flightNumber}</Typography>
                            </Stack>
                        </Grid>
                        <Grid item xs={4} >
                            <Stack direction="column" justifyContent="center" alignItems="center" p={2}>
                                <Typography variant='body2'>Operated by</Typography>
                                <Typography variant='body1'>{cardData.airlinesName}</Typography>
                            </Stack>
                        </Grid>
                        <Grid item xs={4} >
                            <Stack direction="column" justifyContent="center" alignItems="center" p={2}>
                                <Typography variant='body2'>Duration</Typography>
                                <Typography variant='body1'>{cardData.duration}</Typography>
                            </Stack>
                        </Grid>
                        <Grid item xs={4} >
                            <Stack direction="column" justifyContent="center" alignItems="center" p={2}>
                                <Typography variant='body2'>Stops</Typography>
                                <Typography variant='body1'>{cardData.stops}</Typography>
                            </Stack>
                        </Grid>
                        <Grid item xs={4} >
                            <Stack direction="column" justifyContent="center" alignItems="center" p={2}>
                                <Typography variant='body2'>Last day of ticketing</Typography>
                                <Typography variant='body1'>{cardData.seatObj[0].lastTicketingDate}</Typography>
                            </Stack>
                        </Grid>
                        <Grid item xs={4} >
                            <Stack direction="column" justifyContent="center" alignItems="center" p={2}>
                                <Typography variant='body2'>Seats remaining</Typography>
                                <Typography variant='body1'>{cardData.seatObj[0].numberOfBookableSeats}</Typography>
                            </Stack>
                        </Grid>
                    </Grid>
                    <Stack spacing={2}>
                        <Typography variant='subtitle1'>Hand Baggage :  <Typography variant='subtitle2' component="span">One hand bag up to 7 kgs and 115 cms (L+W+H), shall be allowed per customer.</Typography></Typography>
                        <Typography variant='subtitle1'>Check-in Baggage : <Typography variant='subtitle2' component="span">30kg per person (2 piece only).For eligible passengers with an additional 10 kg allowance will be applicable.</Typography></Typography>
                    </Stack>
                </Stack>
            </Stack>
        </Stack>
    </Modal>
  )
}

export default FlightStopsModal