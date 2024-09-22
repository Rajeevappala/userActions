const mongoose = require("mongoose");

// create Schema
const userSchema = new mongoose.Schema({
    name : {
        type: String,
        required : true, 
    },
    email : {
        type: String,
        unique : true,
        required : true,
    },
    age : {
        type: Number,
    },
    
    },
    {timestamps : true}
); 

// create module 

const User = mongoose.mongoose.model('User' , userSchema)
module.exports = User
