require("./appMongoose")
const express = require("express")
const cors= require("cors");
const app= express();
const bookRouter = require("./routes/book-route");
const userRoute= require("./routes/user-route")
const bookIssueRouter = require("./routes/book-issue-route")

app.use(cors());
app.use(express.json());
app.use("/user",userRoute)
app.use("/book", bookRouter);
app.use("/book-issue",bookIssueRouter)

app.listen(8082, ()=>{
    console.log("Server is running");
})

module.exports = app;