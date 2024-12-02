const express=require('express');
const cors =require('cors');
const mongoose=require('mongoose');
const cookieParser=require('cookie-parser');
require('dotenv').config();


const app=express();
const PORT=process.env.PORT;

require('./db/connection')

app.use(cors());
app.use(cookieParser);
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get("/",(req,res)=>{
    res.send({"message":"welcome"})
})

app.listen(PORT,()=>{
    console.log(`server run on the port ${PORT}`);
    
})