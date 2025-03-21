
const express = require('express');

const router = express.Router();

const { createAuthor, createBook, getBooksWrittenByAuthor} = require('../controllers/book.controller.js');

router.post('/create-author', createAuthor);
router.post('/create-book', createBook);
router.get('/books/:id', getBooksWrittenByAuthor);
module.exports = router;