const mongoose = require('mongoose');

const scheduleSchema = new mongoose.Schema({
  subjectName: {type:mongoose.Schema.ObjectId, ref:"subject"},
  teacher: {type:mongoose.Schema.ObjectId, ref:"teacher"},
  class:{type:mongoose.Schema.ObjectId, ref:"class"},
  startTime:{type:Date,required:true},  
  endTime:{type:Date,required:true},

  createdAt: {type: Date,default: new Date(), },
});

module.exports = mongoose.model('schedule', scheduleSchema);
