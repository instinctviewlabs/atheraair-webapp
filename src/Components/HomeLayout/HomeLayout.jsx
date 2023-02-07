import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../ReusableComponents/Footer';
import Navbar from '../ReusableComponents/Navbar';

function HomeLayout() {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default HomeLayout