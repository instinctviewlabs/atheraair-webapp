import { useState } from "react";

export default function useSwitch(){

    const [toggle, changeToggle] = useState(false);

   function setToggle(){
        changeToggle(!toggle);
   }

    return [toggle, setToggle];
}