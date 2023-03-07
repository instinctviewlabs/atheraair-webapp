import React, { useState } from 'react';
import { Tab, Tabs, Typography } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';


function ProfileLists() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const {auth} = useSelector(data => data.persistedReducer);
  const [value, setValue] = useState("account");
  const location = useLocation();
  const tabPath = location.pathname.split("/profile/")[1];

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
      <Tab onClick={() => navigate("account")} sx={{width: "25%", color: "text.main"}} label={<Typography variant='body1'>{t("account")}</Typography>} value="account" />
      <Tab onClick={() => navigate("master-passenger-list")} sx={{width: "25%", color: "text.main"}} label={<Typography variant='body1'>{t("masterPassengerList")}</Typography>} value="master-passenger-list" />
      <Tab onClick={() => navigate("ticket-bookings-history")} sx={{width: "25%", color: "text.main"}} label={<Typography variant='body1'>{t("ticketsBookings")}</Typography>} value="ticket-bookings-history" />
      <Tab onClick={() => navigate("payment/add")} sx={{width: "25%", color: "text.main"}} label={<Typography variant='body1'>{t("paymentMethods")}</Typography>} value="payment/add" />
    </Tabs>
  )
}

export default ProfileLists