const User = require('../models/user.model.js')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

// register controller
const registerUser = async(req, res) => {
    try {
        // extract user information
        const {username, email, password} = req.body
        // check if user is alrady exist
        const isUserExist = await User.findOne({
            $or : [{username},{email}]
        })
        if(isUserExist){
            return res.status(404).json({
                success : false,
                message : 'User is already exists'
            })
        }
        // has user password
        const salt = await bcrypt.genSalt(10)
        const haspassword = await bcrypt.hash(password, salt)

        // create a new user
        const newUser = new User({
            username,
            email,
            password : haspassword
        }) 
        await newUser.save()
        if(newUser){
            res.status(201).json({success : true, message: "New User register Successfully !"})
        }else{
            res.status(400).json({success : false, message: "Unable to register user !"})
        }

        
    } catch (error) {
        res.status(500).json({ success : false, message : 'somthing went wrong', error : error })
    }
}


// login controller

const loginUser = async(req, res) => {
    try {
        const {username, password} = req.body
        // find if the current user exists or not
        const user = await User.findOne({username})
        if(!user){
           return res.status(400).json({success : false, message: "User Does not exists"})
        }
        // check if password is correct
        const isPasswordCorrect = await bcrypt.compare(password,user.password)
        if(!isPasswordCorrect){
            return res.status(400).json({success : false, message: "incorrect password"})
        }else{
            // create user token
            const accessToken = jwt.sign({
                userId : user._id,
                username : user.username,
                role : user.role
            }, process.env.JWT_SECTET_KEY, { expiresIn : '15m'})
            res.status(200).json({success : true, accessToken, message: "User login Successfully !"})
        }
    } catch (error) {
        res.status(500).json({ success : false, message : 'somthing went wrong', error : error })
    }
}

const changePassword = async(req, res) => {
    try {
        const _id = req.user.userId
        // extcact old and new password
        const {oldPassword, newPassword} = req.body
        // find current user
        const user = await User.findById(_id)
        if(!user){
            return res.status(400).json({success : false, message: "User Does not exists"})
        }
        // check if old password is correct
        const isPasswordCorrect = await bcrypt.compare(oldPassword,user.password)
        if(!isPasswordCorrect){
            return res.status(400).json({success : false, message: "incorrect password"})
        }
        // hash new password
        const salt = await bcrypt.genSalt(10)
        const haspassword = await bcrypt.hash(newPassword, salt)

        // update user password
       user.password = haspassword
         await user.save()
        res.status(200).json({success : true, message: "Password changed Successfully !"})

    } catch (error) {
        res.status(500).json({ success : false, message : 'somthing went wrong', error : error })
    }
}
    


module.exports = { registerUser, loginUser, changePassword }

