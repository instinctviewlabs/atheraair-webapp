
import React, { createContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const LanguageContext = createContext();

function LanguageContextProvider(props){

    const ln = localStorage.getItem("i18nextLng");
    const [language, setLanguage] = useState(ln);
    const {i18n} = useTranslation();

    useEffect(() => {
        i18n.changeLanguage(language);
    }, [language])


    return(
        <LanguageContext.Provider value={{language, setLanguage}}>
            {props.children}
        </LanguageContext.Provider>
    )
}


export {LanguageContextProvider, LanguageContext}