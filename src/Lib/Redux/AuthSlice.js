import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: "auth",
    initialState: {
        auth: false,
        role: "",
        email: "",
        name: "",
        phoneNumber: "",
        photoUrl: "",
        emailVerified: false,
    },
    reducers: {
        loginUser: (state, action) => {
            return {
                auth: true,
                role: action.payload.role,
                name: action.payload.name,
                email: action.payload.email,
                emailVerified: action.payload.emailVerified,
                phoneNumber: action.payload.phoneNumber,
                photoUrl: action.payload.photoUrl,
            }
        },
        logoutUser: () => {
            return {
                auth: false,
                role: "",
                name: "",
                email: "",
                emailVerified: false,
                phoneNumber: "",
                photoUrl: "",
            }
        },
    }
});

export const {loginUser, logoutUser} = authSlice.actions;
export const authReducer = authSlice.reducer;