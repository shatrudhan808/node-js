const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/auth-middleware.js')

const {registerUser, loginUser, changePassword} = require('../controllers/auth-controller.js')


// all routes related to user only

router.post('/register', registerUser)
router.post('/login', loginUser)
router.post('/change-password', authMiddleware, changePassword)

module.exports = router