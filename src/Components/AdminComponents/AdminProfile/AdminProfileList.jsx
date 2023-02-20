import React, { useState } from 'react';
import { Tab, Tabs, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';


function AdminProfileLists() {
  const navigate = useNavigate();
  const [value, setValue] = useState("account");
  return (
    <Tabs 
      sx={{ 
        width: {xs: "100%", md: "80%"}, 
        backgroundColor: "card.background", 
        boxShadow: "0px 4px 16px rgba(141, 211, 187, 0.15)",
        borderRadius: "10px",
      }}
        value={value}
        onChange={(e, val) => {
          setValue(val);
          navigate(val);
        }}
        centered
      >
      <Tab sx={{width: "33%", color: "text.main"}} label={<Typography variant='body1'>Account</Typography>} value="account" />
      <Tab sx={{width: "33%", color: "text.main"}} label={<Typography variant='body1'>Payment methods</Typography>} value="payment/add" />
      <Tab sx={{width: "33%", color: "text.main"}} label={<Typography variant='body1'>Service charge</Typography>} value="service" />
    </Tabs>
  )
}

export default AdminProfileLists