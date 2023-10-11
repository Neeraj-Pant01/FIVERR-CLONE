const gigsModel = require("../models/gigs.model")
const orderModel = require("../models/orders.models")
const Stripe = require('stripe')


exports.createIntent = async (req,res,next) =>{
    const stripe = new Stripe(`${process.env.STRIPE}`)

    const gig = await gigsModel.findById(req.params.gigId)

    const paymentIntent = await stripe.paymentIntents.create({
        amount:gig.price * 100,
        currency:"inr",
        automatic_payment_methods:{
            enabled:true
        }
    })

    const newOrder = new orderModel({
        gigId:gig._id,
        image:gig.cover,
        title:gig.title,
        buyerId:req.user.id,
        sellerId:gig.userId,
        price:gig.price,
        payment_intent:paymentIntent.id
    })

    await newOrder.save()

    res.status(200).send({
        clientSecret: paymentIntent.client_secret
    })
}

// exports.createOrder = async(req,res,next) =>{
//     try{
//         const gig = await gigsModel.findById(req.params.id)

//         const newOrder = new orderModel({
//             gigId:gig._id,
//             img:gig.cover,
//             title:gig.title,
//             buyerId:req.user.id,
//             sellerId:gig.userId,
//             price:gig.price,
//             payment_intent:"tisisicandducateIswantkey"
//         })
//         await newOrder.save()
//         res.status(200).json({message:"successfull !"})
//     }catch(err){
//         next(err)
//     }
// }

exports.getOrders = async (req,res,next) =>{
    try{
        const orders = await orderModel.find({
            ...(req.user.isSeller ? {sellerId:req.user.id }: {buyerId: req.user.id}),
            isCompleted: true
        })
        res.status(200).json(orders)
    }catch(err){
        next(err)
    }
}

exports.updateOrder = async (req,res,next) =>{
    try{
        const order = await orderModel.findOneAndUpdate({payment_intent: req.body.payment_intent},{
            $set : {isCompleted: true}
        })
        res.status(200).json({message:"order has been completed !"})
    }catch(err){
        next(err)
    }
}