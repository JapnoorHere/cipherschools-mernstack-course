require("./appMongoose")
const express = require("express")
const cors= require("cors");
const app= express();
const userRoute= require("./routes/user-route")

app.use(cors());
app.use(express.json());
app.use("/user",userRoute)

app.listen(8082, ()=>{
    console.log("Server is running");
})