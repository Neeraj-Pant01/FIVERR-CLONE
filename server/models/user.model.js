const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    userName:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    img:{
        type:String,
        required:true
    },
    country:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    desc:{
        type:String,
        required:true
    },
    isSeller:{
        type:String,
        default:false
    }
},{
    timestamps:true
})

module.exports = mongoose.model("user",userSchema)