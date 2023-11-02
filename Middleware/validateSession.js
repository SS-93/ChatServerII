

const jwt = require('jsonwebtoken')
async function validateSession (req, res, next) {

 try {
    
    const token = req.headers.authorization
    // console.log(token)
    const decoded = await jwt.verify(token, process.env.JWT)
    console.log(decoded)
    return next();

 } catch (err ) {
    return res.status(403).json ({mesage: err.message})
 }
    

}

module.exports = validateSession