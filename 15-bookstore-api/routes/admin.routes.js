const express = require('express')
const authMiddleware = require('../middlewares/auth-middleware.js')
const isAdmin = require('../middlewares/admin-middleware.js')

const router = express.Router();

router.get('/admin', authMiddleware, isAdmin, (req, res)=>{
    res.json({ message : "welcome to admin page"})
})

module.exports = router