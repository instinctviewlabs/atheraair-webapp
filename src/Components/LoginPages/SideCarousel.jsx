import React from 'react';
import { Box } from '@mui/material';
import {  flightImage } from '../../Assests/assets';

function SideCarousel() {

  return (
    <Box
        display={{
            xs: "none",
            md: "flex"
        }} 
        alignItems="center"
        justifyContent="center"
        width="auto"
    >
        <img 
            src={flightImage} 
            alt="img" 
            style={{
                height: "90%", 
                width: "95%", 
                objectFit: "cover", 
                borderRadius: 10
            }} 
        />
    </Box>
  )
}

export default SideCarousel