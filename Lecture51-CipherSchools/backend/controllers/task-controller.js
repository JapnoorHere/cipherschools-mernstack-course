const Task = require("../models/task");

exports.getTaskForUser= async (req,res) =>{
    try {
        const taskList = await Task.find({owner: req.user._id});
        return res.status(200).send(taskList);
        
    } catch (error) {
        console.error(error);
        return res.status(500).send({message: err});
    }
}