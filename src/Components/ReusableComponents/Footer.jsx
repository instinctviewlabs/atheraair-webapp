import React from 'react';
import { Box, IconButton, ListItem, Typography, Stack } from '@mui/material';
import { FaYoutube, FaTwitter, FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { atheraTransparentLogo } from '../../Assests/assets';

function Footer() {
  return (
    <Box sx={{
        backgroundColor: "primary.main",
        height: "auto",
        width: "auto",
        display: "flex",
        flexDirection: {
            xs: "column",
            sm: "row"
        },
        justifyContent: "space-evenly",
        p: 3,
        gap: 5
    }}>
        <Stack 
            spacing={1} 
            flex={0.5} 
            // justifyContent="center" 
            alignItems="center"
        >
            <Box sx={{display: "flex", flexDirection: "row", gap: 2}}>
                <img src={atheraTransparentLogo} alt="logo" />
                <Typography variant='h4' color="common.white">ATHERA</Typography>
            </Box>
            <Stack direction="row">
                <ListItem disablePadding>
                    <IconButton size='small' sx={{color: "text.white"}}>
                        <FaFacebook />
                    </IconButton>
                </ListItem>
                <ListItem disablePadding>
                    <IconButton size='small' sx={{color: "text.white"}}>
                        <FaTwitter />
                    </IconButton>
                </ListItem>
                <ListItem disablePadding>
                    <IconButton size='small' sx={{color: "text.white"}}>
                        <FaYoutube />
                    </IconButton>
                </ListItem>
                <ListItem disablePadding>
                    <IconButton size='small' sx={{color: "text.white"}}>
                        <AiFillInstagram />
                    </IconButton>
                </ListItem>
            </Stack>
        </Stack>
        <Stack 
            spacing={2} 
            direction="row" 
            flex={2} 
            justifyContent="space-around"
        >
            <Box>
                <Typography variant='h6' color="common.white">Our Destinations</Typography>
                <Box>
                    <Typography variant='subtitle1' color="text.white">Canada</Typography>
                    <Typography variant='subtitle1' color="text.white">Alaska</Typography>
                    <Typography variant='subtitle1' color="text.white">France</Typography>
                    <Typography variant='subtitle1' color="text.white">Iceland</Typography>
                </Box>
            </Box>
            <Box>
                <Typography variant='h6' color="common.white">About us</Typography>
                <Box>
                    <Typography variant='subtitle1' color="text.white">Our story</Typography>
                    <Typography variant='subtitle1' color="text.white">Work with us</Typography>
                </Box>
            </Box>
            <Box>
                <Typography variant='h6' color="common.white">Contact us</Typography>
                <Box>
                    <Typography variant='subtitle1' color="text.white">Our story</Typography>
                    <Typography variant='subtitle1' color="text.white">Work with us</Typography>
                </Box>
            </Box>
        </Stack>
    </Box>
  )
}

export default Footer