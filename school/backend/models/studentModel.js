const mongoose = require('mongoose');

const studentSchema = mongoose.Schema({
    email:{type:String,required:true},
    name:{type:String,required:true},
    studentclass:{type:String,required:true},
    age:{type:String,required:true},
    gender:{type:String,required:true},
    guardian:{type:String,required:true},
    phoneNo:{type:Number,required:true},
    student_image:{type:String,required:true},
    password:{type:String,required:true},
    
    createdAt:{type:Date,default:new Date()}


})

module.exports=mongoose.model("student",studentSchema)