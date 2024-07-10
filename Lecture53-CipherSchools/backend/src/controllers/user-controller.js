const UserService = require("../services/user-services")
const InputValidationException= require("../exceptions/inputValidationException");
const addNewUser = async(req, res) => {
    try {
        console.log("Received payload:", req.body);
        const { firstName, lastName, email, password, type } = req.body;
        if (typeof req.body !== 'object' || req.body === null) {
            throw new InputValidationException('Invalid payload format.');
        }
        let user = { firstName, lastName, email, password, type };
       user= await UserService.addNewUser(user);
        return res.status(200).send(user);
    } catch (error) {
        console.error(error);
        return res.status(error instanceof InputValidationException ? 400 : 500)
        .send({ message: error.message });
    }
}

const loginUser = async(req,res)=>{
    try{
        const {email,password} = req.body;
        const user = await UserService.loginUser(email,password);
        return res.status(200).send(user);
    }catch(error){
        console.error(error);
        return res.status( 500)
        .send({ message: error.message });
    }
}

module.exports= {addNewUser, loginUser}