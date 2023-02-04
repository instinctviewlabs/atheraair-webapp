import React, { useState } from 'react';
import { Tab, Tabs, Typography } from '@mui/material';


function ProfileLists() {
  const [value, setValue] = useState("1");
  return (
        <Tabs 
          sx={{ 
            width: {xs: "100%", md: "80%"}, 
            backgroundColor: "card.background", 
            boxShadow: "0px 4px 16px rgba(141, 211, 187, 0.15)",
            borderRadius: "10px",
          }}
            value={value}
            onChange={(e, val) => setValue(val)}
            centered
          >
          <Tab sx={{width: "25%", color: "text.main"}} label={<Typography variant='body1'>Account</Typography>} value="1" />
          <Tab sx={{width: "25%", color: "text.main"}} label={<Typography variant='body1'>Master Passenger list</Typography>} value="2" />
          <Tab sx={{width: "25%", color: "text.main"}} label={<Typography variant='body1'>Tickets / Bookings</Typography>} value="3" />
          <Tab sx={{width: "25%", color: "text.main"}} label={<Typography variant='body1'>Payment methods</Typography>} value="4" />
        </Tabs>

      // <Tabs sx={{width: "90%", backgroundColor: "card.background", borderRadius: "10px"}} value={value} onChange={(e, newVal) => setValue(newVal)}>
      //     <Tab label="Account" value="1" />
      //     <Tab label="Master Passenger list" value="2" />
      //     <Tab label="Tickets / Bookings" value="3" />
      //     <Tab label="Payment methods" value="4" />
      // </Tabs>
  )
}

export default ProfileLists