
import { Checkbox, Typography } from '@mui/material';
import React from 'react';

function Seat(props){

    const style = {
        position: "absolute",
        left: `${props.y*3.5}em`,
        top: `${props.x*3.5}em`,
        height: "40px",
        width: "40px",
        padding: 3,
        borderRadius: 2,
        boxShadow: "0px 2px 10px rgba(155, 157, 172, 0.3)",
        color: "black",
        backgroundColor: "white",
        "&:hover": {
            backgroundColor: "transparent",
        },
        "&.Mui-checked": {
            backgroundColor: "primary.main",
            color: "white"
        },
        "&.Mui-disabled": {
            backgroundColor: "veryLightBlue.main"
        }
    }

    // const color = props.availability === 'AVAILABLE' ? "#FFFFFF" : "#E3F0FF";
    // const style = {
        // position: "absolute",
        // left: `${props.y*5}em`,
        // top: `${props.x*5}em`,
        // backgroundColor: color,
        // color: "black",

        // display: "flex",
        // alignItems: "center",
        // justifyContent: "center",
        // boxSizing: "border-box",
        // width: "40px",
        // height: "40px",
        // padding: "25px",
        // borderRadius: 2,
        // boxShadow: "0px 2px 10px rgba(155, 157, 172, 0.3)"

    // }

    // const seat = <Box 
    //                 sx={style}
    //             >
    //                 {props.number}
    //             </Box>
    // const checkedSeat = <Box sx={{
    //     ...style,
    //     color: "black",
    //     backgroundColor: "primary.main"
        
    // }}>{props.number}</Box>

    return (
        // <div className = 'seat' style={style}>
        //     <input type="checkbox" disabled={props.availability === "BLOCKED"} />
        //     <p>{props.number}</p>
        // </div>
        <Checkbox
            sx={style}
            value={"hello"}
            onChange={(e) => console.log(e.target.value)}
            disabled={props.availability === "BLOCKED"} 
            icon={<Typography>{props.number}</Typography>} 
            checkedIcon={<Typography>{props.number}</Typography>}
        />

    )
}

export default Seat