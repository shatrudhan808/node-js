const express = require('express');

const app = express();

// application level Settings

app.set('view engine', 'ejs');

// routes
app.get('/', (req, res) => {
    res.render('index', { title: 'Home' });
});

app.post('/api/data', (req, res) => {
    res.json({ message: 'Data received' , data: req.body});
});

// middleware

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// server

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});