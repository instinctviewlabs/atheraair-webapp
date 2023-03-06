import { Box, Divider, Stack, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { emiratesFlight } from '../../../Assests/assets';
import { BASE_URL } from '../../../Lib/Axios/AxiosConfig';
import { LoaderConsumer } from '../../../Lib/Contexts/LoaderContext';
import useSnackBar from '../../../Lib/CustomHooks/useSnackBar';
import { AnchorText, BlueButton, WhiteCard } from '../../../Lib/MuiThemes/MuiComponents';
import FareSummary from '../BookingDetailsFragments/FareSummary';
// import seatMap from "../seatMap.json";
import Deck from './SeatSelectionFragments/Deck';


function SeatSelection() {

  const obj = sessionStorage.getItem("seatObj"); 
  const [seatObj, setSeatObj] = useState(obj);
  const [seatMap, setSeatMap] = useState({});
  const [isLoading, startLoading, restLoading] = LoaderConsumer();
  const { showSnackBar } = useSnackBar();
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
                if(!axios.isCancel){
                    showSnackBar("warning", "Unable to get seatmap for this flight")
                }
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
                    <Box sx={{
                        display: "flex", 
                        justifyContent: "space-between",
                        alignItems: "center",    
                        flexDirection: "column",
                        gap: 5,
                        backgroundColor: "common.background", 
                        p: 3, 
                        maxHeight:"100vh",
                        overflowY: "scroll",
                        '&::-webkit-scrollbar': {
                            width: '5px',
                          },
                          '&::-webkit-scrollbar-track': {
                            boxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
                            webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
                          },
                          '&::-webkit-scrollbar-thumb': {
                            backgroundColor: 'card.background',
                            outline: '3px solid #FAFAFA'
                        }
                    }}>
                        {seatMap.decks ? 
                        <>
                        <Box>
                            <WhiteCard>
                                <Stack spacing={2} direction="row" justifyContent="space-between">
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
                                            backgroundColor: "error.light",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center"
                                        }}></Box>
                                        <Typography>Facilities</Typography>
                                    </Stack>
                                </Stack>
                            </WhiteCard>
                        </Box>

                        <Box>
                            {seatMap.decks && seatMap.decks.map((deck, i) => (
                                <Deck deck={deck} key={i} />
                            ))}
                        </Box>
                        </> : <Typography variant='h4' color="text.main">Seat selection not available for this flight</Typography>}
                    </Box>
                </WhiteCard>
            </Box>
            {/* <Box
                flex={2} 
                display="flex"
                flexDirection="column"
                gap={3}
            >
                <FareSummary></FareSummary>
            </Box> */}
        </Box>
      )
}

export default SeatSelection