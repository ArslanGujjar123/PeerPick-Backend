const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true
  },
  socketId: {
    type: String,
    default: null
  },

  isBlocked: {
    type: Boolean,
    default: false,
    required: true
  },

  role: {
    type: String,
    enum: ['user', 'admin'], 
    default: 'user',
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },

});

module.exports = mongoose.model('User', userSchema);