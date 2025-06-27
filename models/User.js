const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true, required: true },
  username: { type: String, unique: true, required: true },
  mobilenumber: Number,
  role: { type: String, default: 'User' },

  // OTP fields
  otp: String,
  otpExpires: Date,
});

module.exports = mongoose.model('User', userSchema);
