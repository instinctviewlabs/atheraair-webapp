import { createSlice } from "@reduxjs/toolkit";

export const flightSearchResultSlice = createSlice({
    name: "flightSearchResult",
    initialState: {},
    reducers: {
        getFlightsData: (state, action) => {
            return action.payload
        }
    }
});

export const { getFlightsData } = flightSearchResultSlice.actions;
export const flightSearchResultReducer = flightSearchResultSlice.reducer;