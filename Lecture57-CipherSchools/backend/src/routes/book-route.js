const express = require('express');
const router = express.Router();
const bookController = require('../controllers/book-controller');
const { authMiddleware } = require('../middleware/auth-middleware');
const { librarianMiddleware } = require('../middleware/librarian-middleware');

router.post("/add",authMiddleware,librarianMiddleware, bookController.addBook);
router.get("/all",authMiddleware, bookController.getAllBooks);

module.exports = router;