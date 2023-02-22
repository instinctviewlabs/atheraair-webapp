import { Box } from '@mui/system';
import React from 'react';
import { homeBanner } from '../../Assests/assets';
import SearchFlightBox from '../ReusableComponents/SearchFlightBox';

function FlightSearch() {

  return (
    <>
      <Box sx={{
        height: 550,
        width: "auto",
        overflow: "hidden"
      }}>
        <img 
          style={{
            height: "100%",
            width: "100%",
            objectFit: "cover"
          }} 
          src={homeBanner} 
          alt="banner" />
      </Box>
      <SearchFlightBox></SearchFlightBox>
    </>
  )
}

export default FlightSearch