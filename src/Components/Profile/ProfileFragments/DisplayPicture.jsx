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
import { Axios, BASE_URL } from "../../../Lib/Axios/AxiosConfig";
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
  //     const verifyId = localStorage.getItem("verifyId");
  //     var formdata = new FormData();
  //     formdata.append("image", picUrl);
  //     formdata.append("userId", userId);

  //     const response = await axios({
  //       method: "post",
  //       url: `${BASE_URL}/updatePicture`,
  //       body: formdata,
  //       headers: {
  //         idToken: verifyId
  //       },
  //       redirect: "follow",
  //     })
  //     console.log(response);
      
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
    const verifyId = localStorage.getItem("verifyId");

    var requestOptions = {
      url: `${BASE_URL}/updatePicture`,
      method: "post",
      body: formdata,
      headers: {
        idToken: verifyId
      },
      redirect: "follow",
    };
    startLoading();
    await fetch(requestOptions)
      .then((response) => response.text())
      .then(() => {
        // window.location.reload();
        showSnackBar("success", "Profile picture uploaded succesfully")
      })
      .catch((error) => {
        console.log(error);
        showSnackBar("error", "Error uploading profile picture")
      }).finally(() => {
        restLoading();
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
