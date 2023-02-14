import React from "react";
import { Box, Typography } from "@mui/material";
import FlightSortingTabs from "./FlightSortingTabs";
import { BlackButtonOutlined } from "../../../Lib/MuiThemes/MuiComponents";
import FlightListCard from "./FlightListCard";

function FlightListings({cardData, showMoreFlights, showMoreValue}){

    console.log(cardData)
    return(
        <Box sx={{
            height: "auto",
            flex: 2,
            py: 1
        }}>
            <FlightSortingTabs></FlightSortingTabs>
            <Box sx={{
                display: "flex", 
                flexDirection: "column",  
                gap: "15px",
                py: 2
            }}>
                {cardData.length === 0 ?
                    <Typography variant="h5" color="text.main" textAlign="center">No results found</Typography>
                :
                cardData.map((card, index) => (
                    <FlightListCard key={index} cardData={card}></FlightListCard>
                ))
            }
            {cardData.length > 0 || showMoreValue > cardData.length  && <BlackButtonOutlined onClick={showMoreFlights}>Show more results</BlackButtonOutlined>} 
            </Box>
        </Box>
    )
}

export default FlightListings