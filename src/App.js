import React from "react";
import { SearchFlightDataProvider } from "./Lib/Contexts/SearchFlightContext";
import AppRoutes from "./Routes/AppRoutes";

function App() {
  return (
    <SearchFlightDataProvider>
    <AppRoutes/>
    </SearchFlightDataProvider>
  );
}

export default App;
