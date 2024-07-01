const {model, Schema} = require("mongoose");

const UserSchema = new Schema(
    {
        name: {type: String, trim: true, required: true},
        email: {type: String, trim: true, lowercase: true, unique: true, required: true},
        age: {type:Number, required: true},
        password: {type: String, required: true, trim: true, minlength: 8}
    },
    {timestamps: true}
);

const User= model("User", UserSchema);

module.exports = User;
// need to create 3 more folders : controllers, routes, services