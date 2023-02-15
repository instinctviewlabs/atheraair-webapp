import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import FiltersSetting from './FlightListingFragments/FiltersSetting';
import FlightListings from './FlightListingFragments/FlightListings';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { LoaderConsumer } from '../../Lib/Contexts/LoaderContext';
import { BASE_URL } from '../../Lib/Axios/AxiosConfig';

function FlightListingsLayout() {

  const {flightSearchKey} = useSelector(data => data.persistedReducer);
  const [flightResult, setFlightResult] = useState([]);
  const [isLoading, startLoading, restLoading] = LoaderConsumer();
  // console.log(flightSearchKey);

  async function searchFlight(){
    try{

      startLoading();
      const controller = axios.CancelToken.source();
      const response = await axios(`${BASE_URL}/oneway?origin=${flightSearchKey.origin}&destination=${flightSearchKey.desination}&departureDate=${flightSearchKey.departureDate}&returnDate=${flightSearchKey.returnDate}&adults=${flightSearchKey.adultCount}&children=${flightSearchKey.childrenCount}&infants=${flightSearchKey.infantCount}`,{cancelToken: controller.token});
      // console.log(response);
      setFlightResult(response.data.data);
      restLoading();

    }catch(error){

      console.error(error)

    }finally{
      restLoading();
    }
  }

  useEffect(() => {
    searchFlight();
  },[])
  
  return (
    <>
    <Box sx={{
        height: "auto",
        width: "auto",
        display: "flex",
        flexDirection: "row",
        backgroundColor: "common.background",
        px: {
          xs: 1,
          sm: 10
        },
        py: 3
    }}>
        <FiltersSetting></FiltersSetting>
        <FlightListings 
          cardData={flightResult} 
          // showMoreFlights={showMoreFlights} 
          // showMoreValue={showValue}
        />
    </Box>
    </>
  )
}

export default FlightListingsLayout