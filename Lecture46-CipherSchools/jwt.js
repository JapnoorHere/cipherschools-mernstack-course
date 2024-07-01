const jwt= require("jsonwebtoken");

const CS_SECRET_KEY= "CSSECRETKEY";

const generateToken = (payload) =>{
    const token = jwt.sign(payload, CS_SECRET_KEY);
    return token;
};

const verifyToken = (token) => {
    try {
        const payload=  jwt.verify(token, CS_SECRET_KEY);

        return {isValidToken: true, payload};
    } catch (error) {
        console.error(error);
        return {isValidToken: false, payload: undefined};
    }
};

// module.exports= {generateToken, verifyToken}

// console.log(generateToken({name: "Rahul"}));

console.log(verifyToken("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiUmFodWwiLCJpYXQiOjE3MTkzMjc3ODF9.g-uM69Q_JDBN_lgmdFHQNLSpNvh6snxN4DaKXSz6xz0"));