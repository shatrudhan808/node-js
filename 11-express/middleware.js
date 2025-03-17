const express = require('express');

const app = express();

// define middleware

const myFirstMiddleware = (req, res, next) => {
    console.log('I am a middleware');
    next();
}
app.use(myFirstMiddleware);

app.get('/', myFirstMiddleware, (req, res) => {
    res.send('Hello World!');
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});