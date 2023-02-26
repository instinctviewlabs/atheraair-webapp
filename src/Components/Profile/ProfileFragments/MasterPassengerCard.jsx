import { Typography } from '@mui/material'
import { Box, Stack } from '@mui/system'
import axios from 'axios'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { AiFillEdit, AiOutlineDelete } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { BASE_URL } from '../../../Lib/Axios/AxiosConfig'
import { LoaderConsumer } from '../../../Lib/Contexts/LoaderContext'
import { BlackButtonOutlined, WhiteCard } from '../../../Lib/MuiThemes/MuiComponents'
import { setUserDetails } from '../../../Lib/Redux/AccountSlice'
import AddPassengerModal from '../Modals/AddPassengerModal'

function MasterPassengerCard({traveller}) {
  
  const [isLoading, startLoading, restLoading] = LoaderConsumer();
  const [openEditPassengerModal, setOpenEditPassengerModal] = useState(false);
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const {auth} = useSelector(data => data.persistedReducer);
  const userId = auth.userId;

  async function deleteTraveller(){
    try{
        startLoading();
        const response = await axios({
            method: "post",
            url: `${BASE_URL}/removeTraveller`,
            data : {
                userId: auth.userId,
                ...traveller
            },
        })
        // console.log(response);
        if(response.status === 200){
            const getuser = await axios.post(`${BASE_URL}/getUser`,{userId});
            dispatch(setUserDetails(getuser.data))
        }
    }catch(error){
        console.log(error)
    }finally{
        restLoading()
    }
  }

  return (
    <>
    <WhiteCard>
        <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Stack spacing={1}>
            <Typography variant='h5' color="text.main">{traveller.name}</Typography>
            <Typography variant='body2'>{traveller.gender}, {traveller.dob}</Typography>
        </Stack>
        <Stack direction="row" spacing={2}>
            <BlackButtonOutlined size="large" onClick={deleteTraveller}><AiOutlineDelete/></BlackButtonOutlined>
            <BlackButtonOutlined size="large" onClick={() => setOpenEditPassengerModal(true)}><AiFillEdit/></BlackButtonOutlined>
        </Stack>
        </Stack>
    </WhiteCard>
    <AddPassengerModal 
        open={openEditPassengerModal} 
        setOpen={setOpenEditPassengerModal}
        {...traveller}
    ></AddPassengerModal>
    </>
  )
}

export default MasterPassengerCard