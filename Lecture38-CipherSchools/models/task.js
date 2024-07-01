const { model, Schema } = require("mongoose");

const TasksSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true
        },
        isComplete: {
            type: Boolean,
            default: false,
        }
    },
    { timestamps: true }

);

const TasksModel = model("Tasks", TasksSchema);

module.exports = TasksModel;
