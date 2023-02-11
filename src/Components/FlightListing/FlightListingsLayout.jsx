import { Box } from '@mui/material';
import React from 'react';
import SearchFlightBox from '../ReusableComponents/SearchFlightBox';
import FiltersSetting from './FlightListingFragments/FiltersSetting';
import FlightListings from './FlightListingFragments/FlightListings';
import { flightLists } from './mockdata';

function FlightListingsLayout() {
  
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
        <FlightListings cardData={flightLists}></FlightListings>
    </Box>
    </>
  )
}

export default FlightListingsLayout