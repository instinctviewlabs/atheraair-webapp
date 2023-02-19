import React, { Suspense } from "react";
import { LanguageContextProvider } from "./Lib/Contexts/LanguageContext";
import { LoaderContextProvider } from "./Lib/Contexts/LoaderContext";
import { SnackbarContextProvider } from "./Lib/Contexts/SnackbarContext";
import AppRoutes from "./Routes/AppRoutes";

function App() {
  return (
    <Suspense fallback={null}>
      <LanguageContextProvider>
        <LoaderContextProvider>
          <SnackbarContextProvider>
            <AppRoutes/>
          </SnackbarContextProvider>
        </LoaderContextProvider>
      </LanguageContextProvider>
    </Suspense>
  );
}

export default App;
