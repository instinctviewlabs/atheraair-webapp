import React, { useState, Fragment, useEffect } from 'react'
import { Add, Close, Delete } from '@mui/icons-material';
import { Avatar, Checkbox, Divider, FormControlLabel, FormGroup, IconButton, List, ListItem, ListItemAvatar, ListItemText, Stack, Tooltip, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next';
import AddPassengerModal from "../../Profile/Modals/AddPassengerModal";
import { useSelector } from 'react-redux';
import { AnchorText, WhiteCard } from '../../../Lib/MuiThemes/MuiComponents'
import AddTravellerInBookingPage from '../Modals/AddTravellerInBookingPage';

function TravellerDetailsCard() {

  const {masterList} = useSelector(data => data.persistedReducer.account);
  const [ openNewPassengerModal, setOpenNewPassengerModal ] = useState(false);
  const [travellersList, setTravellersList] = useState([]);
  const [passengers, setPassengers] = useState(new Set());
//   console.log(passengers);

  function addPassenger(obj){
    const newSet = new Set(passengers);

    if(passengers.has(obj)){
        newSet.delete(obj);
        setPassengers(newSet);
    }else{
        newSet.add(obj);
        setPassengers(newSet);
    }
  }

  useEffect(() => {
    setTravellersList(masterList);
  },[masterList])


  return (
    <>
    <Stack flex={2}>
        <WhiteCard>
            <Stack spacing={2} height="100%">
                <Stack direction="row" justifyContent="space-between" alignItems="center">
                    <Stack>
                        <Typography variant='h5'>Traveller Details</Typography>
                        <Typography variant='subtitle1'>{passengers.size > 0 && `Travellers added: ${passengers.size}`}</Typography>
                    </Stack>
                    {/* <AnchorText variant='subtitle1'></AnchorText> */}
                    <Tooltip title="Add new traveller" placement="right">
                        <IconButton onClick={() => setOpenNewPassengerModal(true)} >
                            <Add sx={{color: "text.main"}}/>
                        </IconButton>
                    </Tooltip>
                </Stack>
                {/* <Typography variant='h6'>3 Passengers</Typography> */}
                {/* <Stack direction="row" justifyContent="space-between" alignItems="center">
                    <Stack direction="row" spacing={2} alignItems="center">
                    <Avatar />
                    </Stack>
                </Stack> */}
                <Stack>
                    <List>
                        {travellersList.map((traveller, index) => (
                            <Fragment key={index}>
                                <ListItem secondaryAction={
                                    <Checkbox
                                        value={traveller}
                                        checked={passengers.has(traveller)}
                                        onChange={() => addPassenger(traveller)}
                                    />
                                }
                                >
                                <ListItemAvatar>
                                <Avatar>
                                </Avatar>
                                </ListItemAvatar>
                                <ListItemText 
                                    primary={<Typography variant='h6' color="text.main">{traveller.name} <Typography variant='subtitle2' component="span">({traveller.gender}, {traveller.dob})</Typography></Typography>} 
                                    secondary={<Typography variant='subtitle1'>Adult (12+ years)</Typography>}
                                    />
                                </ListItem>
                                <Divider variant="inset" component="li" />
                            </Fragment>
                        ))}
                    </List>
                </Stack>
                {/* <Stack>
                    <FormGroup>
                    <FormControlLabel control={<Checkbox defaultChecked />} label={<Typography variant='body1' color="text.main">Mike Wheeler</Typography>} />
                    <FormControlLabel control={<Checkbox />} label={<Typography variant='body1' color="text.main">Will Byers</Typography>}/>
                    <FormControlLabel control={<Checkbox />} label={<Typography variant='body1' color="text.main">Dustin Henderson</Typography>}/>
                    <FormControlLabel control={<Checkbox />} label={<Typography variant='body1' color="text.main">Lucas Sinclair</Typography>}/>
                    </FormGroup>
                </Stack> */}
            </Stack>
        </WhiteCard>
    </Stack>
    <AddTravellerInBookingPage setTravellersList={setTravellersList} open={openNewPassengerModal} setOpen={setOpenNewPassengerModal} ></AddTravellerInBookingPage>
    </>
  )
}

export default TravellerDetailsCard