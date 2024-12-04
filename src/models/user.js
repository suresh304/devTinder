const { default: mongoose } = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName:String,
    lastName:String,
    email:String,
    password:{
        type:String,
        required:true,
        
    }
})


module.exports = mongoose.model('User',userSchema)