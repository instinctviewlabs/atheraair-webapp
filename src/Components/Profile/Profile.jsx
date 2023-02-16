import { Box } from '@mui/material';
import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { LoaderConsumer } from '../../Lib/Contexts/LoaderContext';
import DisplayPicture from './ProfileFragments/DisplayPicture';
import ProfileLists from './ProfileFragments/ProfileLists';

function Profile() {

  // const [loading, startLoading, restLoading] = LoaderConsumer();

  // useEffect(() => {
  //   const controller = axios.CancelToken.source();
  //   // if(effectRef.current){
  //     (async () => {
  //       try{
  //         startLoading();
  //         const response = await axios(`${BASE_URL}/`,{cancelToken: controller.token});
  //         console.log(response);
    
  //         if(response.status === 200){
  //           setFlightResult(response.data.data);
  //           restLoading();
  //         }
    
  //       }catch(error){
    
  //         console.error(error)
    
  //       }finally{
  //         restLoading();
  //       }
  //     })()
  //   // }
  // },[])

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