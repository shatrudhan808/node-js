const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/products', (req, res) => {
    const products = [
        { id: 1, name: 'Laptop' },
        { id: 2, name: 'Mobile' }
    ];
    res.json(products);
});

app.get('/products/:id', (req, res) => {
    const productid = parseInt(req.params.id);
    const products = [
        { id: 1, name: 'Laptop' },
        { id: 2, name: 'Mobile' }
    ];
    const product = products.find(product => product.id === productid);
    if (product) {
        res.json(product);
    } else {
        res.status(404).send('Product Not Found');
    }
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});