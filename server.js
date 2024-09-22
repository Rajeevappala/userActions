const express = require('express');
const mongoose = require("mongoose");
const app = express();
const dotenv = require("dotenv");
dotenv.config(); 

const cors = require("cors");
app.use(cors());

const userRouter = require('./routes/userRoutes')
app.use(express.json())



mongoose.connect(process.env.URI).then(
    ()=> {
        console.log("connected Successfully")
        app.listen(process.env.PORT || 3000 , (err) => {
            if (err) console.log(err);
            console.log("running successfullt at ", process.env.PORT)
        }) 
    }
).catch((error) => {
    console.log("error" , error)
}); 


app.use(userRouter)