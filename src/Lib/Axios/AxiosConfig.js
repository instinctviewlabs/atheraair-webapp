import axios from "axios";

export const BASE_URL = "https://us-central1-atheraair.cloudfunctions.net";


export const AxiosConfig = axios.create({
    baseURL: BASE_URL,
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    }
})