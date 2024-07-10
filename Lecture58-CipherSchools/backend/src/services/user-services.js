const User = require("../models/user")
const InputValidationException= require("../exceptions/inputValidationException");
const addNewUser = async (user) => {
    try {
      console.log("Creating user with payload:", user);
      user = new User(user);
      await user.save();
      console.log(`User with ID: ${user._id} was added in the database`);
      const token = user.generateToken();
      return { user, token };
    } catch (error) {
      console.error(`Please enter the valid fields. The error is ${error}`);
      throw new InputValidationException(error.message);
    }
}

// const loginUser = async (email, password) => {
//   try {
//       if (!email || !password) {
//           throw new InputValidationException('Email and password are required.');
//       }
//       const user = await User.findByEmailAndPasswordForAuth(email, password);
//       if (!user) {
//           throw new InputValidationException('User not found or incorrect password.');
//       }
//       const token = user.generateToken();
//       console.info(`User with Email: ${email} successfully logged in.`);
//       return { user, token };
//   } catch (error) {
//       console.error(`Login failed. The error is ${error}`);
//       throw new InputValidationException(error.message);
//   }
// };


const loginUser = async (email, password) => {
  const user = await User.findByEmailAndPasswordForAuth(email, password);
  console.log(`User with Email: ${email} successfully logged in.`);
  const token = user.generateToken();

  return {user,token};
}


module.exports = {
    addNewUser,
    loginUser
};