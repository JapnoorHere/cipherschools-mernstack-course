const express= require("express");
const Task = require("./models/task");
const app = express();

// helps toparse json to a js object
app.use(express.json());

require("./appMongoose");

app.get("/",(req,res)=>{
    res.send("This is some response from your second nodejs server ")
})

app.get("/add",(req,res)=>{
    let {a: firstNumber,b: secondNumber} = req.query;

    let sum = parseInt(firstNumber) + parseInt(secondNumber);

    res.send({
        sum,
    });
})

app.post("/add-task",async (req,res)=>{
    const task= new Task({title: "test task", description: "Test task desc"});
   await task.save();

   return res.status(201).send({message: "Saved!"})
});

app.get("/get-tasks", async (req,res)=>{
    const taskList= await Task.find();
    return res.status(200).send(taskList);
})

app.put("/update-task/:taskId",async (req,res)=>{
    const {taskId} = req.params;
    const updateResult = await Task.updateOne({_id: taskId},
         {$set: { ...req.body},}
        );
        if (!updateResult.matchedCount){
            return res.status(404).send({message: `Task with ID: ${taskId} was not found. `})
        }
        return res.status(200).send({message: "Update success"});
})
// usinh thunder clinet to run requests
app.delete("/delete-task/:taskId",async (req,res)=>{
    const {taskId} = req.params;
    const deleteResult = await Task.deleteOne({_id: taskId}
        );
        if (!deleteResult.deletedCount){
            return res.status(404).send({message: `Task with ID: ${taskId} was not found. `})
        }
        return res.status(200).send({message: "Delete Success"});
} )

app.listen(808,()=>{
    console.log("Server is running");
})