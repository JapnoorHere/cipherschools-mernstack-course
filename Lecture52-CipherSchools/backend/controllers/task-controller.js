const Task = require("../models/task");

exports.addNewTask= async(req,res)=>{
    try{
        const task= new Task({...req.body, owner: req.user._id});
        await task.save();
        return res.status(201).send({message: "Saved"});
    }catch (error) {
        console.error(error);
        return res.status(500).send({message: err});
    }
}

exports.getTaskForUser= async (req,res) =>{
    try {
        const taskList = await Task.find({owner: req.user._id});
        return res.status(200).send(taskList);
        
    } catch (error) {
        console.error(error);
        return res.status(500).send({message: err});
    }
}