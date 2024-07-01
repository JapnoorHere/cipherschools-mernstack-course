const User = require("../models/user");

const addNewUser = async(req, res) => {
    try {
        const { name, email, age, password } = req.body;
        const user = new User({ name, email, age, password });
        await user.save();
        const token = user.generateToken();
        return res.status(201).send({user, token});
    } catch (error) {
        console.error(error);
        return res.status(500).send({ message: error.message });
    }
}

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findByEmailAndPasswordForAuth(email, password);
        const token = user.generateToken();
        console.info(`User with Email: ${email} successfully logged in.`);
        return res.status(200).send({ user, token });
    } catch (err) {
        console.error(err);
        return res.status(500).send({ message: "Login Failed!" });
    }
}

const deleteUser = async (req, res) => {
    const {user} = req;
    const userId  = user._id; 
    
    const deleteResult = await User.deleteOne({ _id: userId });

    if (!deleteResult.deletedCount) {
        console.error(`Delete failed! User with ${userId} was not found`);
        return res.status(404).send({ message: `Delete failed! User with ${req.params.id} was not found` });
    }
    console.info(`Delete Success: User with ID: ${userId} was deleted`);
    return res.status(200).send({ message: "Delete success" });
}

module.exports = { addNewUser, loginUser, deleteUser };
