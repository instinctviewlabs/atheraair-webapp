
import React, { createContext, useContext, useState } from "react";

const LoaderContext = createContext();

function LoaderContextProvider(props){

    const [isLoading, setLoading] = useState(false);

    function startLoading(){
        setLoading(true)
    }

    function restLoading(){
        setLoading(false)
    }


    return(
        <LoaderContext.Provider value={[isLoading, startLoading, restLoading]}>
            {props.children}
        </LoaderContext.Provider>
    )
}

function LoaderConsumer(){
    return useContext(LoaderContext)
}

export {LoaderContextProvider, LoaderConsumer}