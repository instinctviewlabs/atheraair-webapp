import React, { Suspense } from "react";
import { IntlProvider } from "react-intl";
import { LanguageContextProvider } from "./Lib/Contexts/LanguageContext";
import { LoaderContextProvider } from "./Lib/Contexts/LoaderContext";
import { SnackbarContextProvider } from "./Lib/Contexts/SnackbarContext";
import AppRoutes from "./Routes/AppRoutes";

function App() {
  return (
    <Suspense fallback={null}>
      <LanguageContextProvider>
        <IntlProvider messages={{}} locale="en" defaultLocale="en">
          <LoaderContextProvider>
            <SnackbarContextProvider>
              <AppRoutes/>
            </SnackbarContextProvider>
          </LoaderContextProvider>
        </IntlProvider>
      </LanguageContextProvider>
    </Suspense>
  );
}

export default App;
