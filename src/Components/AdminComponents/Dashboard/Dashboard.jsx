import { Box, Stack, Typography } from '@mui/material';
import { WhiteCard } from "../../../Lib/MuiThemes/MuiComponents";
import React, { useState } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { CalendarPicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import BookingCountChart from './BookingCountChart';

function Dashboard() {
  const [date, setDate] = useState(new Date());
  return (
    <Stack spacing={2}>
      <Box sx={{
          display: "flex",
          flexDirection: "row",
          // justifyContent: "space-between",
          // alignItems: "center",
          gap: 2,
          height: "150px",
          width: "auto",
          backgroundColor: "common.background",
          pt: 4,
      }}>
          <Stack width="100%">
            <WhiteCard>
                <Stack spacing={2} alignItems="center" justifyContent="center" height={100}>
                  <Typography variant='h6' color="text.main">View upcoming journey</Typography>
                  <Typography variant='h4' color="#4A3AFF">24</Typography>
                </Stack>
            </WhiteCard>
          </Stack>
          <Stack width="100%">
            <WhiteCard>
                <Stack spacing={2} alignItems="center" justifyContent="center" height={100}>
                  <Typography variant='h6' color="text.main">No. of Registered users</Typography>
                  <Typography variant='h4' color="#4A3AFF">327</Typography>
                </Stack>
            </WhiteCard>
          </Stack>
          <Stack width="100%">
            <WhiteCard>
                <Stack spacing={2} alignItems="center" justifyContent="center" height={100}>
                  <Typography variant='h6' color="text.main">No. of Search in month</Typography>
                  <Typography variant='h4' color="#4A3AFF">88</Typography>
                </Stack>
            </WhiteCard>
          </Stack>
          <Stack width="100%">
            <WhiteCard>
                <Stack spacing={2} alignItems="center" justifyContent="center" height={100}>
                  <Typography variant='h6' color="text.main">Top searches in month</Typography>
                  <Typography variant='h4' color="#4A3AFF">24 / 100</Typography>
                  <Typography variant='subtitle1' color="#4A3AFF">Chennai International Airport</Typography>
                </Stack>
            </WhiteCard>
          </Stack>
          <Stack width="100%">
            <WhiteCard>
                <Stack spacing={2} alignItems="center" justifyContent="center" height={100}>
                  <Typography variant='h6' color="text.main">Top destinations in month</Typography>
                  <Typography variant='h4' color="#4A3AFF">248</Typography>
                  <Typography variant='subtitle1' color="#4A3AFF">Delhi</Typography>
                </Stack>
            </WhiteCard>
          </Stack>
      </Box>
      <Stack direction="row" spacing={2}>
        <Stack flex={3}>
          <WhiteCard>
              <BookingCountChart></BookingCountChart>
          </WhiteCard>
        </Stack>
        <Stack flex={1} spacing={2}>
          <WhiteCard>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <CalendarPicker sx={{width: "100%"}} readOnly value={date} onChange={(e) => setDate(e.target.value)}/>
            </LocalizationProvider>
          </WhiteCard>
          <WhiteCard>
            <Stack height={150}>
              <Typography variant='h6' color="text.main">Upcoming journey</Typography>
            </Stack>
          </WhiteCard>
        </Stack>
      </Stack>
    </Stack>
  )
}

export default Dashboard