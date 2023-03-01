import React, { Suspense } from "react";
import { IntlProvider } from "react-intl";
import { IntlContextProvider } from "./Lib/Contexts/IntlContextProvider";
import { LanguageContextProvider } from "./Lib/Contexts/LanguageContext";
import { LoaderContextProvider } from "./Lib/Contexts/LoaderContext";
import { SnackbarContextProvider } from "./Lib/Contexts/SnackbarContext";
import AppRoutes from "./Routes/AppRoutes";

function App() {

  return (
    <Suspense fallback={null}>
      <LanguageContextProvider>
        {/* <IntlProvider messages={{}} locale={locale} defaultLocale="en"> */}
        <IntlContextProvider>
          <LoaderContextProvider>
            <SnackbarContextProvider>
              <AppRoutes/>
            </SnackbarContextProvider>
          </LoaderContextProvider>
        </IntlContextProvider>
        {/* </IntlProvider> */}
      </LanguageContextProvider>
    </Suspense>
  );
}

export default App;
