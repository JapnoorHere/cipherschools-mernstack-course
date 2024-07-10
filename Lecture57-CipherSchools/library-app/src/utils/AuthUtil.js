import { logInUser, logOutUser, signUp } from "../api/user-Api";

const getUserToken = ()=>{
    return localStorage.getItem("token");
}

const  getLocalStorageUser = () =>{
    return JSON.parse( localStorage.getItem("user"));
}

const setUser = (data) =>{
    localStorage.setItem("token",data.token);
    localStorage.setItem("user",JSON.stringify(data.user));
}

const loginUserFunction =async ({email, password}) =>{
    const data = await logInUser({email, password});
    setUser(data);
    return data.user;
}

const logOutUserFunction = async()=>{
    const response = await logOutUser();
    localStorage.removeItem("token");
    localStorage.removeItem("user");
}

const SignupUser=async (userData) =>{
    const data= await signUp(userData);
    setUser(data);
    return data.user;
}

export{getUserToken, loginUserFunction as loginUser,
     SignupUser, getLocalStorageUser
    ,logOutUserFunction as logoutUser};