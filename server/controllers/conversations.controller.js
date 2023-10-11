const conversationModel = require("../models/conversation.model");
const createError = require("../utils/createError");

exports.createconversations = async (req,res,next) =>{
    const newConversation = new conversationModel({
        id: req.user.isSeller ? req.user.id + req.body.to : req.body.to + req.user.id,
        sellerId: req.user.isSeller ? req.user.id : req.body.to,
        buyerId: req.user.isSeller ? req.body.to : req.user.id,
        readBYSeller : req.user.isSeller,
        readBYBuyer : !req.user.isSeller
    })
    try{
        const conversation = await newConversation.save();
        res.status(200).json(conversation)
    }catch(err){
        next(err)
    }
}

exports.updateConversation = async (req,res,next) =>{
    try{
        const conversation = await conversationModel.findOneAndUpdate({id:req.params.id},{
            $set : {...(req.user.isSeller ? {readBYSeller: true} : {readBYBuyer: true})}
        },
        {
            new : true
        })
        res.status(200).json(conversation)    }catch(err){
        next(err)
    }
}

exports.getAllConversation = async (req,res,next) =>{
    try{
        const conversations = await conversationModel.find(req.user.isSeller ? {sellerId : req.user.id} : {buyerId : req.user.id}).sort({updatedAt : -1})

        res.status(200).json(conversations);
    }catch(err){
        next(err)
    }
}

exports.getAConverStaion = async (req,res,next) =>{
    try{
        const conversation = await conversationModel.findOne({
            id:req.params.id
        })
        if(!conversation) return next(createError(404, "conversation not found !"))
        res.status(200).json(conversation)
    }catch(err){
        next(err)
    }
}