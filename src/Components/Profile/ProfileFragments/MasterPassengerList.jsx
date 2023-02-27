import React, { useState } from 'react';
import { Box, List, ListItem, Stack, Typography } from '@mui/material'
import { AiFillEdit, AiOutlineDelete } from 'react-icons/ai'
import { AnchorText, BlackButtonOutlined, WhiteCard } from '../../../Lib/MuiThemes/MuiComponents'
import AddPassengerModal from '../Modals/AddPassengerModal';
import { useSelector } from 'react-redux';
import MasterPassengerCard from './MasterPassengerCard';
import { useTranslation } from 'react-i18next';
import EditPassengerModal from '../Modals/EditPassengerModal';

function MasterPassengerList() {

  const [addPassenderModal, setAddPassengerModal] = useState(false);
  const [editPassengerModal, setEditPassengerModal] = useState(false);
  const [editPassengerDetails, setEditPassengerDetails] = useState({
    name: "",
    email: "",
    dob: "",
    gender: "",
    nationality: "",
    passportNumber: "",
    expiryDate: "",
    issuingCountry: ""
  });
  const {account} = useSelector(data => data.persistedReducer);
  const { t } = useTranslation();

  return (
    <>
    <Stack width={{xs: "100%", md: "80%"}} spacing={2}>
        <Box 
          sx={{
              display: "flex", 
              justifyContent: "space-between"
          }}>
          <Typography color="text.main" variant='h4'>{t("masterPassengerList")}</Typography>
          <AnchorText variant='subtitle1' onClick={() => setAddPassengerModal(true)}>{t("addTraveller")}</AnchorText>
        </Box>
        <Box sx={{
            display: "flex", 
            flexDirection: "column",  
            gap: "15px"
        }}>
          {account.masterList.length > 0 && account.masterList.map((traveller, index) => (
            <MasterPassengerCard 
              key={index} 
              traveller={traveller}
              triggerEditPassengerModal={setEditPassengerModal}
              setEditPassengerDetails={setEditPassengerDetails} 
            />
          ))}
        </Box>
    </Stack>
    <AddPassengerModal open={addPassenderModal} setOpen={setAddPassengerModal}></AddPassengerModal>
    <EditPassengerModal 
      open={editPassengerModal} 
      setOpen={setEditPassengerModal} 
      travellerDetails={editPassengerDetails}
    />
    </>
  )
}

export default MasterPassengerList