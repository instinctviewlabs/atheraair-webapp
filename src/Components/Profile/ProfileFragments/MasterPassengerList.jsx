import React from 'react';
import { Box, List, ListItem, Stack, Typography } from '@mui/material'
import { AiFillEdit } from 'react-icons/ai'
import { AnchorText, BlackButtonOutlined, WhiteCard } from '../../../Lib/MuiThemes/MuiComponents'

function MasterPassengerList() {
  return (
    <Stack width={{xs: "100%", md: "80%"}} spacing={2}>
        <Box 
          sx={{
              display: "flex", 
              justifyContent: "space-between"
          }}>
          <Typography color="text.main" variant='h4'>Master passenger list</Typography>
          <AnchorText variant='subtitle1'>Add traveller</AnchorText>
        </Box>
        <Box sx={{
            display: "flex", 
            flexDirection: "column",  
            gap: "15px"
        }}>
          <WhiteCard>
            <Stack direction="row" justifyContent="space-between" alignItems="center">
              <Stack spacing={1}>
                <Typography variant='h5' color="text.main">Joe Schmoe</Typography>
                <Typography variant='body2'>Male, 32y. 19 Feb 1991</Typography>
              </Stack>
              <Box>
                <BlackButtonOutlined><AiFillEdit/> Edit</BlackButtonOutlined>
              </Box>
            </Stack>
          </WhiteCard>
          <WhiteCard>
            <Stack direction="row" justifyContent="space-between" alignItems="center">
              <Stack spacing={1}>
                <Typography variant='h5' color="text.main">Jane Schmoe</Typography>
                <Typography variant='body2'>Male, 32y. 19 Feb 1991</Typography>
              </Stack>
              <Box>
                <BlackButtonOutlined><AiFillEdit/> Edit</BlackButtonOutlined>
              </Box>
            </Stack>
          </WhiteCard>
          <WhiteCard>
            <Stack direction="row" justifyContent="space-between" alignItems="center">
              <Stack spacing={1}>
                <Typography variant='h5' color="text.main">Charlie Schmoe</Typography>
                <Typography variant='body2'>Male, 32y. 19 Feb 1991</Typography>
              </Stack>
              <Box>
                <BlackButtonOutlined><AiFillEdit/> Edit</BlackButtonOutlined>
              </Box>
            </Stack>
          </WhiteCard>

        </Box>
    </Stack>
  )
}

export default MasterPassengerList