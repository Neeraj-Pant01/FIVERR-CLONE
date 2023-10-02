const mongoose = require("mongoose");

const gigSchema = new mongoose.Schema({
    userId:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    desc:{
        type:String,
        required:true,
    },
    totalStars:{
        type:Number,
        default:0
    },
    starNumber:{
        type:Number,
        default:0
    },
    cat:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    cover:{
        type:String,
        required:true
    },
    images:{
        type:[String],
        required: false
    },
    shortDesc:{
        type:String,
        required: true
    },
    deliveryTime:{
        type:Number,
        required: true
    },
    revisionNumber:{
        type:Number,
        required: true
    },
    features:{
        type:[String],
        required: true
    },
    sales:{
        type:Number,
        default:0
    }
},{
    timestamps: true
})


module.exports = mongoose.model('gigs',gigSchema)