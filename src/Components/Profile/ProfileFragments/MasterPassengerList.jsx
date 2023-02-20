import React, { useState } from 'react';
import { Box, List, ListItem, Stack, Typography } from '@mui/material'
import { AiFillEdit, AiOutlineDelete } from 'react-icons/ai'
import { AnchorText, BlackButtonOutlined, WhiteCard } from '../../../Lib/MuiThemes/MuiComponents'
import AddPassengerModal from '../Modals/AddPassengerModal';
import { useSelector } from 'react-redux';
import MasterPassengerCard from './MasterPassengerCard';
import { useTranslation } from 'react-i18next';

function MasterPassengerList() {

  const [addPassenderModal, setAddPassengerModal] = useState(false);
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
            <MasterPassengerCard key={index} traveller={traveller} />
          ))}
          {/* <WhiteCard>
            <Stack direction="row" justifyContent="space-between" alignItems="center">
              <Stack spacing={1}>
                <Typography variant='h5' color="text.main">Joe Schmoe</Typography>
                <Typography variant='body2'>Male, 32y. 19 Feb 1991</Typography>
              </Stack>
              <Box>
                <BlackButtonOutlined><AiOutlineDelete/> &nbsp; Delete traveller</BlackButtonOutlined>
              </Box>
            </Stack>
          </WhiteCard> */}
        </Box>
    </Stack>
    <AddPassengerModal open={addPassenderModal} setOpen={setAddPassengerModal}></AddPassengerModal>
    </>
  )
}

export default MasterPassengerList