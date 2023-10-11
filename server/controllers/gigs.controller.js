const gigModel = require("../models/gigs.model");
const createError = require("../utils/createError");

exports.createGig = async (req, res, next) => {
    if (!req.user.isSeller) return next(createError(403, "only sellers can create Gig !"))

    const newGig = new gigModel({ userId: req.user.id, ...req.body })

    try {
        const savedGig = await newGig.save();
        res.status(200).json(savedGig)

    } catch (err) {
        next(err)
    }
}

exports.getGig = async (req, res, next) => {
    try {
        const gig = await gigModel.findById(req.params.id)
        res.status(200).json(gig)
    } catch (err) {
        next(err)
    }
}

exports.deleteGig = async (req, res, next) => {
    if (req.user.isSeller) {
        const gig = await gigModel.findById(req.params.id);
        if (req.user.id !== gig.userId) return next(createError(403, "you can only delete only your account !"))
        try {
            await gigModel.findByIdAndDelete(req.params.id)
            res.status(200).json({ message: "gig has been deleted !" })
        } catch (err) {
            next(err)
        }
    } else {
        next(createError(403, "only sellers can delete gig"))
    }
}


exports.getAllGigs = async (req,res,next) =>{
    const q = req.query;
    const filters = {
        ...(q.userId && {userId: q.userId}),
        ...(q.cat && {cat: q.cat}),
        ...((q.min || q.max) && {price:{
            ...(q.min && {$gt : q.min}),
            ...(q.max && {$lt: q.max})
        }}),
        ...(q.search && {title: {$regex : q.search, $options: "i"}})
    }
    try{
        const gigs = await gigModel.find(filters).sort({[q.sort] : -1});
        res.status(200).json(gigs)
    }catch(err){
        next(err)
    }
}