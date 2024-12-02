const mongoose = require('mongoose');

const classSchema = mongoose.Schema({
    class_text:{type:String,required:true},
    class_num:{type:Number,required:true},
    attendee:{type:mongoose.Schema.ObjectId, ref:"Teacher"},
    createdAt:{type:Date,default:new Date()}


})

module.exports=mongoose.model("class",classSchema)