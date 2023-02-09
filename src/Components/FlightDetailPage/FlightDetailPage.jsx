import React from 'react';
import { Box, Checkbox, Divider, FormControlLabel, FormGroup, Grid, IconButton, Stack, Typography } from '@mui/material';
import { AnchorText, BlueBox, BlueButton, WhiteCard } from '../../Lib/MuiThemes/MuiComponents';
import { emiratesAirlineLogo, emiratesFlight } from '../../Assests/assets';
import { BsArrowRightCircleFill } from "react-icons/bs";
import { MdAirlineSeatReclineNormal, MdOutlineFlight } from 'react-icons/md';
import { IoIosTime } from 'react-icons/io';
import { AiOutlineWifi } from 'react-icons/ai';
import { MdFastfood } from "react-icons/md";
import { FaPlane } from 'react-icons/fa';

function FlightDetailPage() {
  return (
    <>
    <Box sx={{
        height: "auto",
        width: "auto",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "common.background",
        px: {
            xs: 1,
            md: 10
        }
    }}>
        <Stack sx={{width: "100%"}} spacing={2} py={3}>
            <Box sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center"
            }}>
                <Typography variant='h5' color="text.main">Emirates A380 Airbus</Typography>
                <AnchorText variant="h4">$104</AnchorText>
            </Box>
            <Box sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center"
            }}>
                <Typography variant='subtitle2' color="text.main">Inonu cad. No: 8, Istanbul 34437</Typography>
                <BlueButton>Book now</BlueButton>
            </Box>
        </Stack>
        <Box sx={{width: "100%", height: "395px", borderRadius: "15px", overflow: "hidden"}}>
            <img src={emiratesFlight} height="100%" width="100%" alt="img" style={{objectFit: "cover"}} />
        </Box>
        <Stack width="100%" spacing={2} py={3}>
            <Stack flexDirection={{xs: "column", sm: "row"}} alignItems="center" justifyContent="space-between">
                <Typography variant='h5' color="text.main">Emirates A380 Airbus</Typography>
                <FormGroup sx={{flexDirection: "row"}}>
                    <FormControlLabel control={<Checkbox defaultChecked />} label={<Typography variant='body1' color="text.main">Economy</Typography>} />
                    <FormControlLabel control={<Checkbox />} label={<Typography variant='body1' color="text.main">First Class</Typography>}/>
                    <FormControlLabel control={<Checkbox />} label={<Typography variant='body1' color="text.main">Business Class</Typography>}/>
                </FormGroup>
            </Stack>
            <Box sx={{display: "flex", justifyContent: "center", gap: {xs: 1, sm: 3}, py: 2, flexWrap: "wrap"}}>
                <BlueButton sx={{height: 80, minWidth: 80, borderRadius: 5}}></BlueButton>
                <BlueButton sx={{height: 80, minWidth: 80, borderRadius: 5}}></BlueButton>
                <BlueButton sx={{height: 80, minWidth: 80, borderRadius: 5}}></BlueButton>
                <BlueButton sx={{height: 80, minWidth: 80, borderRadius: 5}}></BlueButton>
                <BlueButton sx={{height: 80, minWidth: 80, borderRadius: 5}}></BlueButton>
                <BlueButton sx={{height: 80, minWidth: 80, borderRadius: 5}}></BlueButton>
                <BlueButton sx={{height: 80, minWidth: 80, borderRadius: 5}}></BlueButton>
                <BlueButton sx={{height: 80, minWidth: 80, borderRadius: 5}}></BlueButton>
                <BlueButton sx={{height: 80, minWidth: 80, borderRadius: 5}}></BlueButton>
                <BlueButton sx={{height: 80, minWidth: 80, borderRadius: 5}}></BlueButton>
                <BlueButton sx={{height: 80, minWidth: 80, borderRadius: 5}}></BlueButton>
                <BlueButton sx={{height: 80, minWidth: 80, borderRadius: 5}}></BlueButton>
                <BlueButton sx={{height: 80, minWidth: 80, borderRadius: 5}}></BlueButton>
            </Box>
            <Stack spacing={2} sx={{borderRadius: 2, backgroundColor: "veryLightBlue.main", p: 2}}>
                <Typography variant='h5'>Emirates A380 Airbus</Typography>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <BsArrowRightCircleFill/> 
                        <Typography variant='body1' component="span"> Pre-flight cleaning, installation of cabin HEPA filters</Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <BsArrowRightCircleFill/>
                        <Typography variant='body1' component="span"> Pre-flight health screening questions</Typography>
                    </Grid>
                </Grid>
            </Stack>
        </Stack>
        <Box sx={{my: 3}}>
            <WhiteCard>
                <Stack width="100%" spacing={2}>
                    <Stack direction="row" justifyContent="space-between">
                        <Typography variant='h6' color="text.main">Return Wed, Dec 8</Typography>
                        <Typography variant='body1' color="text.main">2h 28m</Typography>
                    </Stack>
                    <Stack direction={{xs: "column", sm: "row"}} justifyContent="space-between" alignItems="center">
                        <BlueBox sx={{p: 2}}>
                            <Box sx={{height: "70px", width: "100px"}}>
                                <img src={emiratesAirlineLogo} alt="img" height="100%" width="100%" style={{objectFit: "cover"}} />
                            </Box>
                            <Box sx={{display: "flex", gap: 2, flexDirection: "column"}}>
                                <Typography variant='h5' color="text.main">Emirates</Typography>
                                <Typography variant='subtitle2'>A380 Airbus</Typography>
                            </Box>
                        </BlueBox>
                        <Box sx={{
                            display: "flex", 
                            flexDirection: "row", 
                            height: "50px", 
                            width: "auto", 
                            p: 2, 
                            gap: {xs: 1, sm: 2}
                        }}>
                            <Box>
                                <IconButton size='large' sx={{color: 'text.main'}}>
                                    <MdOutlineFlight/>
                                </IconButton>
                            </Box>
                            <Divider orientation='vertical'></Divider>
                            <Box>
                                <IconButton size='large' sx={{color: 'text.main'}}>
                                    <AiOutlineWifi/>
                                </IconButton>
                            </Box>
                            <Divider orientation='vertical'></Divider>
                            <Box>
                                <IconButton size='large' sx={{color: 'text.main'}}>
                                    <IoIosTime/>
                                </IconButton>
                            </Box>
                            <Divider orientation='vertical'></Divider>
                            <Box>
                                <IconButton size='large' sx={{color: 'text.main'}}>
                                    <MdFastfood/>
                                </IconButton>
                            </Box>
                            <Divider orientation='vertical'></Divider>
                            <Box>
                                <IconButton size='large' sx={{color: 'text.main'}}>
                                    <MdAirlineSeatReclineNormal/>
                                </IconButton>
                            </Box>
                        </Box>
                    </Stack>
                    <Stack direction="row" justifyContent="center" alignItems="center" spacing={{xs: 2, sm: 10}}>
                        <Box>
                            <Typography variant='body2'>Newark(EWR)</Typography>
                            <Typography color="text.main" variant='h5'>12:00 pm</Typography>
                        </Box>
                        <Divider orientation='horizontal' sx={{width: {xs: 50, sm: 150}, color: "text.main"}}>
                            <FaPlane fontSize={25}/>
                        </Divider>
                        <Box>
                            <Typography variant='body2'>Newark(EWR)</Typography>
                            <Typography color="text.main" variant='h5'>6:00 pm</Typography>
                        </Box>
                    </Stack>
                </Stack>
            </WhiteCard>
        </Box>
    </Box>
    </>
  )
}

export default FlightDetailPage