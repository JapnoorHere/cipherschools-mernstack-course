const express= require("express");
const Task = require("./models/task");
const app = express();

require("./mongoosee");

app.get("/",(req,res)=>{
    res.send("This is res")
})

app.get("/add",(req,res)=>{
    let {a: firstNumber,b: secondNumber} = req.query;

    let sum = parseInt(firstNumber) + parseInt(secondNumber);

    res.send({
        sum,
    });
})

app.post("/add-task",async (req,res)=>{
    const task= new Task({title: "task 1", description: "Test 1"});
   await task.save();

   return res.status(201).send({message: "Added"})
});

app.listen(3000,()=>{
    console.log("Server is running on 3000");
})