import axios from "axios";
import { auth } from "../Firebase/firebase.config";
export const BASE_URL = "https://us-central1-atheraair.cloudfunctions.net";


export const Axios = async ({method, url, data = null, cancelToken, headers = null, auth = false}) => {

    // const verifyId = await auth.currentUser.getIdToken();
    // const verifyId = localStorage.getItem("verifyId");
    // console.log(verifyId);

    const config = {
        method: method,
        url: `${BASE_URL}/${url}`,
        headers: !!headers ? headers : {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        cancelToken: cancelToken,
        data: data
    }

    if(auth){
        config.headers.idToken = localStorage.getItem("verifyId");
    }

    try{
        const response = await axios(config);
        return response;
    }catch(err){
        if(!axios.isCancel()){
            return err;
        }
    }    
} 