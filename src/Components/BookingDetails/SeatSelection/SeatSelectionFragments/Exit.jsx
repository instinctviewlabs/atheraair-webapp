import { Box, Typography } from '@mui/material';
import React from 'react';

function Exit(props) {
    const styleLeft = {
        position: "absolute",
        left: "0px",
        top: `${props.row*4}em`,
        backgroundColor: "error.main",
        color: "white",
        padding: 1,
        borderRadius: 2,
        width: "10px",
        height: "auto",
        wordWrap: "break-word",
        textAlign: "center"
    }

    const styleRight = {
        position: "absolute",
        // left: `${props.exitwidth*5 + 1.5}em`,
        right: "0px",
        top: `${props.row*4}em`,
        backgroundColor: "error.main",
        color: "white",
        padding: 1,
        borderRadius: 2,
        width: "10px",
        height: "auto",
        wordWrap: "break-word",
        textAlign: "center"

    }
    return (
    <Box>
        <Typography sx={styleLeft} variant='subtitle1'>EXIT</Typography>
        <Typography sx={styleRight} variant='subtitle1'>EXIT</Typography>
    </Box>
    )
}

export default Exit