import { useContext } from "react";
import { SnackbarContext } from "../Contexts/SnackbarContext";

export default function useSnackBar(){
    return useContext(SnackbarContext);
}