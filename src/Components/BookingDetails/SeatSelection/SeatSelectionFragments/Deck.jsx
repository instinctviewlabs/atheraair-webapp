import { Box, Typography } from '@mui/material';
import React from 'react'
import Exit from './Exit';
import Facility from './Facility';
import Seat from './Seat';
import Wing from './Wing';

function Deck(props) {
  const width = props.deck.deckConfiguration.width;
  const length = props.deck.deckConfiguration.length;
  const seatList = props.deck.seats;
  const exitRows = props.deck.deckConfiguration.exitRowsX;
  const facilities = props.deck.facilities;
  const wingStart = props.deck.deckConfiguration.startWingsRow;
  const wingEnd = props.deck.deckConfiguration.endWingsRow;

  const style = {
    width:`${width*3.8}em`, 
    height:`${length*3.6}em`, 
    backgroundColor: "card.background",
    boxShadow: "0px 2px 10px rgba(155, 157, 172, 0.3)", 
    position: "relative",
    paddingLeft: "40px",
    paddingTop: "50px"
  }


  //display seat function
  const displaySeats = (seatList) => {
    return (
        <Box sx={{position: "relative"}}>
            {!!seatList && seatList.map((seat, i) =>
                <Seat key={i} number={seat.number} x={seat.coordinates.x} y={seat.coordinates.y} availability={seat.travelerPricing[0].seatAvailabilityStatus}/>
            )}
        </Box>
    )
  }

  //display exit
  const displayExits = (exitRows) => {
    return <Box>{!!exitRows && exitRows.map((row, i) => <Exit key={i} row={row} exitwidth={width}/>)}</Box>
  }

  //display facilities
  const displayFacilities = (facilityList) => {
    return( 
        <Box sx={{position: "relative"}}>{!!facilityList && facilityList.map((facility, i) =>
            <Facility key={i} code={facility.code} x={facility.coordinates.x} y={facility.coordinates.y} />)}
        </Box>
    )
  }

  //display wings
  const displayWings = (start, end) => {
    return( 
        <>
        <Wing orientation="left" start={start} end={end} />
        <Wing orientation="right" start={start} end={end} />
        </>
    )
  }

  return (
    
    <Box sx={style}>
        {/* <Typography 
          position="absolute" 
          top={1} 
          left="35%"
          backgroundColor="error.light"
          color="white"
          padding={1}
          borderRadius={2}
          width= "auto"
          height= "auto"
          textAlign= "center"
        >
          FRONT OF THE AIRCRAFT
        </Typography> */}
        {/* {displayWings(wingStart, wingEnd)} */}
        {displaySeats(seatList)}
        {displayFacilities(facilities)}
        {displayExits(exitRows)}
        {/* <Typography 
          position="absolute" 
          bottom={1} 
          left="35%"
          backgroundColor="error.light"
          color="white"
          padding={1}
          borderRadius={2}
          width= "auto"
          height= "auto"
          textAlign= "center"
        >
          BACK OF THE AIRCRAFT
        </Typography> */}
    </Box>

  )
}

export default Deck