const express = require("express");
const router= express.Router();
const userController = require("../controllers/user-controller")
const {authMiddleware} = require("../middleware/auth-middleware")
const {librarianMiddleware} = require("../middleware/librarian-middleware")


router.post("/login", userController.loginUser);
router.post('/signup',userController.addNewUser)
router.get('/logout', authMiddleware, userController.logOutUser);
router.get("/get-students", authMiddleware, librarianMiddleware, userController.getAllStudents)
module.exports= router;