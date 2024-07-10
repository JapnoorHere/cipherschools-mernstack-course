import axios from "axios"
import { getUserToken } from "../utils/AuthUtil";

const LibraryApplicationBackend = axios.create({
    baseURL: `https://backend-84ww3an0m-rahuls-projects-19aa6da8.vercel.app/`
});

LibraryApplicationBackend.interceptors.request.use((config)=>{
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

export default LibraryApplicationBackend;