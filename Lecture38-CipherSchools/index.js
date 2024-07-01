const { connect } = require("mongoose");

const MongoUrl = "";
const DB_NAME = `cs-mern`;

async function connectDB() {
    try {
        await connect(`${MongoUrl}/${DB_NAME}`);
        console.log("MongoDB connected");
    } catch (error) {
        console.error("Error connecting", error);
    }
}

connectDB();