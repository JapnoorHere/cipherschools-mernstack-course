import axios from "axios"

export const TaskApplicationBackend = axios.create({
    baseURL: `http://localhost:8081`
});

// TaskApplicationBackend.interceptors.request.use((config)=>{
//     console.log("Run this configuration");
//     console.log(config);
// }, (error) =>{
//     return Promise.reject(error);
// }
// );