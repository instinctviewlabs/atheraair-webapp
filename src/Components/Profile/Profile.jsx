import { Box } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { Axios, BASE_URL } from '../../Lib/Axios/AxiosConfig';
import { LoaderConsumer } from '../../Lib/Contexts/LoaderContext';
import { setUserDetails } from '../../Lib/Redux/AccountSlice';
import AdminProfileLists from '../AdminComponents/AdminProfile/AdminProfileList';
import DisplayPicture from './ProfileFragments/DisplayPicture';
import ProfileLists from './ProfileFragments/ProfileLists';

function Profile() {

  const dispatch = useDispatch();
  const {auth, account} = useSelector(data => data.persistedReducer);
  const [isLoading, startLoading, restLoading] = LoaderConsumer();


  useEffect(() => {
    const controller = axios.CancelToken.source();
    (async () => {
      try{
        startLoading();
        const response = await Axios({
          url: `getUser`,
          method: "post",
          data: {
            userId: auth.userId
          },
          auth: true,
          cancelToken: controller.token,
        });
        if(response.status === 200){
          dispatch(setUserDetails(response.data))
        }
      }catch(error){
        console.error(error)
      }finally{
        restLoading();
      }
    })();

    return () => {
      controller.cancel();
    }
  }, []);

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
          {auth.auth && auth.role === "user" && <ProfileLists></ProfileLists>}
          {auth.auth && auth.role === "admin" && <AdminProfileLists></AdminProfileLists>}
          <Outlet></Outlet>
      </Box>
    </>
  )
}

export default Profile