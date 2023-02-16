import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: "auth",
    initialState: {
        auth: false,
        role: "",
        userId: "",
        email: "",
        name: "",
        phoneNumber: "",
        photoUrl: "",
        emailVerified: false,
        gender: "",
        dob: "",
        nationalitity: "",
        passportNumber: "",
        expiryDate: "",
        passportIssuingCountry: ""
    },
    reducers: {
        loginUser: (state, action) => {
            return {
                auth: true,
                role: action.payload.role,
                userId: action.payload.userId,
                name: action.payload.name,
                email: action.payload.email,
                emailVerified: action.payload.emailVerified,
                phoneNumber: action.payload.phoneNumber,
                photoUrl: action.payload.photoUrl,
                gender: action.payload.gender,
                dob: action.payload.dob,
                nationality: action.payload.nationality,
                passportNumber: action.payload.passportNumber,
                expiryDate: action.payload.expiryDate,
                passportIssuingCountry: action.payload.passportIssuingCountry
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
                gender: "",
                dob: "",
                nationalitity: "",
                passportNumber: "",
                expiryDate: "",
                passportIssuingCountry: ""
            }
        },
    }
});

export const {loginUser, logoutUser} = authSlice.actions;
export const authReducer = authSlice.reducer;