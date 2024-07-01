import { TaskApplicationBackend } from "./TaskAppliationApi"

export const loginUserApi = async ({email, password}) => {
 const {data} =  await TaskApplicationBackend.post(`/user/login`,{email,password});
 return data;
}
