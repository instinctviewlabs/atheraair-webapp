import { createSlice } from "@reduxjs/toolkit";

export const accountSlice = createSlice({
    name: "account",
    initialState: {},
    reducers: {
        setUserDetails: (state, action) => {
            return {
                ...action.payload
            }
        },
        clearUserDetails: () => {
            return {}
        },
    }
});

export const {setUserDetails, clearUserDetails} = accountSlice.actions;
export const accountReducer = accountSlice.reducer;