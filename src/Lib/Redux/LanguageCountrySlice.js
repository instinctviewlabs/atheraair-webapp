import { createSlice } from "@reduxjs/toolkit";

export const LanguageAndCountrySlice = createSlice({
    name: "languageAndCountry",
    initialState: {language: "en"},
    reducers: {
        setLanguage: (state, action) => {
            return {...state, language: action.payload}
        }
    }
});

export const {setLanguage} = LanguageAndCountrySlice.actions;
export const LanguageAndCountryReducer = LanguageAndCountrySlice.reducer;