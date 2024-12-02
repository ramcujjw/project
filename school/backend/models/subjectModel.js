const mongoose = require('mongoose');

const subjectSchema = new mongoose.Schema({
  subjectName: {
    type: String,
    required: true,
  },
  subjectCode: {
    type: String,
    unique: true,
  },
  createdAt: {
    type: Date,
    default: new Date(), // Corrected "Date" object
  },
});

module.exports = mongoose.model('subject', subjectSchema);
