import React, { useState } from "react";
import { Badge, Box, IconButton, Stack, Typography } from "@mui/material";
import {
  AvatarProfile,
  BlueButton,
} from "../../../Lib/MuiThemes/MuiComponents";
import { HiCheck, HiPencil } from "react-icons/hi";
import { useSelector } from "react-redux";
import { LoaderConsumer } from "../../../Lib/Contexts/LoaderContext";
import axios from "axios";
import { BASE_URL } from "../../../Lib/Axios/AxiosConfig";
import useSnackBar from "../../../Lib/CustomHooks/useSnackBar";


function DisplayPicture() {
  const { auth, account } = useSelector((data) => data.persistedReducer);
  const userId = auth.userId;
  const { showSnackBar } = useSnackBar()
  const [isLoading, startLoading, restLoading] = LoaderConsumer();
  const [picUrl, setPicUrl] = useState(null);
  // console.log(picUrl);

  // async function uploadProfilePic(){
  //   try{
  //     startLoading();
  //     const data = new FormData();
  //     data.append('image', fs.createReadStream(picUrl));
  //     data.append('userId', '123xyz');
  //     // fd.append("image", picUrl);
  //     // fd.append("userId", userId)

  //     const response = await axios({
  //       method: "post",
  //       maxBodyLength: Infinity,
  //       url: `${BASE_URL}/updatePicture`,
  //       headers: {...data.getHeaders()},
  //       data: data,
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


  async function uploadProfilePic() {
    var formdata = new FormData();
    formdata.append("image", picUrl);
    formdata.append("userId", userId);

    var requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };
    startLoading();
    fetch(`${BASE_URL}/updatePicture`, requestOptions)
      .then((response) => response.text())
      .then(() => {
        restLoading();
      })
      .catch((error) => {
        console.log(error);
        showSnackBar("error", "Error uploading profile picture")
      });
  }
  return (
    <>
      <Box textAlign="center">
        <Badge
          overlap="circular"
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          badgeContent={
            <Stack spacing={0.2} direction="row" ml={picUrl ? 5 : 0}>
              <IconButton
                component="label"
                sx={{
                  backgroundColor: "veryLightBlue.main",
                  "&:hover": { backgroundColor: "veryLightBlue.main" },
                }}
              >
                <input
                  hidden
                  accept="image/*"
                  type="file"
                  onChange={(e) => setPicUrl(e.target.files[0])}
                />
                <HiPencil />
              </IconButton>
              {picUrl && 
              <IconButton
                onClick={uploadProfilePic}
                component="label"
                sx={{
                  backgroundColor: "veryLightBlue.main",
                  "&:hover": { backgroundColor: "veryLightBlue.main" },
                }}
              >
                <HiCheck />
              </IconButton>}
            </Stack>
          }
        >
          <AvatarProfile alt="Remy Sharp" src={!!picUrl ? URL.createObjectURL(picUrl) : account.profilePicture} />
        </Badge>
        <Typography variant="h5" color="text.main">
          {account.name}
        </Typography>
        <Typography variant="body2">{account.email}</Typography>
      </Box>
    </>
  );
}

export default DisplayPicture;
