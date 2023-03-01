
import React, { createContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { IntlProvider } from "react-intl";
import useLanguageConsumer from "../CustomHooks/useLanguageConsumer";

const IntlContext = createContext();

function IntlContextProvider(props){

    const { language } = useLanguageConsumer();
    const [locale, setLocale] = useState(language);
    

    useEffect(() => {
        setLocale(language);

        return () => {}
    }, [language])


    return(
        <IntlContext.Provider value={locale}>
            <IntlProvider messages={{}} locale={locale} defaultLocale="en">
                {props.children}
            </IntlProvider>
        </IntlContext.Provider>
    )
}


export {IntlContextProvider, IntlContext}