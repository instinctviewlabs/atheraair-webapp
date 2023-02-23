import React from 'react';
import { Divider, Stack, Typography } from '@mui/material';
import { WhiteCard } from '../../../Lib/MuiThemes/MuiComponents';
import { useSelector } from 'react-redux';


function FromToCard() {
  
  const {flightSearchKey} = useSelector(data => data.persistedReducer);
  
  return (
    <WhiteCard>
        <Stack direction="row" justifyContent="space-around">
          <Stack alignItems="center" direction="row" spacing={5}>
            <Stack alignItems="center" spacing={1}>
              <Typography color="text.main" variant='h4'>Origin name</Typography>
              <Typography variant='body2'>{flightSearchKey.origin}</Typography>
            </Stack>
            <Divider sx={{width: 100, backgroundColor: "#1DAD3C", p: "2px", borderRadius: 10}}></Divider>
            <Stack alignItems="center" spacing={1}>
              <Typography color="text.main" variant='h4'>Destination name</Typography>
              <Typography variant='body2'>{flightSearchKey.desination}</Typography>
            </Stack>
          </Stack>
          <Divider sx={{height: 80}} orientation='vertical'></Divider>
          <Stack direction="row" spacing={20} alignItems="center">
            <Stack spacing={1}>
              <Typography color="text.main" variant='h4'>Depart</Typography>
              <Typography color="text.main" variant='body1'>{flightSearchKey.departureDate}</Typography>
            </Stack>
            <Stack spacing={1}>
              <Typography color="text.main" variant='h4'>Return</Typography>
              <Typography color="text.main" variant='body1'>{flightSearchKey.returnDate}</Typography>
            </Stack>
          </Stack>
          <Divider sx={{height: 80}} orientation='vertical'></Divider>
          <Stack direction="row" spacing={20} alignItems="center">
            <Stack spacing={1} alignItems="center">
              <Typography color="text.main" variant='h4'>Passengers</Typography>
              <Typography color="text.main" variant='h4'>3</Typography>
            </Stack>
          </Stack>
        </Stack>
    </WhiteCard>
  )
}

export default FromToCard