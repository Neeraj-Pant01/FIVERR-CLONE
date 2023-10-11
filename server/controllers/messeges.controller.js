const messageModel = require("../models/messeges.model")
const conversationModel = require("../models/conversation.model")

exports.createMessege = async (req,res,next) =>{
    const newMessage = new messageModel({
        conversationId:req.body.conversationId,
        userId:req.user.id,
        desc:req.body.desc
    })
    try{
        const message = await newMessage.save();
        await conversationModel.findOneAndUpdate({
            id:req.body.conversationId}, {
                $set : {
                    readBYSeller: req.user.isSeller,
                    readBYBuyer: !req.user.isSeller,
                    lastMessage: req.body.desc
                }
        },{
            new : true
        })
        res.status(200).json(message)
    }catch(err){
        next(err)
    }
}

exports.getMessage = async (req,res,next) =>{
    try{
        const messeges = await messageModel.find({
            conversationId: req.params.conversationId
        })
        res.status(200).json(messeges)
    }catch(err){
        next(err)
    }
}