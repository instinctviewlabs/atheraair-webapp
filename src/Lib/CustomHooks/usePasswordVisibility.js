import { useState } from "react"

export const usePasswordVisibility = () => {
    const [isPasswordHidden, setIsPasswordHidden] = useState(true);

    function changePasswordVisibility(){
        setIsPasswordHidden(!isPasswordHidden);
    }

    return [isPasswordHidden, changePasswordVisibility];
}