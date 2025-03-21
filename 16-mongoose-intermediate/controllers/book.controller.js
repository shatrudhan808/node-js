
const Author = require('../models/author.model.js');
const Book = require('../models/book.model.js');

const createAuthor = async (req, res) => {
    try {
        const author = new Author(req.body);
        await author.save();
        res.status(201).json({success: true, data: author});
    } catch (error) {
        res.status(500).json({success: false, message: error.message});
    }
};

const createBook = async (req, res) => {
    try {
        const book = new Book(req.body);
        await book.save();
        res.status(201).json({success: true, data: author});
    } catch (error) {
        res.status(500).json({success: false, message: error.message});
    }
};

const getBooksWrittenByAuthor = async (req, res) => {
    try {
        const books = await Book.findById(req.params.id).populate('author');
        if(!books) {
            return res.status(404).json({success: false, message: 'Books not found'});
        }
        res.status(200).json({success: true, data: books});
        
    } catch (error) {
        res.status(500).json({success: false, message: error.message});
    }
}

module.exports = { createAuthor, createBook, getBooksWrittenByAuthor };