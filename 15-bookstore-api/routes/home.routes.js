const express = require('express')
const authMiddleware = require('../middlewares/auth-middleware.js')

const router = express.Router();

router.get('/home', authMiddleware, (req, res)=>{
    const {username, userId, role} = req.user;
    res.json({ message : "welcome to home page", user : {
        _id : userId,
        username,
        role
    }})
})

module.exports = router