import React, { useState } from 'react';
import { Tab, Tabs, Typography } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';


function AdminProfileLists() {
  const navigate = useNavigate();
  const location = useLocation();
  const tabPath = location.pathname.split("/profile/")[1];
  console.log(tabPath);
  // const [value, setValue] = useState("account");
  return (
    <Tabs 
      sx={{ 
        width: {xs: "100%", md: "80%"}, 
        backgroundColor: "card.background", 
        boxShadow: "0px 4px 16px rgba(141, 211, 187, 0.15)",
        borderRadius: "10px",
      }}
        value={tabPath}
        centered
      >
      <Tab onClick={() => navigate("account")} sx={{width: "33%", color: "text.main"}} label={<Typography variant='body1'>Account</Typography>} value="account" />
      <Tab onClick={() => navigate("payment/add")} sx={{width: "33%", color: "text.main"}} label={<Typography variant='body1'>Payment methods</Typography>} value="payment/add" />
      <Tab onClick={() => navigate("service")} sx={{width: "33%", color: "text.main"}} label={<Typography variant='body1'>Service charge</Typography>} value="service" />
    </Tabs>
  )
}

export default AdminProfileLists