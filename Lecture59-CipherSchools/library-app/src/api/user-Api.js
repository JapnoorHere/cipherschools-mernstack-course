import LibraryApplicationBackend from "./LibraryApplicationBackend";

export const logInUser = async({email,password}) =>{
    const {data} = await LibraryApplicationBackend.post("/user/login",{email, password});
    return data;
};

export const signUp = async(userData) =>{
    const {data} = await LibraryApplicationBackend.post("/user/signup",userData);
    return data;
}

export const logOutUser = async ()=>{
    const response = await LibraryApplicationBackend.get("/user/logout");
    return response;
}

export const getAllStudents = async ()=>{
    const {data: studentsList} = await LibraryApplicationBackend.get("/user/get-students");
    return studentsList;
}