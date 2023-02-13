import React from 'react';
import { Box } from '@mui/material';
import SearchFlightBox from '../ReusableComponents/SearchFlightBox';
import FiltersSetting from './FlightListingFragments/FiltersSetting';
import FlightListings from './FlightListingFragments/FlightListings';
import { useSelector } from 'react-redux';

function FlightListingsLayout() {

  const {flightSearchResultReducer} = useSelector(data => data);
  
  return (
    <>
    <SearchFlightBox></SearchFlightBox>
    <Box sx={{
        height: "auto",
        width: "auto",
        display: "flex",
        flexDirection: "row",
        backgroundColor: "common.background",
        px: {
          xs: 1,
          sm: 10
        }
    }}>
        <FiltersSetting></FiltersSetting>
        <FlightListings cardData={flightSearchResultReducer}></FlightListings>
    </Box>
    </>
  )
}

export default FlightListingsLayout