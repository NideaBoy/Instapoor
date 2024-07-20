import axios from "axios";

export const cnn = axios.create({
    baseURL: process.env.API_URL,
    headers: {
        Accept: "application/json"
    }
})