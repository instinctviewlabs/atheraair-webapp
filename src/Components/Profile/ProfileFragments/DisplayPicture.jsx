import React, { useState } from 'react';
import { Badge, Box, IconButton, Stack, Typography } from '@mui/material';
import { AvatarProfile, BlueButton } from '../../../Lib/MuiThemes/MuiComponents';
import { HiCheck, HiPencil } from 'react-icons/hi';
import { useSelector } from 'react-redux';
import { LoaderConsumer } from '../../../Lib/Contexts/LoaderContext';
import axios from 'axios';
import { BASE_URL } from '../../../Lib/Axios/AxiosConfig';

function DisplayPicture() {

  const {auth, account} = useSelector(data => data.persistedReducer);
  const userId = auth.userId
  const [isLoading, startLoading, restLoading] = LoaderConsumer();
  const [picUrl, setPicUrl] = useState(null);
  console.log(picUrl);

  // async function uploadProfilePic(){
  //   try{
  //     startLoading();
  //     const fd = new FormData();
  //     // fd.append("image", URL.createObjectURL(picUrl));
  //     fd.append('image', {type: "image", uri: "file:///C:/Users/ASUS/Downloads/Vector.png", name: "Vector"});
  //     fd.append("userId", userId)
  //     // console.log(JSON.stringify(fd))
  //     const response = await axios({
  //       method: "post",
  //       url: `${BASE_URL}/updatePicture`,
  //       data: fd,
  //     })
  //     console.log(response);
  //     // if(response.status === 200){
  //     //     const getuser = await axios.post(`${BASE_URL}/getUser`,{userId});
  //     //     console.log(getuser);
  //     // }
  //   }catch(error){
  //     console.log(error)
  //   }finally{
  //     restLoading()
  //   }
  // }

  async function uploadProfilePic(){
    const fd = new FormData();
    fd.append("image", URL.createObjectURL(picUrl).split("blob:")[1]);
    fd.append("userId", userId);
    for (var key of fd.entries()) {
      console.log(key[0] + ', ' + key[1]);
    }
    // await fetch(`${BASE_URL}/updatePicture`,{
    //   method:'POST',
    //   body: fd,
    // }).then(res => {
    //   console.log(res.json());// data not coming
    // });
  }
  return (
    <>
        <Box textAlign="center">
            <Badge
                overlap="circular"
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                badgeContent={
                  <Stack spacing={0.2} direction="row" ml={5}>
                  <IconButton component="label" sx={{backgroundColor: "veryLightBlue.main", "&:hover" : { backgroundColor: "veryLightBlue.main"}}}>
                    <input hidden accept="image" type="file" onChange={(e) => setPicUrl(e.target.files[0])} />
                    <HiPencil/>
                  </IconButton>
                  <IconButton onClick={uploadProfilePic} component="label" sx={{backgroundColor: "veryLightBlue.main", "&:hover" : { backgroundColor: "veryLightBlue.main"}}}>
                    <HiCheck/>
                  </IconButton>
                  </Stack>
                }
            >
                <AvatarProfile alt="Remy Sharp" src={account.profilePicture}/>
            </Badge>
            <Typography variant="h5" color="text.main">{account.name}</Typography>
            <Typography variant='body2'>{account.email}</Typography>
        </Box>
    </>

  )
}

export default DisplayPicture