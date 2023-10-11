const mongoose = require("mongoose");

const conversationSchema = new mongoose.Schema({
    id:{
        type:String,
        required:true,
        unique:true
    },
    sellerId:{
        type:String,
        required:true
    },
    buyerId:{
        type:String,
        required:true
    },
    readBYSeller:{
        type:Boolean,
        required:true
    },
    readBYBuyer:{
        type:Boolean,
        required:true
    },
    lastMessage:{
        type:String,
        required:false
    }
},{
    timestamps: true
})

module.exports = mongoose.model("coversationModel", conversationSchema)