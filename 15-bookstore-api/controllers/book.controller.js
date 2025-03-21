const Book = require('../models/book.model.js')

const getAllBooks = async (req, res)=>{
    try {
        const allBooks = await Book.find({})
        if(allBooks?.length > 0){
            res.status(200).json({
                success: true,  data : allBooks
            })
        }else{
            res.status(404).json({ success : false, message : 'rocord not found'})
        }
        
    } catch (error) {
        res.status(500).json({ success : false, message : 'somthing went wrong', error : error })
        
    }
}

const getSingleBook = async (req, res)=>{
    try {
        const singleBook = await Book.findById(eq.params.id)
        if(!singleBook){
            return res.status(404).json({ success : false, message : 'book not found'})
        }else{
            res.status(200).json({
                success: true,  data : singleBook
            })
        }
    } catch (error) {
        res.status(500).json({ success : false, message : 'somthing went wrong', error : error })
        
    }
}

const addNewBook = async (req, res)=>{
    try {
        const newBookFormData = req.body
        newlyCreatedBook = await Book.create(newBookFormData)
        if(newlyCreatedBook){
            res.status(201).json({success: true, message : 'New book created', data : newlyCreatedBook})
        }
    } catch (error) {
        res.status(500).json({ success : false, message : 'somthing went wrong', error : error })
        
    }
}

const updateBook = async (req, res)=>{
    try {
        const updatedBookFormData = req.body

        const updatedBook = await Book.findByIdAndUpdate(req.params.id, updatedBookFormData, {new : true})
        if(!updatedBook){
            return res.status(404).json({ success : false, message : 'book not found'})
        }else{
            res.status(200).json({
                success: true,  message : "book updated", data : updatedBook
            })
        }
        
    } catch (error) {
        res.status(500).json({ success : false, message : 'somthing went wrong', error : error }) 
    }
}

const deleteBook = async (req, res)=>{
    try {
        const book = await Book.findByIdAndDelete(req.params.id)
        if(!book){
            return res.status(404).json({ success : false, message : 'book not found'})
        }else{
            res.status(200).json({
                success: true,  message : "book deleted"
            })
        }
        
    } catch (error) {
        res.status(500).json({ success : false, message : 'somthing went wrong', error : error })
    }
}

module.exports = {getAllBooks, getSingleBook, addNewBook, updateBook, deleteBook}
