const mongoose = require('mongoose');

// Attendance Schema
const attendanceSchema = new mongoose.Schema({
  schedule: {
    type: mongoose.Schema.ObjectId,
    ref: 'schedule',
    required: true,
  },
  student: {
    type: mongoose.Schema.ObjectId,
    ref: 'student',
    required: true,
  },
  status: {
    type: String,
    enum: ['Present', 'Absent'],
    default: 'Present',
  },
  markedAt: {
    type: Date,
    default: Date.now,
  },
  qrCode: {
    type: String,
    required: true,
  },
});

// **Prevent Duplicate Entries for the Same Student and Schedule**
attendanceSchema.index({ schedule: 1, student: 1 }, { unique: true });

// **QR Code Validation Middleware**
attendanceSchema.pre('save', async function (next) {
  try {
    // Check if the QR code matches the current schedule's QR code
    const schedule = await mongoose.model('schedule').findById(this.schedule);

    if (!schedule) {
      throw new Error('Invalid schedule reference.');
    }

    const validQrCode = `${schedule._id}-${schedule.startTime.getTime()}`; // Example QR format: scheduleId-startTime

    if (this.qrCode !== validQrCode) {
      throw new Error('Invalid QR Code.');
    }
    
    next();
  } catch (error) {
    next(error);
  }
});

module.exports = mongoose.model('Attendance', attendanceSchema);
