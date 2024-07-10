const {connect} = require("mongoose");

const MongoUrl = "mongodb+srv://rgs786999:8wm6lhVoV59yirSJ@cluster0.9olfp7w.mongodb.net";

const DB_NAME= `cs-library`

const connectDb= async ()=>{
    try{
        await connect(`${MongoUrl}/${DB_NAME}`);
        console.log("MongoDb Connected successfully!!");
    } catch(err){
        console.error(err);
    }
};

connectDb();

module.exports = {};