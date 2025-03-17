const express = require('express');

const app = express();

// define middleware

const requestTimwStamp = (req, res, next) => {
   const timeStamp = new Date().toISOString();
   console.log(`${timeStamp} from -  ${req.method} to -  ${req.url}`);
    next();
}
app.use(requestTimwStamp);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});