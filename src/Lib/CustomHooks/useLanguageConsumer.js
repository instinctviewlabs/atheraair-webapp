import { useContext } from "react";
import { LanguageContext } from "../Contexts/LanguageContext";

export default function useLanguageConsumer(){
    return useContext(LanguageContext);
}