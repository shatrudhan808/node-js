
const mongoose = require('mongoose');


const connectDb = async ()=>{
    try {
        await mongoose.connect(process.env.DB_STRING)
        console.log(` Database connected `);
        
    } catch (error) {
        console.error('Mongodb connection error', error)
        process.exit(1)
    }
}

module.exports = connectDb;