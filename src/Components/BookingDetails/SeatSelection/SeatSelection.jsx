import { Box, Divider, Stack, Typography } from '@mui/material';
import React from 'react';
import { emiratesFlight } from '../../../Assests/assets';
import { AnchorText, BlueButton, WhiteCard } from '../../../Lib/MuiThemes/MuiComponents';
import FareSummary from '../BookingDetailsFragments/FareSummary';
import seatMap from "../seatMap.json";
import Deck from './SeatSelectionFragments/Deck';


function SeatSelection() {
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
                    <Typography variant='h4'>Seat selection</Typography>
                    <Box sx={{display: "flex", justifyContent: "space-between", backgroundColor: "common.background", p: 3}}>
                        <Box>
                            <WhiteCard>
                                <Stack spacing={2}>
                                    <Stack direction="row" alignItems="center" spacing={2}>
                                        <Box sx={{
                                            height: "40px",
                                            width: "40px",
                                            borderRadius: 3,
                                            boxShadow: "0px 2px 10px rgba(155, 157, 172, 0.3)",
                                            border: "1px solid black",
                                            color: "black",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center"
                                        }}></Box>
                                        <Typography variant='body1'>Free</Typography>
                                    </Stack>
                                    <Stack direction="row" alignItems="center" spacing={2}>
                                        <Box sx={{
                                            height: "40px",
                                            width: "40px",
                                            borderRadius: 3,
                                            boxShadow: "0px 2px 10px rgba(155, 157, 172, 0.3)",
                                            color: "black",
                                            backgroundColor: "primary.main",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center"
                                        }}></Box>
                                        <Typography>Selected</Typography>
                                    </Stack>
                                    <Stack direction="row" alignItems="center" spacing={2}>
                                        <Box sx={{
                                            height: "40px",
                                            width: "40px",
                                            borderRadius: 3,
                                            boxShadow: "0px 2px 10px rgba(155, 157, 172, 0.3)",
                                            color: "black",
                                            backgroundColor: "veryLightBlue.main",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center"
                                        }}></Box>
                                        <Typography>Not available</Typography>
                                    </Stack>
                                    <Stack direction="row" alignItems="center" spacing={2}>
                                        <Box sx={{
                                            height: "40px",
                                            width: "40px",
                                            borderRadius: 3,
                                            boxShadow: "0px 2px 10px rgba(155, 157, 172, 0.3)",
                                            color: "black",
                                            backgroundColor: "secondary.main",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center"
                                        }}></Box>
                                        <Typography>Facilities</Typography>
                                    </Stack>
                                </Stack>
                            </WhiteCard>
                        </Box>

                        {seatMap.data[0].decks.map((deck, i) => (
                            <Deck deck={deck} key={i} />
                            ))}
                    </Box>
                </WhiteCard>
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

export default SeatSelection