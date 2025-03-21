
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/nodejs').then(() => {
console.log('database connected');
}).catch( (err)=>{
console.log(err)
})

const userSchema = new mongoose.Schema({
    name : String,
    email : String,
    age : Number,
    isActive : Boolean,
    tags : [String],
    createAt : {type : Date , default : Date.now}
})

// create a user model

const User = mongoose.model('User', userSchema)

 async function runQueryFunctions() {
    try {
        // create a new document
        // const newUser = await User.create({
        //     name : "shatrudhan",
        //     email : "shat@gmail.com",
        //     age : 30,
        //     isActive : true,
        //     tags : ['hi','hello','bye']

        // })

        // const newUser = new User({
        //     name : "amit",
        //     email : "amit@gmail.com",
        //     age : 30,
        //     isActive : true,
        //     tags : ['hi','hello','bye']

        // })
        // await newUser.save()
        // console.log('new user created', newUser);
        //const allUser = await User.find()

        //const getInactiveUser = await User.find({isActive : true,})

        const limitedUsers = await User.find().limit(5).skip(1)

        const shortedUser = await User.find().sort({age : -1})

        console.log(getInactiveUser);
        
        
        
    } catch (error) {
        console.log(error);
        
    } finally{
        await mongoose.connection.close()
    }
}
runQueryFunctions()