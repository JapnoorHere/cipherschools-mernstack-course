require("./appMongoose")
const express = require("express")
const cors= require("cors");
const app= express();
const bookRouter = require("./routes/book-route");
const userRoute= require("./routes/user-route")

app.use(cors());
app.use(express.json());
app.use("/user",userRoute)
app.use("/book", bookRouter);

app.listen(8082, ()=>{
    console.log("Server is running");
})