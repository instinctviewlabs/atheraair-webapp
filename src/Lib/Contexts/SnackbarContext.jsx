import { Alert, Snackbar, Typography } from "@mui/material";
import React, { createContext, useState } from "react";

export const SnackbarContext = createContext();

function SnackbarContextProvider(props){

    const [snackBar, setSnackBar] = useState({open: false, severity: "success", message: "Hi"});

    function closeSnackBar(){
        setSnackBar(prev => ({...prev, open: false}))
    }

    function showSnackBar(severity, message){
        setSnackBar({open: true, severity: severity, message: message})
    }

    return(
        <SnackbarContext.Provider value={{snackBar, closeSnackBar, showSnackBar}}>
            <Snackbar anchorOrigin={{ vertical: "bottom", horizontal: "right" }} open={snackBar.open} autoHideDuration={4000} onClose={closeSnackBar}>
            <Alert elevation={6} variant="filled" onClose={closeSnackBar} severity={snackBar.severity}>
                <Typography variant="subtitle1">{snackBar.message}</Typography>
            </Alert>
            </Snackbar>
            {props.children}
        </SnackbarContext.Provider>
    )
}



export {SnackbarContextProvider}