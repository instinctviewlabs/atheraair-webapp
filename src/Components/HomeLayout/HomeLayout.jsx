import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../ReusableComponents/Footer';
import Navbar from '../Navbar/Navbar';
import { useSelector } from 'react-redux';
import { Box } from '@mui/material';

function HomeLayout() {
  const {auth, account} = useSelector(data => data.persistedReducer);
  return (
    <>
    <Navbar auth={auth} profile={account}/>
    <Box sx={{minHeight: "100vh", width: "auto", backgroundColor: "common.background"}}>
      <Outlet/>
    </Box>
    {/* <Box sx={{height: "300px", backgroundColor: "common.background"}}></Box> */}
    <Footer/>
    </>
  )
}

export default HomeLayout