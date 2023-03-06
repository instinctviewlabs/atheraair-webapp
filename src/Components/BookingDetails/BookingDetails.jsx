import React, { useEffect, useState } from 'react';
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
import axios from 'axios';
import { BASE_URL } from '../../Lib/Axios/AxiosConfig';
import { LoaderConsumer } from '../../Lib/Contexts/LoaderContext';
import BookingDetailsCard from './BookingDetailsFragments/BookingDetailsCard';
// import ChoosePaymentMethod from './BookingDetailsFragments/ChoosePaymentMethod';

function BookingDetails() {

    const obj = sessionStorage.getItem("seatObj"); 
    const [isLoading, startLoading, restLoading] = LoaderConsumer();
    const [bookingDetails, setBookingDetails] = useState(null);
    // const { showSnackBar } = useSnackBar();
    

    useEffect(() => {
        if(!!obj){
            const seatObj = JSON.parse(obj).data[0];
            const controller = axios.CancelToken.source();
            (async () => {
                try{
                startLoading();
                const response = await axios({
                    method: "post",
                    url: `${BASE_URL}/flightPrice`,
                    data: seatObj,
                    cancelToken: controller.token
                });
                if(response.status === 200){
                    setBookingDetails(response.data);
                }
            
                }catch(error){
                    // if(!axios.isCancel){
                    //     showSnackBar("warning", "Unable to get seatmap for this flight")
                    // }
                    console.log(error)
                }finally{
                    restLoading();
                }
            })()

            return () => {
                controller.cancel();
            }
        }
        },[obj]);

  

  return (
    bookingDetails && (
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
                <BookingDetailsCard bookingDetails={bookingDetails}/>
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
                <FareSummary fareSummaryDetails={bookingDetails}/>
            </Box>
        </Box>
    )
  )
}

export default BookingDetails