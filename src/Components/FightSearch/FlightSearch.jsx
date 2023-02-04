import React from 'react';
import Footer from '../ReusableComponents/Footer';
import Navbar from '../ReusableComponents/Navbar';
import SearchFlightBox from '../ReusableComponents/SearchFlightBox';

function FlightSearch() {
  return (
    <>
        <Navbar/>
        <SearchFlightBox></SearchFlightBox>
        <Footer></Footer>
    </>
  )
}

export default FlightSearch