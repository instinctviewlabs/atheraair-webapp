import React, { useState } from 'react';
import { Tab, Tabs, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';


function ProfileLists() {
  const navigate = useNavigate();
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
      <Tab onClick={() => navigate("account")} sx={{width: "25%", color: "text.main"}} label={<Typography variant='body1'>Account</Typography>} value="1" />
      <Tab onClick={() => navigate("master_passenger_list")} sx={{width: "25%", color: "text.main"}} label={<Typography variant='body1'>Master Passenger list</Typography>} value="2" />
      <Tab onClick={() => navigate("ticket_bookings_history")} sx={{width: "25%", color: "text.main"}} label={<Typography variant='body1'>Tickets / Bookings</Typography>} value="3" />
      <Tab onClick={() => navigate("payment/add")} sx={{width: "25%", color: "text.main"}} label={<Typography variant='body1'>Payment methods</Typography>} value="4" />
    </Tabs>
  )
}

export default ProfileLists