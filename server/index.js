const express = require("express")
const dotenv = require("dotenv").config()
const cors = require("cors");
const { Connection } = require("./db/connection");
const authRoute = require("./routes/auth.route")

const app = express();

app.use(cors())
app.use(express.json())

app.use((error,req,res,next)=>{
    const errorStatus  = error.status || 500;
    const errorMessage = error.message || "internal server error !"

    return res.status(errorStatus).send(errorMessage)
})

app.use('/api/v1/auth',authRoute)

const PORT = 9000 || process.env.PORT

app.listen(PORT,()=>{
    Connection()
    console.log(`server is running at the port ${PORT}`)
})