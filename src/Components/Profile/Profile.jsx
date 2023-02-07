import { Box } from '@mui/material';
import React from 'react';
import { Outlet } from 'react-router-dom';
import DisplayPicture from './ProfileFragments/DisplayPicture';
import ProfileLists from './ProfileFragments/ProfileLists';

function Profile() {
  return (
    <>
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
          <Outlet></Outlet>
      </Box>
    </>
  )
}

export default Profile