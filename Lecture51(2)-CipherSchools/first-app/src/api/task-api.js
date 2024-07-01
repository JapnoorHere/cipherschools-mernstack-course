import { TaskApplicationBackend } from "./TaskAppliationApi"

export const getTaskForCurrectUser= async()=>{
    const {data} = await TaskApplicationBackend.get("/task/self");
    return data;
}

export const addTask= async({title,description})=>{
    const {data}= await TaskApplicationBackend.post("/task/add",{title, description});
    return data;
}