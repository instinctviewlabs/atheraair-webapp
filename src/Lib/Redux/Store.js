import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { ThemeReducer } from "./ThemeSlice";
import { persistStore, persistReducer } from "redux-persist";
import thunk from "redux-thunk";
import storage from "redux-persist/lib/storage";
import { authReducer } from "./AuthSlice";
import { flightSearchResultReducer } from "./FlightSearchResultSlice";

const persistConfig = {
    key: "root",
    version: 1,
    storage
}

const rootReducer = combineReducers({
    theme: ThemeReducer,
    auth: authReducer,
    flightSearchKey: flightSearchResultReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: {
        persistedReducer,
    },
    middleware: [thunk]
})

export const persistor = persistStore(store);