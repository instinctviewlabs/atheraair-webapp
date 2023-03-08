import React, { useState } from 'react';
import { Box, Divider, Link, Stack, Typography } from "@mui/material";
import { AnchorText, BlueBox, BlueButton, WhiteCard } from "../../../Lib/MuiThemes/MuiComponents";
import { emiratesFlight } from "../../../Assests/assets";
import { FormattedNumber } from 'react-intl';
import FlightStopsModal from '../FlightListingModals/FlightStopsModal';
import { useNavigate } from 'react-router-dom';

function FlightListCard({cardData}) {

  const [openFlightStopsModal, setOpenFlightStopsModal] = useState(false);
  const navigate = useNavigate();

  async function triggerBookingDetails(){

    sessionStorage.setItem("seatObj", JSON.stringify({data: cardData.seatObj}));
    navigate("/bookingdetails");
  }

  return (
    <>
    <WhiteCard>
        <Stack 
            direction={{xs: "column", sm: "row"}} 
            spacing={3} 
            alignItems="center"
            justifyContent="space-between"
            >
           <Stack direction="row" spacing={2} alignItems="center" width={250}>
                <BlueBox sx={{
                    height: "70px", 
                    maxWidth: "90px", 
                    borderRadius: 2, 
                    overflow: "hidden"
                }}>
                    <img src={emiratesFlight} alt="img" height="100%" width="100%" style={{objectFit: "cover", borderRadius: "5px"}} />
                </BlueBox>
                <Stack spacing={1}>
                    <Typography variant='h4' color="text.main">{cardData.airlinesName}</Typography>
                    <Typography variant='body2'>{cardData.flightNumber}</Typography>
                </Stack>
           </Stack>
           <Stack alignItems="center" spacing={1}>
                <Typography color="text.main" variant='h4'>{cardData.originTime}</Typography>
                <Typography variant='body2'>{cardData.origin}</Typography>
           </Stack>
           <Stack alignItems="center" spacing={1}>
                <Typography variant="h6" color="primary.main">{cardData.duration}</Typography>
                <Divider sx={{width: 150, backgroundColor: "#1DAD3C", p: "2px", borderRadius: 10}}></Divider>
                <Typography variant="subtitle2">{cardData.stops === 0 ? "non stop" : `${cardData.stops} stop`}</Typography>
           </Stack>
           <Stack alignItems="center" spacing={1}>
                <Typography color="text.main" variant='h4'>{cardData.destinationTime}</Typography>
                <Typography variant='body2'>{cardData.destination}</Typography>
           </Stack>
           <Stack alignItems="center" spacing={1}>
                <Typography variant="subtitle1" color="text.main">Starting from</Typography>
                <AnchorText variant="h4"><FormattedNumber value={cardData.totalPrice} style="currency" currency="EUR"/><AnchorText variant='subtitle1' component="span"></AnchorText></AnchorText>
           </Stack>
           <Stack alignItems="center" spacing={1}>
                <BlueButton fullWidth onClick={triggerBookingDetails}>Book now</BlueButton>
                <Link onClick={() => setOpenFlightStopsModal(true)} sx={{cursor: "pointer"}}><Typography variant='body1'>View flight details</Typography></Link>
           </Stack>
        </Stack>
    </WhiteCard>
    <FlightStopsModal
        open={openFlightStopsModal} 
        handleClose={setOpenFlightStopsModal}
        cardData={cardData}
    />
    </>
  )
}

export default FlightListCard


{/* <Stack spacing={3} direction="column"> */}
    {/* <Stack direction="row" spacing={4} alignItems="center">
        <Typography variant='h4' color="text.main">{cardData.airlinesName}</Typography>
    </Stack>
    <Stack direction="row" spacing={4} alignItems="center">
        <Box>
            <Typography variant='body2'>{cardData.origin}</Typography>
            <Typography color="text.main" variant='h6'>{cardData.originTime}</Typography>
        </Box>
        <Divider sx={{color: "text.main", width: 70}}></Divider>
        <Box>
            <Typography variant='body2'>{cardData.destination}</Typography>
            <Typography color="text.main" variant='h6'>{cardData.destinationTime}</Typography>
        </Box>
        <Box>
            <Typography variant="subtitle2">{cardData.stops === 0 ? "non stop" : `${cardData.stops} stop`}</Typography>
        </Box>
        <Box>
            <Typography variant="h6" color="text.main">{cardData.duration}</Typography>
        </Box>
    </Stack>
    <Divider></Divider>
    <BlueButton fullWidth>View Deals</BlueButton>
</Stack>
<Box>
    <Typography variant="subtitle1" color="text.main">Starting from</Typography>
    <AnchorText variant="h5"><FormattedNumber value={cardData.totalPrice} style="currency" currency="EUR"/><AnchorText variant='subtitle1' component="span"></AnchorText></AnchorText>
</Box> */}