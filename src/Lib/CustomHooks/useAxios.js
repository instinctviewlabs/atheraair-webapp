import axios from "axios";
import { useState, useEffect, useRef } from "react";

export default function useAxios(){

    const [response, setResponse] = useState([]);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [control, setControl] = useState();
    const effectRef = useRef(false);

    const axiosFetch = async (configObject) => {
        const {axiosInstance, method, url, requestConfig = {}} = configObject;
        if(effectRef.current){
            try{
                setLoading(true);
                const controller = new AbortController();
                setControl(controller);
                const res = await axiosInstance[method.toLowerCase()](url, {
                    ...requestConfig,
                    signal: controller.signal
                })
                setResponse(res.data);
                console.log(res);
            }catch(err){
                if(axios.isCancel(err)){
                    console.log(err);
                }else{
                    setError(err.message);
                    console.log(err);
                }
            }finally{
                setLoading(false);
            }
        }
    }

    useEffect(() => {
        // console.log(control);
        //clean up function
        return () => {
            // setLoading(true);
            effectRef.current = true;
            return control && control.abort();
        }
    }, [control])

    return [response, error, loading, axiosFetch];
}