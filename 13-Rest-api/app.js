const express = require('express');

const app = express();

// Middleware
app.use(express.json());

let books = [
    { id: 1, title: 'Book 1', author: 'Author 1' },
    { id: 2, title: 'Book 2', author: 'Author 2' },
    { id: 3, title: 'Book 3', author: 'Author 3' }
    
]

// intro route

app.get('/', (req, res) => {
    res.json({
        message: 'Welcome to our Bookstore',
    })
});

// Get all books

app.get('/books', (req, res) => {
    res.json(books);
});

// Get single book

app.get('/books/:id', (req, res) => {
    const id = req.params.id;
    const book = books.find(book => book.id === parseInt(id));
    if(book) {
        res.status(200).json(book);
    }else{
    res.status(404).json({ message: 'Book not found'});
    }
});

// Add new book

app.post('/add-book', (req, res) => {
    const newBook = {
        id: books.length + 1,
        title:`book ${books.length + 1}`,
        author: `author ${books.length + 1}`
    }
    books.push(newBook);
    res.status(201).json({
        message: 'Book added successfully',
        data: newBook
    });
});

// Update book

app.put('/update-book/:id', (req, res) => {
    const id = req.params.id;
    const book = books.find(book => book.id === parseInt(id));
    if(book){
        book.title = req.body.title || book.title;
        res.status(200).json({
            message: 'Book updated successfully',
            data: book
        });
    }else{
        res.status(404).json({ message: 'Book not found'});
    }
    
});

// Delete book

app.delete('/delete-book/:id', (req, res) => {
    const findBookIndex = books.findIndex(book => book.id === parseInt(req.params.id));
    if(findBookIndex > -1){
        books.splice(findBookIndex, 1);
        res.status(200).json({
            message: 'Book deleted successfully'
        });
    }
    else{
        res.status(404).json({ message: 'Book not found'});
    }
});







app.listen(3000, () => {
    console.log('Server is running on port 3000');
});