const jwt= require("jsonwebtoken");

const CS_SECRET_KEY= "CS_LIP-AppSign";

const generateToken = ({_id, type}) =>{
    //{_id, type} is payload
    // const token = jwt.sign(payload, CS_SECRET_KEY, {expiresIn: 30});
    // const token = jwt.sign(payload, CS_SECRET_KEY, {expiresIn: "1h"});
    const token = jwt.sign({_id, type}, CS_SECRET_KEY);
    return token;
};

const verifyToken = (token) => {
    try {
        const payload=  jwt.verify(token, CS_SECRET_KEY);

        return {status: true, payload};
    } catch (error) {
        console.error(error);
        return {status: false, payload: undefined};
    }
};

module.exports= {generateToken, verifyToken}

// console.log(generateToken({name: "Rahul"}));

// console.log(verifyToken("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiUmFodWwiLCJpYXQiOjE3MTkzMjc3ODF9.g-uM69Q_JDBN_lgmdFHQNLSpNvh6snxN4DaKXSz6xz0"));