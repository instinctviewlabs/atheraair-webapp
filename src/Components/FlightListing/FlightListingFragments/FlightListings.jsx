import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import FlightSortingTabs from "./FlightSortingTabs";
import { AnchorText, BlackButtonOutlined } from "../../../Lib/MuiThemes/MuiComponents";
import FlightListCard from "./FlightListCard";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

function FlightListings({cardData}){

    const [showValue, setShowValue] = useState(10);
    const [cardList, setCardList] = useState([]);

    function showMoreFlights(){
        setShowValue(prev => prev + 10);
    }
        
    useEffect(() => {
        console.log("run");
        setCardList(cardData.slice(0, showValue));

        return () => {}
    },[cardData, showValue])
        
    return(
        <Box sx={{
            height: "auto",
            flex: 2,
            py: 1
        }}>
            <FlightSortingTabs></FlightSortingTabs>
            <Box sx={{
                display: "flex",
                alignItems: "center",
                flexDirection: "row",
                justifyContent: "space-between",
                p: 1
            }}>
                <Typography variant="body1" color="text.main">Showing {cardList.length} of {cardData.length} results</Typography>
                <Typography variant="subtitle1" color="text.main">Sort by <AnchorText variant="subtitle1" component="span">Recommended <MdOutlineKeyboardArrowDown/></AnchorText></Typography>
            </Box>
            <Box sx={{
                display: "flex", 
                flexDirection: "column",  
                gap: "25px",
                py: 2
            }}>
                {cardData.length === 0 ?
                    <Typography variant="h5" color="text.main" textAlign="center">No results found</Typography>
                :
                cardList.map((card, index) => (
                    <FlightListCard key={index} cardData={card}></FlightListCard>
                ))
            }
            {(cardData.length > 0 && showValue < cardData.length) && <BlackButtonOutlined onClick={showMoreFlights}>Show more results</BlackButtonOutlined>} 
            </Box>
        </Box>
    )
}

export default FlightListings