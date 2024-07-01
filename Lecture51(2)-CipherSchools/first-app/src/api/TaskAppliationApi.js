import axios from "axios"
import { getUserToken } from "../utils/loginUtil";

export const TaskApplicationBackend = axios.create({
    baseURL: `http://localhost:8081`
});

TaskApplicationBackend.interceptors.request.use((config)=>{
    const token= getUserToken();
    if(token) {
        config.headers = {Authorization: `Bearer ${token}`};
        console.log("Inside interceptor");
    }
    return config;
  
}, (error) =>{
    return Promise.reject(error);
}
);