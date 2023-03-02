import { Box, Tab, Tabs, Typography } from '@mui/material';
import React, { useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom';

function AdminLayout() {
    const navigate = useNavigate();
    const [value, setValue] = useState("1");
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
                }}
                value={value}
                onChange={(e, val) => setValue(val)}
                centered
                >
                <Tab sx={{width: "25%", color: "text.main"}} label={<Typography variant='body1'>Dashboard</Typography>} value="1" />
                <Tab onClick={() => navigate("/admin/requested-booking")} sx={{width: "25%", color: "text.main"}} label={<Typography variant='body1'>Requested Bookings</Typography>} value="2" />
                <Tab onClick={() => navigate("/admin/trip-details")} sx={{width: "25%", color: "text.main"}} label={<Typography variant='body1'>Trip details</Typography>} value="3" />
                <Tab onClick={() => navigate("/admin/user-details")} sx={{width: "25%", color: "text.main"}} label={<Typography variant='body1'>User details</Typography>} value="4" />
            </Tabs>
            <Outlet></Outlet>
        </Box>
      
    )
}

export default AdminLayout