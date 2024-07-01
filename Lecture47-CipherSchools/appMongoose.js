const { connect } = require("mongoose");

const MongoUrl = "mongodb+srv://rgs786999:8wm6lhVoV59yirSJ@cluster0.9olfp7w.mongodb.net";
const DB_NAME = `cs-mern`;

async function connectDB() {
    try {
        await connect(`${MongoUrl}/${DB_NAME}`);
        console.log("DB connected");
    } catch (error) {
        console.error("Error connecting to the database", error);
    }
}

connectDB();


