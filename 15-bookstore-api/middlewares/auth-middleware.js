const jwt = require('jsonwebtoken')


const authMiddleware = (req, res, next) => {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(" ")[1]
    if(!token){
        return res.status(401).json({
            success : false,
            message : 'access denied'
        })
    }
    // decode this token
    try {
        const decodeToken = jwt.verify(token, process.env.JWT_SECTET_KEY)
        req.user = decodeToken
        next()
        
    } catch (error) {
        return res.status(500).json({
            success : false,
            message : 'access denied'
        })
    }
  
    
}

module.exports = authMiddleware ;