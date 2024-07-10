const express = require("express");
const router = express.Router();
const bookISSueController =require("../controllers/Book-issue-controller");
const {authMiddleware} = require("../middleware/auth-middleware");
const {librarianMiddleware} = require("../middleware/librarian-middleware")

router.post("/add",authMiddleware,librarianMiddleware,bookISSueController.addBookIssue);

router.get("/by-student", authMiddleware, bookISSueController.getBookIssuedByStudent)

module.exports = router;