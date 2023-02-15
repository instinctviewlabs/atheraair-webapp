import { Box, Grid, IconButton, Stack, Typography } from '@mui/material'
import React from 'react'
import { CgTrash } from 'react-icons/cg'
import { FaCcVisa } from 'react-icons/fa'
import { IoIosAddCircleOutline } from 'react-icons/io'
import { AddNewCard, SavedCard, WhiteCard } from '../../../Lib/MuiThemes/MuiComponents'

function ChoosePaymentMethod() {
  return (
    <Stack spacing={2}>
        <Typography color="text.main" variant='h5'>Choose Payment methods</Typography>
        <WhiteCard>
            <Stack spacing={2}>
                <SavedCard sx={{height: "inherit"}}>
                    <Stack direction="row" alignItems="center" spacing={3}>
                        <IconButton size='large' sx={{color: 'text.white'}}>
                            <FaCcVisa/>
                        </IconButton>
                        <Typography variant='h4'>**** 4321</Typography>
                        <Typography variant='subtitle1'>02/27</Typography>
                    </Stack>
                </SavedCard>

                <AddNewCard sx={{height: 130}}>
                    <IoIosAddCircleOutline fontSize={40}/>
                    <Typography variant='subtitle1'>Add a new card</Typography>
                </AddNewCard>
            </Stack>
        </WhiteCard>
    </Stack>
  )
}

export default ChoosePaymentMethod