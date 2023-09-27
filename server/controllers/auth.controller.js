const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken")
const userModel = require("../models/user.model");
const createError = require("../utils/createError");


exports.register = async (req, res, next) => {
    try {
        const user = await userModel.findOne({ email: req.body.email })

        if (user) return next(createError(403, "user already exists !"))

        let ciphertext = CryptoJS.AES.encrypt(req.body.password, process.env.ENC_KEY).toString();

        const newUser = new userModel({...req.body,password: ciphertext })
        const savedUSer = await newUser.save();

        res.status(200).json(savedUSer)
    } catch (err) {
        next(err)
    }
}


exports.login = async (req, res, next) => {
    try {
        const user = await userModel.findOne({ email: req.body.email })

        if (!user) return next(createError(403, "user not exists !"))

        const decPass = CryptoJS.AES.decrypt(user.password, process.env.ENC_KEY);
        const originalPass = decPass.toString(CryptoJS.enc.Utf8);

        if(originalPass !== req.body.password) return next(createError(403,"wrong credentials"))

        const accesstoken = jwt.sign({id:user._id,isSeller:user.isSeller},process.env.JWT_KEY,{expiresIn:"1d"})

        const {password, ...others} = user._doc;

        res.status(200).json({...others,accesstoken})
    } catch (err) {
        next(err)
    }                                                                                                                                
}


exports.updateUser = async (req,res,next) =>{
    if(req.user.id === req.params.id){
        if(req.body.password){
            req.body.password = CryptoJS.AES.encrypt(req.body.password, process.env.ENC_KEY).toString();
            try{
                const updatedUser = await userModel.findByIdAndUpdate(req.params.id,{
                    $set : req.body
                },{
                    new: true
                });
                res.status(200).json(updatedUser)
            }catch(err){
                next(err)
            }
        }
    }else{
        next(createError(404,"you can update only your account !"))
    }
}