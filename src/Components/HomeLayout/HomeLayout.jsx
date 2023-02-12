import { Box } from '@mui/material';
import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../ReusableComponents/Footer';
import Navbar from '../ReusableComponents/Navbar';

function HomeLayout() {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <Box sx={{height: "300px", backgroundColor: "common.background"}}></Box>
    <Footer/>
    </>
  )
}

export default HomeLayout