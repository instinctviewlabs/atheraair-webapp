import { Box, Tab, Tabs, Typography } from '@mui/material';
import React, { useState } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

function AdminLayout() {
    const navigate = useNavigate();
    const location = useLocation();
    const tabPath = location.pathname.split("/")[2];
    // console.log(location);
    // const [value, setValue] = useState("/dashboard");
    return (
    
        <Box sx={{
            height: "auto",
            width: "auto",
            backgroundColor: "common.background",
            px: {
                xs: 1,
                sm: 10
            },
            py: 5
        }}>
            <Tabs 
                sx={{ 
                backgroundColor: "card.background", 
                boxShadow: "0px 4px 16px rgba(141, 211, 187, 0.15)",
                borderRadius: "10px",
                // position: "fixed",
                // zIndex: 2,
                // bottom: "81%",
                // width: "89.5%"
                }}
                value={!!tabPath ? `/${location.pathname.split("/")[2]}` : "/dashboard"}
                centered
                >
                <Tab onClick={() => navigate("dashboard")} sx={{width: "25%", color: "text.main"}} label={<Typography variant='body1'>Dashboard</Typography>} value="/dashboard" />
                <Tab onClick={() => navigate("requested-booking")} sx={{width: "25%", color: "text.main"}} label={<Typography variant='body1'>Requested Bookings</Typography>} value="/requested-booking" />
                <Tab onClick={() => navigate("trip-details")} sx={{width: "25%", color: "text.main"}} label={<Typography variant='body1'>Trip details</Typography>} value="/trip-details" />
                <Tab onClick={() => navigate("user-details")} sx={{width: "25%", color: "text.main"}} label={<Typography variant='body1'>User details</Typography>} value="/user-details" />
            </Tabs>
            <Outlet></Outlet>
        </Box>
      
    )
}

export default AdminLayout