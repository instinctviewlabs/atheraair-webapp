import React from 'react';
import { List, ListItem, Stack, Typography } from '@mui/material'
import { AiFillEdit } from 'react-icons/ai'
import { BlackButtonOutlined, WhiteCard } from '../../../Lib/MuiThemes/MuiComponents'

function MasterPassengerList() {
  return (
    <Stack width={{xs: "100%", md: "80%"}} spacing={2}>
        <Typography color="text.main" variant='h4'>Master Passenger list</Typography>
        <WhiteCard>
            <List>
                <ListItem secondaryAction={<BlackButtonOutlined><AiFillEdit/> Change</BlackButtonOutlined>}>
                    <Typography color="text.main">Master passenger list comes here</Typography>
                </ListItem>
            </List>
        </WhiteCard>
    </Stack>
  )
}

export default MasterPassengerList