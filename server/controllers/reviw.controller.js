const gigsModel = require("../models/gigs.model");
const reviewModel = require("../models/review.model");
const createError = require("../utils/createError");


exports.createReview = async(req,res,next)=>{
    if(req.user.isSeller) return next(createError(403,"sellers can't create review !"))

    const newReview = new reviewModel({
        gigId:req.body.gigId,
        userId:req.user.id,
        star: req.body.star,
        desc:req.body.desc
    })

    try{
        const review = await reviewModel.findOne({gigId:req.body.gigId, userId:req.user.id});

        if(review){
            return next(createError(404,"already craeated !"))
        }

        const savedReview = await newReview.save();
        await gigsModel.findByIdAndUpdate(req.body.gigId,{
            $inc: {totalStars: req.body.star, starNumber: 1}
        })
        res.status(200).json(savedReview)
    }catch(err){
        next(err)
    }
}

exports.getReview = async (req,res,next)=>{
    try{
        const review = await reviewModel.find({gigId:req.params.gigId})

        res.status(200).json(review)
    }catch(err){
        next(err)
    }
}

exports.deleteReview = async (req, res, next) =>{
    try{
        const review = await reviewModel.findById(req.params.id)

        const gig = await gigsModel.findById(review.gigId)

        if(review.userId === req.user.id || gig.userId === req.user.id){
            await reviewModel.findByIdAndDelete(req.params.id)
            res.status(200).json({message:"review has been deleted !"})
        }else{
            return next(createError(403,"you are not allowed to take this action !"))
        }
    }catch(err){
        next(err)
    }
}