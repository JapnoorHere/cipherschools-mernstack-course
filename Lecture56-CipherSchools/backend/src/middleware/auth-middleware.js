const { verifyToken } = require("../jwt");
const User = require("../models/user");

const authMiddleware = async (req, res, next) => {
    const { authorization } = req.headers;

    if (!authorization) {
        return res.status(401).json({ message: "Authorization token is required" });
    }

    const token = authorization.substring(7);
    const { status, payload } = verifyToken(token);

    if (!status) {
        return res.status(401).json({ message: "Please use a valid token. To get a valid token, please authenticate." });
    }

    const { _id } = payload;
    const user = await User.findOne({ _id });

    if (!user) {
        return res.status(403).json({ message: "User not found" }); // Ensure you define an appropriate error message or object
    } else {
        req.user = user;
        req.token = token;
        next();
    }
};

module.exports = { authMiddleware };