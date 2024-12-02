const mongoose = require('mongoose');

const teacherSchema = mongoose.Schema({
    email:{type:String,required:true},
    name:{type:String,required:true},
    age:{type:String,required:true},
    gender:{type:String,required:true},
    qualification:{type:String,required:true},
    teacher_image:{type:String,required:true},
    password:{type:String,required:true},
    createdAt:{type:Date,default:new Date()}


})

module.exports=mongoose.model("teacher",teacherSchema)