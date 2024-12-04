
const jwt = require('jsonwebtoken')
const generateToken = () =>{
    const secret = 'hiureh4'
    const options = {
        expiresIn:'1h'
    }
    jwt.sign(payload,secret,options)
}
module.exports = {
    generateToken,
}