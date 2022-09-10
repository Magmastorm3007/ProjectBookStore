import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from 'cors'

const app =express()
app.use(cors())
const url='mongodb+srv://user:aloo@cluster0.ybbgwrx.mongodb.net/?retryWrites=true&w=majority'
const port=process.env.PORT ||6000
mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology: true})
.then(()=>app.listen(port,()=>console.log("HEHE")))
.catch((err)=>console.log('error'))



