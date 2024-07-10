import { logInUser, signUp } from "../api/user-Api";

const getUserToken = ()=>{
    return localStorage.getItem("token");
}

const setUser = (data) =>{
    localStorage.setItem("token",data);
    localStorage.setItem("user",data.user);
}

const loginUserFunction =async ({email, password}) =>{
    const data = await logInUser({email, password});
    setUser(data);
    return data.user;
}

const SignupUser=async (userData) =>{
    const data= await signUp(userData);
    setUser(data);
    return data.user;
}

export{getUserToken, loginUserFunction as loginUser, SignupUser};