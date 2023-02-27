import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import FiltersSetting from './FlightListingFragments/FiltersSetting';
import FlightListings from './FlightListingFragments/FlightListings';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { LoaderConsumer } from '../../Lib/Contexts/LoaderContext';
import { BASE_URL } from '../../Lib/Axios/AxiosConfig';
import FromToCard from './FlightListingFragments/FromToCard';
import SearchFlightBox from '../ReusableComponents/SearchFlightBox';

function FlightListingsLayout() {

  const {flightSearchKey} = useSelector(data => data.persistedReducer);
  const [flightResult, setFlightResult] = useState([]);
  const [isLoading, startLoading, restLoading] = LoaderConsumer();
  // const effectRef = useRef();
  // console.log(flightSearchKey);
  // console.log(flightResult);
  useEffect(() => {
    const controller = axios.CancelToken.source();
      (async () => {
        try{
          startLoading();
          const response = await axios(`${BASE_URL}/oneway?origin=${flightSearchKey.origin}&destination=${flightSearchKey.desination}&departureDate=${flightSearchKey.departureDate}&returnDate=${flightSearchKey.returnDate}&adults=${flightSearchKey.adultCount}&children=${flightSearchKey.childrenCount}&infants=${flightSearchKey.infantCount}`,{cancelToken: controller.token});
          console.log(response);
    
          if(response.status === 200){
            setFlightResult(response.data.data);
            restLoading();
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
          <FiltersSetting></FiltersSetting>
          <FlightListings 
            cardData={flightResult}
            isLoading={isLoading} 
            // showMoreFlights={showMoreFlights} 
            // showMoreValue={showValue}
          />
      </Box>
    </Box>
    
    </>
  )
}

export default FlightListingsLayout