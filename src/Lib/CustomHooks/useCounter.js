import { useState } from "react";

export default function useCounter(count){

    const [counter, setCounter] = useState(count);

    function increment(){
        if(counter < 9){
            setCounter(prev => prev + 1)
        }else{
            setCounter(count)
        }
    }

    function decrement(){
        if(counter > count){
            setCounter(prev => prev - 1)
        }else{
            setCounter(count)
        }
    }

    return [counter, increment, decrement];
}