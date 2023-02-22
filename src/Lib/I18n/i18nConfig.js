import i18n from 'i18next';
import Backend from "i18next-http-backend";
import { initReactI18next } from 'react-i18next';
import LanguageDetector from "i18next-browser-languagedetector";
import "./Locales/en.json";



i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    // backend: {
    //   loadPath: ""
    // },
    fallbackLng: 'en',
    // disable in production
    debug: true,
    lng: localStorage.getItem("i18nextLng"),
    resources: {
      en: {
        translations: require("./Locales/en.json")
      },
      es: {
        translations: require("./Locales/es.json")
      },
      fr: {
        translations: require("./Locales/fr.json")
      }
    },
    ns: ['translations'],
    interpolation: {
      escapeValue: false,
      formatSeparator: ","
    },
    react: {
      useSuspense: true
    },
    defaultNS: 'translations'
});

i18n.languages = ['en', 'es', 'fr'];

export default i18n;
