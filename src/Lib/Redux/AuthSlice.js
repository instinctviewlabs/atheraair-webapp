import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: "auth",
    initialState: {
        auth: false,
        role: "",
        userId: ""
    },
    reducers: {
        loginUser: (state, action) => {
            return {
                auth: true, 
                role: action.payload.role, 
                userId: action.payload.userId
            }
        },
        logoutUser: () => {
            return {
                auth: false,
                role: "",
                userId: ""
            }
        },
    }
});

export const {loginUser, logoutUser} = authSlice.actions;
export const authReducer = authSlice.reducer;