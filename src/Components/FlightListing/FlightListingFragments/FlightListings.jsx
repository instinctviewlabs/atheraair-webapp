import React, { useEffect, useState } from "react";
import { Box, Skeleton, Typography } from "@mui/material";
import FlightSortingTabs from "./FlightSortingTabs";
import { AnchorText, BlackButtonOutlined } from "../../../Lib/MuiThemes/MuiComponents";
import FlightListCard from "./FlightListCard";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import FromToCard from "./FromToCard";
import { useSearchParams } from "react-router-dom";
import { LoaderConsumer } from "../../../Lib/Contexts/LoaderContext";

function FlightListings({cardData}){
    
    const [showValue, setShowValue] = useState(10);
    const [cardList, setCardList] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const [isLoading, startLoading, restLoading] = LoaderConsumer();

    function showMoreFlights(){
        setShowValue(prev => prev + 10);
    }

    function filteredList(lists){
        const filterObj = {
            stops: !!searchParams.get("stops") && searchParams.get("stops").split(","),
            price: !!searchParams.get("price") && searchParams.get("price"),
            duration: !!searchParams.get("duration") && searchParams.get("duration"),
            airlines: !!searchParams.get("airlines") && searchParams.get("airlines").split(","),
            departureTime: !!searchParams.get("departureTime") && searchParams.get("departureTime").split(",")
        }
        // console.log(filterObj);
        
        if(filterObj.stops || filterObj.price || filterObj.duration || filterObj.airlines){
            startLoading();
            return lists.filter(data => {

                const departureTimeSeconds = Number(data.originTime.slice(0, 2)) * 60 * 60;
                // console.log(departureTimeSeconds < Number(filterObj.departureTime[1]));

                if(Array.isArray(filterObj.stops) && filterObj.stops.includes(data.stops.toString())){
                    return true;
                }
                if(parseFloat(data.totalPrice) <= filterObj.price){
                    return true;
                }
                
                if(Number(data.duration.split("h")[0]) <= Number(filterObj.duration)){
                    return true;
                }

                if(Array.isArray(filterObj.airlines) && filterObj.airlines.includes(data.airlinesName)){
                    return true;
                }

                // if(Array.isArray(filterObj.departureTime) && (departureTimeSeconds > Number(filterObj.departureTime[0] && departureTimeSeconds <= Number(filterObj.departureTime[1])))){
                //     return true;
                // }
            })
        }
    
        return lists;
      }

    useEffect(() => {
        setCardList(filteredList(cardData));
        restLoading();
        // .slice(0, showValue)
        // console.log(cardList);
    }, [searchParams, cardData, showValue]) 
        
    // useEffect(() => {
    //     setCardList(cardData.slice(0, showValue));
    //     return () => {}
    // },[cardData, showValue]);
        
    return(
        <Box sx={{
            minHeight: "100vh",
            flex: 3,
        }}>
            {/* <FlightSortingTabs></FlightSortingTabs> */}
            <FromToCard></FromToCard>
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
                {isLoading && 
                    <>
                    <Skeleton variant="rounded" width="auto" height={120} />
                    <Skeleton variant="rounded" width="auto" height={120} />
                    <Skeleton variant="rounded" width="auto" height={120} />
                    <Skeleton variant="rounded" width="auto" height={120} />
                    <Skeleton variant="rounded" width="auto" height={120} />
                    </>
                }

                {!isLoading && cardData.length === 0 ?
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