const mongoose = require("mongoose")

exports.Connection = async () =>{
    try{
        await mongoose.connect(`${process.env.DB_URI}`,{
            useNewUrlParser:true, useUnifiedTopology:true
        })
        console.log("database is connected sucessfully !")
    }catch(err){
        console.log(err)
    }
}