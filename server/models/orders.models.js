const mongoose = require("mongoose");

const orderschema = new mongoose.Schema({
    gigId:{
        type:String,
        required:true
    },
    image:{
        type:String,
    },
    title:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    sellerId:{
        type:String,
        required:true
    },
    buyerId:{
        type:String,
        required:true
    },
    isCompleted:{
        type:Boolean,
        default:false
    },
    payment_intent:{
        type:String,
        required:true
    }
},{
    timestamps:true
})

module.exports = mongoose.model('orderModel',orderschema)