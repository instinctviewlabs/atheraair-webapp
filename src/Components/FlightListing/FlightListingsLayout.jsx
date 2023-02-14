import React, { useState } from 'react';
import { Box } from '@mui/material';
import SearchFlightBox from '../ReusableComponents/SearchFlightBox';
import FiltersSetting from './FlightListingFragments/FiltersSetting';
import FlightListings from './FlightListingFragments/FlightListings';
import { useSelector } from 'react-redux';

function FlightListingsLayout() {

  const {flightSearchResultReducer} = useSelector(data => data);

  const [showValue, setShowValue] = useState(10);
  const [result, setResult] = useState(flightSearchResultReducer.slice(0, showValue));


  function showMoreFlights(){
    setShowValue(showValue + 10);
    setResult(flightSearchResultReducer.slice(0, showValue));
  }

  console.log(showValue);
  console.log(result);
  
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
          cardData={result} 
          showMoreFlights={showMoreFlights} 
          showMoreValue={showValue}
        />
    </Box>
    </>
  )
}

export default FlightListingsLayout