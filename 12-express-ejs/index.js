
const express = require('express');
const path = require('path');

const app = express();

// Set the view engine to ejs
app.set('view engine', 'ejs');

// Set the views directory

app.set('views', path.join(__dirname, 'views'));

const products = [
    { id: 1, name: 'Laptop', price: 2000 },
    { id: 2, name: 'Mobile', price: 1000 },
    { id: 3, name: 'Tablet', price: 500 },
    { id: 4, name: 'Headphone', price: 100 },
    { id: 5, name: 'Charger', price: 50 }
]

app.get('/', (req, res) => {
    res.render('home', { title:"home", products: products});
});

app.get('/about', (req, res) => {
    res.render('about', { title:"about"});
});





app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});