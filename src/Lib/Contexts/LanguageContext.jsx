
import React, { createContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const LanguageContext = createContext();

function LanguageContextProvider(props){

    const ln = localStorage.getItem("i18nextLng");
    const cn = localStorage.getItem("country");
    const [language, setLanguage] = useState(ln);
    const [country, setCountry] = useState(!!cn ? cn : "");
    const {i18n} = useTranslation();

    useEffect(() => {
        i18n.changeLanguage(language);
    }, [language])

    useEffect(() => {
        localStorage.setItem("country", country);
    },[country])


    return(
        <LanguageContext.Provider value={{language, setLanguage, country, setCountry}}>
            {props.children}
        </LanguageContext.Provider>
    )
}


export {LanguageContextProvider, LanguageContext}