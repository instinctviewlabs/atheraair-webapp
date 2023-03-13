import React, { useEffect, useState } from 'react';
import { Box, Fab, Tooltip, useStepContext } from '@mui/material';
import FiltersSetting from './FlightListingFragments/FiltersSetting';
import FlightListings from './FlightListingFragments/FlightListings';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { LoaderConsumer } from '../../Lib/Contexts/LoaderContext';
import { Axios } from '../../Lib/Axios/AxiosConfig';
import FromToCard from './FlightListingFragments/FromToCard';
import SearchFlightBox from '../ReusableComponents/SearchFlightBox';
import { Navigation } from '@mui/icons-material';

function FlightListingsLayout() {

  const {flightSearchKey} = useSelector(data => data.persistedReducer);
  const [flightResult, setFlightResult] = useState([]);
  const [carriers, setCarriers] = useState([]);
  const [minMaxPrice, setMinMaxPrice] = useState({});
  const [ flightCountsBasedOnStops, setFlightCountBasedOnStops ] = useState({});
  const [isLoading, startLoading, restLoading] = LoaderConsumer();
  const [showValue, setShowValue] = useState(10);
  const [scrollValue, setScrollValue] = useState(0)

  // const effectRef = useRef();
  // console.log(flightSearchKey);
  // console.log(flightResult);

  // function toggleNavigator(){
  //   const scrollValue = document.documentElement.scrollTop;
  //   console.log(scrollValue);
  // }

  function scrollToTop(){
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }


  useEffect(() => {
    const controller = axios.CancelToken.source();
    (async () => {
      try{
        startLoading();
        const response = await Axios({
          url: `${flightSearchKey.trip}?origin=${flightSearchKey.origin}&destination=${flightSearchKey.desination}&departureDate=${flightSearchKey.departureDate}${flightSearchKey.trip === "twoway" ? `&returnDate=${flightSearchKey.returnDate}` : ""}&adults=${flightSearchKey.adultCount}&children=${flightSearchKey.childrenCount}&infants=${flightSearchKey.infantCount}&travelClass=${flightSearchKey.class}`,
          method: "get",
          cancelToken: controller.token
        });
        console.log(response);

        if(response.status === 200){
          const nonstopFlightCount = response.data.data.reduce((acc, curr) => {
            if(curr.stops === 0){
              acc++
            }
            return acc;
          }, 0);
          const onestopFlightCount = response.data.data.reduce((acc, curr) => {
            if(curr.stops === 1){
              acc++
            }
            return acc;
          }, 0);
          const twostopFlightCount = response.data.data.reduce((acc, curr) => {
            if(curr.stops === 2){
              acc++
            }
            return acc;
          }, 0);
          setFlightCountBasedOnStops({nonstopFlightCount, onestopFlightCount, twostopFlightCount})
          setFlightResult(response.data.data);
          setCarriers(response.data.carriers);
          setMinMaxPrice({minPrice: response.data.minPrice, maxPrice: response.data.maxPrice});
          setShowValue(10);
          restLoading();
        }
    
      }catch(error){
        console.error(error);
        restLoading();

      }
    })()

    return () => {
      controller.cancel();
    }
  },[flightSearchKey]);

  useEffect(() => {
    const handleScroll = (event) => {
      setScrollValue(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  },[])
  
  return (
    <>
    <Box sx={{
      display: "flex",
      flexDirection: "column",
      gap: 3,
      backgroundColor: "common.background",
      px: {
        xs: 1,
        sm: 10
      },
      py: 3
    }}>
      <SearchFlightBox px={0} top={0}></SearchFlightBox>
      <Box sx={{
          height: "auto",
          width: "auto",
          display: "flex",
          flexDirection: "row",
          gap: 5,
          backgroundColor: "common.background",
      }}>
          <FiltersSetting 
            carriers={carriers} 
            minMaxPrice={minMaxPrice}
            flightCountsBasedOnStops={flightCountsBasedOnStops}
          />
          <FlightListings 
            cardData={flightResult}
            showValue={showValue}
            setShowValue={setShowValue}
          />
      </Box>
    </Box>
    {scrollValue > 400 && <Tooltip title="Go to top" placement="top">
      <Fab 
        sx={{ position: 'fixed', bottom: 16, right: 16 }} 
        color="primary" 
        size='medium'
        onClick={scrollToTop}
      >
        <Navigation />
      </Fab>
    </Tooltip>}
    </>
  )
}

export default FlightListingsLayout