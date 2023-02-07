import React, { useState } from 'react';
import { Box, Tab, Tabs, Typography } from '@mui/material';
import { AnchorText } from '../../../Lib/MuiThemes/MuiComponents';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';


function FlightSortingTabs() {

  const [value, setValue] = useState("1");
  return (
    <>
    <Tabs 
      sx={{ 
        width: "auto", 
        backgroundColor: "card.background", 
        boxShadow: "0px 4px 16px rgba(141, 211, 187, 0.15)",
        borderRadius: "10px",
      }}
        value={value}
        onChange={(e, val) => setValue(val)}
        centered
      >
      <Tab sx={{width: "33%", color: "text.main"}} label={<Typography variant='body1'>Cheapest</Typography>} value="1" />
      <Tab sx={{width: "33%", color: "text.main"}} label={<Typography variant='body1'>Best</Typography>} value="2" />
      <Tab sx={{width: "33%", color: "text.main"}} label={<Typography variant='body1'>Quickest</Typography>} value="3" />
    </Tabs>
    <Box sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
        p: 1
    }}>
        <Typography variant="body1" color="text.main">Showing 4 of 257 results</Typography>
        <Typography variant="subtitle1" color="text.main">Sort by <AnchorText variant="subtitle1" component="span">Recommended <MdOutlineKeyboardArrowDown/></AnchorText></Typography>
    </Box>
    </>
  )
}

export default FlightSortingTabs