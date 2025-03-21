const express = require('express')
const { getAllBooks, getSingleBook, addNewBook, updateBook, deleteBook } = require('../controllers/book.controller.js')

// create express router

const router = express.Router()

// all routes related to book only

router.get('/books', getAllBooks)
router.get('/book/:id', getSingleBook)

router.post('/add-book', addNewBook)
router.put('/update-book/:id', updateBook)
router.delete('/detete-book/:id', deleteBook)

module.exports = router
