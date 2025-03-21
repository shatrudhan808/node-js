require('dotenv').config()

const express = require('express');
const connectDb = require('./database/db.js')
const bookRoutes = require('./routes/book.routes.js')
const userRoutes = require('./routes/user.routes.js')
const homeRoutes = require('./routes/home.routes.js')
const adminRoutes = require('./routes/admin.routes.js')
const uploadImageRoutes = require('./routes/image.routes.js')
const PORT = process.env.PORT || 3000 ;

const app = express();

// connect to our database
connectDb();

// use middleware 
app.use(express.json())

// routes here
app.use('/api/v1',bookRoutes)
app.use('/api/v1/users', userRoutes)

app.use('/api/v1',homeRoutes)
app.use('/api/v1',adminRoutes)
app.use('/api/v1/image',uploadImageRoutes)

app.listen(PORT, ()=>{
    console.log(` server is listening at port : ${PORT}`);
    
})

