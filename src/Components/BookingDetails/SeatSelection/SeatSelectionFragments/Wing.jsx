import React from "react";
import { Box } from "@mui/material";

function Wing(props){

    const leftVal = props.orientation === 'left' ?  "-252px" : "513px";

    const style = {
      backgroundColor: "info.main",
      width: "250px",
      height: `${props.end*2}em`,
      position:"absolute",
      top:`${props.start*2}em`,
      left: leftVal
    }

    return <Box sx={style}></Box>

}
  
export default Wing;