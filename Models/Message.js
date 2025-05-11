const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  needID: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Need', 
    required: true 
  },
  sender: {
    username: {
      type: String,
      required: true
    }
  },
  receiver: {
    username: {
      type: String,
      required: true
    }
  },
  content: {
    type: String,
    required: true,
    trim: true
  },
  timestamp: {
    type: Date,
    default: Date.now
  },
  read: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model('Message', messageSchema);
