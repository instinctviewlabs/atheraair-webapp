import React from "react";
import { Box } from "@mui/material";
import FlightSortingTabs from "./FlightSortingTabs";
import { BlackButtonOutlined } from "../../../Lib/MuiThemes/MuiComponents";
import FlightListCard from "./FlightListCard";

function FlightListings({cardData}){

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
                {cardData.data.map((card, index) => (
                    <FlightListCard key={index} cardData={card}></FlightListCard>
                ))}
                <BlackButtonOutlined>Show more results</BlackButtonOutlined>
            </Box>
        </Box>
    )
}

export default FlightListings