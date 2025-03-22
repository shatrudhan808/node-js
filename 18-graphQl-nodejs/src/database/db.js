
const mongoose = require('mongoose')

const dbConnect = async ()=>{
    try {
        await mongoose.connect(process.env.MOMNGO_URI)
        console.log('Database Connected');
        
        
    } catch (error) {
        console.error('Mongo connection error', err)
        process.exit(1)
    }
}
module.exports = dbConnect

