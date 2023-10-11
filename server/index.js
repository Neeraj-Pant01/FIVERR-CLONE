const express = require("express")
const dotenv = require("dotenv").config()
const cors = require("cors");
const { Connection } = require("./db/connection");
const authRoute = require("./routes/auth.route")
const gigRoute = require("./routes/gigs.route")
const reviewRoute = require("./routes/review.route")
const orderRoute = require("./routes/orders.route");
const conversationRoute = require("./routes/conversation.route")
const messageRoute = require("./routes/messege.route")

const app = express();

app.use(cors())
app.use(express.json())

app.use((error,req,res,next)=>{
    const errorStatus  = error.status || 500;
    const errorMessage = error.message || "internal server error !"

    return res.status(errorStatus).send(errorMessage)
})

app.use('/api/v1/auth',authRoute)
app.use('/api/v1/gigs',gigRoute)
app.use('/api/v1/reviews',reviewRoute)
app.use('/api/v1/orders',orderRoute)
app.use('/api/v1/conversations',conversationRoute)
app.use('/api/v1/messeges',messageRoute)


const PORT = 9000 || process.env.PORT

app.listen(PORT,()=>{
    Connection()
    console.log(`server is running at the port ${PORT}`)
})