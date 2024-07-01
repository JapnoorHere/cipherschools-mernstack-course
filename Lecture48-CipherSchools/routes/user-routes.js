const express = require("express")
const router = express.Router();
const userController = require("../controllers/user-controller");
const authMiddleware = require("../middleware/auth-middleware");


router.post("/login", userController.loginUser);
router.post("/signup", userController.addNewUser);
router.delete("/self",authMiddleware, userController.deleteUser)

module.exports = router;