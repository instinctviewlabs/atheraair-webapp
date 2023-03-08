import { Box } from '@mui/system';
import React from 'react';
import { homeBanner } from '../../Assests/assets';
import SearchFlightBox from '../ReusableComponents/SearchFlightBox';

function FlightSearch() {

  return (
    <>
      <Box sx={{
        height: 500,
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
          loading="lazy" 
          alt="banner" />
      </Box>
      <SearchFlightBox px={15} top={-100}></SearchFlightBox>
    </>
  )
}

export default FlightSearch