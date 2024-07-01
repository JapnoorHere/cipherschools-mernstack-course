import { TaskApplicationBackend } from "./TaskAppliationApi"

export const getTaskForCurrectUser= async()=>{
    const {data} = await TaskApplicationBackend.get("/task/self");
    return data;
}