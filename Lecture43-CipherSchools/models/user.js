const {model, Schema} = require("mongoose");
const {isEmail} = require("validator");

const UserSchema = new Schema(
    {
        name: {type: String, trim: true, required: true},
        email: {type: String, trim: true, lowercase: true, unique: true, required: true
            , validate : {validator(email) {
                return isEmail(email);
            },},
        },
        age: {type:Number, required: true, validate: {validator(age){
            if(age<0) {
                throw new Error(`Age must be +ve`);
            }
            return true;
        }}},
        password: {type: String, required: true, trim: true, minlength: 8
            , validate: {validator(password) {
                if(password.includes(" ") || password.includes("\n") || password.includes("\t")){
                    throw new Error(`Password includes space/tab/newLine char`);
                }

                if(password.toLowerCase().includes("password")){
                    throw new Error(`Password must not contain password`);
                }
            }}
        }
    },
    {timestamps: true}
);

UserSchema.statics.findByEmailAndPasswordForAuth = async (email, password)=>{
    try{
        const user = await User.findOne({ email })
        if(!user){
            throw new Error(`Invalid credentials`);
        }
        if(password !== user.password){
            throw new Error(`Invalid credentials`);
        }
        console.log("Login Successful");
        return user;
    } catch(err){
        console.error(err);
        throw err;
    }
}

const User= model("User", UserSchema);

module.exports = User;
// need to create 3 more folders : controllers, routes, services