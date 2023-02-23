import React from 'react';
import { Box, Button, Checkbox, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Divider, IconButton, InputAdornment, List, ListItem, ListSubheader, MenuItem, Modal, Slide, Stack, Typography } from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { VscEye, VscEyeClosed } from 'react-icons/vsc';
import { usePasswordVisibility } from '../../../Lib/CustomHooks/usePasswordVisibility';
import { BlueButton, InputField } from '../../../Lib/MuiThemes/MuiComponents';
import { Circle, Close } from '@mui/icons-material';
import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineOppositeContent, TimelineSeparator } from '@mui/lab';


function FlightStopsModal({open, handleClose}) {
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 500,
        bgcolor: 'card.background',
        borderRadius: 3,
        border: "none",
        p: 4,
      };
  return (
          
    <Modal
        open={open}
        onClose={() => handleClose(false)}
    >
        <Stack sx={style} spacing={2} direction="column" width={{xs: 350, sm: 550}}>
            <Stack direction="row" justifyContent="space-between" alignItems="center">
                <Typography variant='h4'>Flight details Delhi to Trichy</Typography>
                <IconButton onClick={() => handleClose(false)}>
                    <Close />
                </IconButton>
            </Stack>
            <Divider />
            <Timeline position="right">
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
            </Timeline>
            <Stack direction="row" justifyContent="space-between" alignItems="center">
                <Typography variant='subtitle2'>Flight Number - UAE110</Typography>
                <Circle sx={{fontSize: 7, color: "primary.main"}}/>
                <Typography variant='subtitle2'>Operated by Emirates</Typography>
                <Circle sx={{fontSize: 7, color: "primary.main"}}/>
                <Typography variant='subtitle2'>BOEING 737 - Air Bus</Typography>
            </Stack>
            <Stack spacing={2}>
                <Typography variant='subtitle1'>Hand Baggage :  <Typography variant='subtitle2' component="span">One hand bag up to 7 kgs and 115 cms (L+W+H), shall be allowed per customer.</Typography></Typography>
                <Typography variant='subtitle1'>Check-in Baggage : <Typography variant='subtitle2' component="span">30kg per person (2 piece only).For eligible passengers with an additional 10 kg allowance will be applicable.</Typography></Typography>
            </Stack>
        </Stack>
    </Modal>
  )
}

export default FlightStopsModal