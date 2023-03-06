import axios from "axios";
import { auth } from "../Firebase/firebase.config";
export const BASE_URL = "https://us-central1-atheraair.cloudfunctions.net";


export const Axios = async ({method, url, data = null, cancelToken, headerObj = null}) => {

    const verifyId = await auth.currentUser.getIdToken();
    console.log(verifyId);
    
    const config = {
        method: method,
        url: `${BASE_URL}/${url}`,
        headers: {
            idToken: verifyId,
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        cancelToken: cancelToken,
        data: data
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