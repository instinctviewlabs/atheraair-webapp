import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: "auth",
    initialState: {
        auth: false,
        role: "",
        email: "",
        emailVerified: false,
    },
    reducers: {
        setUser: (state, action) => {
            return {
                auth: true,
                role: action.payload.role,
                email: action.payload.email,
                emailVerified: action.payload.emailVerified
            }
        },
        removeUser: () => {
            return {
                auth: false,
                role: "",
                email: "",
                emailVerified: false
            }
        },
    }
});

export const {setUser, removeUser} = authSlice.actions;
export const authReducer = authSlice.reducer;