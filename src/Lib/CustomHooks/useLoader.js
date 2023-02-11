import { useState } from "react";

export default function useLoader(){
    const [isLoading, setLoading] = useState(false);

    function startLoading(){
        setLoading(true)
    }

    function restLoading(){
        setLoading(false)
    }

    return [isLoading, startLoading, restLoading];
}