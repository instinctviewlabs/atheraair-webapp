import React from 'react';
import { Box, Divider, Stack, Typography } from "@mui/material";
import { AnchorText, BlueBox, BlueButton, WhiteCard } from "../../../Lib/MuiThemes/MuiComponents";
import { emiratesFlight } from "../../../Assests/assets";

function FlightListCard({cardData}) {
  return (
    <WhiteCard>
        <Stack 
            direction={{xs: "column", sm: "row"}} 
            spacing={3} 
            justifyContent="space-between"
        >
            <BlueBox sx={{
                height: "auto", 
                width: "190px", 
                borderRadius: 2, 
                overflow: "hidden"
            }}>
                <img src={emiratesFlight} alt="img" height="100%" width="100%" style={{objectFit: "cover", borderRadius: "5px"}} />
            </BlueBox>
            <Stack spacing={2} direction="column">
                <Stack direction="row" spacing={4} alignItems="center">
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
                <AnchorText variant="h5">{cardData.totalPrice}<AnchorText variant='subtitle1' component="span">&nbsp;{cardData.currency}</AnchorText></AnchorText>
            </Box>
        </Stack>
    </WhiteCard>
  )
}

export default FlightListCard