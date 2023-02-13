import React from "react";
import { LoaderContextProvider } from "./Lib/Contexts/LoaderContext";
import { SnackbarContextProvider } from "./Lib/Contexts/SnackbarContext";
import AppRoutes from "./Routes/AppRoutes";

function App() {
  return (
    <LoaderContextProvider>
      <SnackbarContextProvider>
        <AppRoutes/>
      </SnackbarContextProvider>
    </LoaderContextProvider>
  );
}

export default App;
