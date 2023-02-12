import React, { createContext, useContext } from "react";

const SearchFlightData = createContext();

function SearchFlightDataProvider(props){
    const [flightsAvailable, setFlightsAvailable] = React.useState([]);

    return(
        <SearchFlightData.Provider value={[flightsAvailable, setFlightsAvailable]}>
            {props.children}
        </SearchFlightData.Provider>
    )
}

function SearchFlightDataConsumer(){
    return useContext(SearchFlightData);
}

export {SearchFlightDataProvider, SearchFlightDataConsumer}