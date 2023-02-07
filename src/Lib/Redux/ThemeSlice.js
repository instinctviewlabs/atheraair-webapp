import { createSlice } from "@reduxjs/toolkit";

export const ThemeSlice = createSlice({
    name: "theme",
    initialState: false,
    reducers: {
        setTheme: (state, action) => {
            return !state
        }
    }
});

export const {setTheme} = ThemeSlice.actions;
export const ThemeReducer = ThemeSlice.reducer;