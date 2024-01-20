const express = require('express')
const mongoose = require('mongoose')
const app = express()
const Booksdata = require('./model/Books')
const router = require('./Routes/authroutes')
const dotenv = require('dotenv').config()


//Middleware 
app.use(express.json());
app.use('/api',router);


//environment variable 

const port = process.env.PORT;
const dburl = process.env.DBURL;


// mongoose connections

mongoose.connect(dburl).then(()=>{
    console.log("Mongoose connected Succesfully!!");
}).catch((err)=>{
    console.log("Have some eror in connecting mongoose ");
})


//server 
app.listen(port,(req,res)=>{
    console.log(`Server listen at port ${port}`);
})
