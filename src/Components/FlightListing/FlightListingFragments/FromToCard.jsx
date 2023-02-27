import React from 'react';
import { Divider, Stack, Typography } from '@mui/material';
import { WhiteCard } from '../../../Lib/MuiThemes/MuiComponents';
import { useSelector } from 'react-redux';


function FromToCard() {
  
  const {flightSearchKey} = useSelector(data => data.persistedReducer);

  const passengerCount = parseInt(flightSearchKey.adultCount) + parseInt(flightSearchKey.childrenCount) + parseInt(flightSearchKey.infantCount)
  // const passenger = flightSearchKey.adultCount
  return (
    <WhiteCard>
        <Stack direction="row" justifyContent="space-around">
          <Stack alignItems="center" direction="row" spacing={3}>
            <Stack alignItems="center" spacing={1}>
              <Typography color="text.main" variant='body1'>{flightSearchKey.originName}</Typography>
              <Typography variant='body2'>{flightSearchKey.origin}</Typography>
            </Stack>
            <Divider sx={{width: 70, backgroundColor: "#1DAD3C", p: "2px", borderRadius: 10}}></Divider>
            <Stack alignItems="center" spacing={1}>
              <Typography color="text.main" variant='body1'>{flightSearchKey.destinationName}</Typography>
              <Typography variant='body2'>{flightSearchKey.desination}</Typography>
            </Stack>
          </Stack>
          <Divider sx={{height: 80}} orientation='vertical'></Divider>
          <Stack direction="row" spacing={20} alignItems="center">
            <Stack spacing={1}>
              <Typography color="text.main" variant='body1'>Depart</Typography>
              <Typography color="text.main" variant='body1'>{flightSearchKey.departureDate}</Typography>
            </Stack>
            {flightSearchKey.trip === "roundtrip" && <Stack spacing={1}>
              <Typography color="text.main" variant='body1'>Return</Typography>
              <Typography color="text.main" variant='body1'>{flightSearchKey.returnDate}</Typography>
            </Stack>}
          </Stack>
          <Divider sx={{height: 80}} orientation='vertical'></Divider>
          <Stack direction="row" spacing={20} alignItems="center">
            <Stack spacing={1} alignItems="center">
              <Typography color="text.main" variant='body1'>Passengers</Typography>
              <Typography color="text.main" variant='body1'>{passengerCount}</Typography>
            </Stack>
          </Stack>
        </Stack>
    </WhiteCard>
  )
}

export default FromToCard