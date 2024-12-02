const mongoose = require('mongoose');

const counterSchema = new mongoose.Schema({
  subjectName: {
    type: String,
    required: true,
    unique: true,
  },
  seq: {
    type: Number,
    required: true,
    default: 100, // Start from 100
  },
});

const Counter = mongoose.model('counter', counterSchema);
module.exports = Counter;
