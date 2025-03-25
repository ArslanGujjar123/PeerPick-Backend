const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the User Schema
const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    default: 'user',  // Default role is 'user'
    enum: ['user', 'admin', 'owner'],  // Restrict to specific roles
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
