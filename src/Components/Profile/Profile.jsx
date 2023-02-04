import { Box } from '@mui/material';
import React from 'react';
import Footer from '../ReusableComponents/Footer';
import Navbar from '../ReusableComponents/Navbar';
import AccountTab from './ProfileFragments/AccountTab';
import DisplayPicture from './ProfileFragments/DisplayPicture';
import ProfileLists from './ProfileFragments/ProfileLists';

function Profile() {
  return (
    <>
        <Navbar></Navbar>
        <Box sx={{
            px: {
                xs: 0,
                md: 5
            },
            py: 5,
            width: "auto",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "common.background",
            gap: 5
        }}>
            <DisplayPicture></DisplayPicture>
            <ProfileLists></ProfileLists>
            <AccountTab></AccountTab>
        </Box>
        <Footer></Footer>
    </>
  )
}

export default Profile