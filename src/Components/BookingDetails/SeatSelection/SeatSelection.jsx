import { Box, Divider, Stack, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { emiratesFlight } from '../../../Assests/assets';
import { BASE_URL } from '../../../Lib/Axios/AxiosConfig';
import { LoaderConsumer } from '../../../Lib/Contexts/LoaderContext';
import { AnchorText, BlueButton, WhiteCard } from '../../../Lib/MuiThemes/MuiComponents';
import FareSummary from '../BookingDetailsFragments/FareSummary';
// import seatMap from "../seatMap.json";
import Deck from './SeatSelectionFragments/Deck';


function SeatSelection() {

  const obj = sessionStorage.getItem("seatObj"); 
  const [seatObj, setSeatObj] = useState(obj);
  const [seatMap, setSeatMap] = useState({});
  const [isLoading, startLoading, restLoading] = LoaderConsumer();
//   console.log(seatMap);

  useEffect(() => {
    if(!!seatObj){
        const controller = axios.CancelToken.source();
        (async () => {
            try{
            startLoading();
            const response = await axios({
                method: "post",
                url: `${BASE_URL}/seatBooking`,
                data: seatObj,
                headers: {
                    "Content-Type": "text/plain"
                },
                cancelToken: controller.token
            });
            if(response.status === 200){
                setSeatMap(response.data);

            }
        
            }catch(error){
                console.error(error)
            }finally{
                restLoading();
            }
        })()

        return () => {
            controller.cancel();
        }
    }
  },[]);

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

                        {seatMap.decks && seatMap.decks.map((deck, i) => (
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