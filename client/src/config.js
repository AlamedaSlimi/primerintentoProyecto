import axios from "axios"

export const axiosInstance = axios.create({
    baseURL: "https://primerintentoprofinapi.onrender.com/"
})

