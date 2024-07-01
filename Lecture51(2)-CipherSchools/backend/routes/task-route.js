const express = require("express");
const authMiddleware = require("../middleware/auth-middleware");
const taskController = require("../controllers/task-controller")
const router = express.Router();

router.post("/add",authMiddleware, taskController.addNewTask);
router.get("/self",authMiddleware,taskController.getTaskForUser);

module.exports= router;