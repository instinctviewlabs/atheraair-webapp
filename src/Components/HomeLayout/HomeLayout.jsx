import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../ReusableComponents/Footer';
import Navbar from '../Navbar/Navbar';
import { useSelector } from 'react-redux';

function HomeLayout() {
  const {auth, theme} = useSelector(data => data.persistedReducer);
  return (
    <>
    <Navbar auth={auth}/>
    <Outlet/>
    {/* <Box sx={{height: "300px", backgroundColor: "common.background"}}></Box> */}
    <Footer/>
    </>
  )
}

export default HomeLayout