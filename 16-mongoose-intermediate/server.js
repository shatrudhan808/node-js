 // config dotenv
require('dotenv').config();

// import express
const express = require('express');

// import mongoose
const mongoose = require('mongoose');


const productRoutes = require('./routes/product.routes.js');
const bookRoutes = require('./routes/book.routes.js');

// create express app
const app = express();
app.use(express.json());

// connect to mongodb
mongoose.connect(process.env.MOMNGO_URI).then(() => {
console.log('database connected');
}).catch( (err)=>{
console.log(err)
})



app.use('/products', productRoutes);
app.use('/books', bookRoutes);



app.listen(3000, () => {
    console.log('Server is running on port 3000');
});