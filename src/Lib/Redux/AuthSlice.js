import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: "auth",
    initialState: {
        auth: false,
        role: "",
        email: "",
        name: "",
        emailVerified: false,
    },
    reducers: {
        loginUser: (state, action) => {
            return {
                auth: true,
                role: action.payload.role,
                name: action.payload.fullname,
                email: action.payload.email,
                emailVerified: action.payload.emailVerified
            }
        },
        logoutUser: () => {
            return {
                auth: false,
                role: "",
                name: "",
                email: "",
                emailVerified: false
            }
        },
    }
});

export const {loginUser, logoutUser} = authSlice.actions;
export const authReducer = authSlice.reducer;