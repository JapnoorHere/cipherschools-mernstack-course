const express= require("express");
const app = express();


app.get("/add",(req,res)=>{
    let {a: first,b: second} = req.query;

    let sum = parseInt(first) + parseInt(second);
    res.send({sum,});
})

app.get("/",(req,res)=>{
    res.send("It is res")
})

app.listen(4000,()=>{
    console.log("Server is running on 4000");
})