const mongoose = require('mongoose');

const reportSchema = new mongoose.Schema({
  
  reporter: {
    username: {
      type: String,
      required: true
    }
  },

  reportedUser: {
    username: {
      type: String,
      default: null
    }
  },

  description: {
    type: String,
    required: true,
    trim: true,
    maxlength: 1000
  },

  imageUrl: {
    type: String,
    validate: {
      validator: function(url) {
        return /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i.test(url);
      },
      message: props => `${props.value} is not a valid image URL!`
    }
  },

  category: {
    type: String,
    required: true,
    enum: [
      'harassment',
      'spam',
      'inappropriate-content',
      'fake-profile',
      'scam',
      'other'
    ],
    default: 'other'
  },
  
  status: {
    type: String,
    enum: ['pending', 'under-review', 'resolved', 'dismissed'],
    default: 'pending'
  },

  createdAt: {
    type: Date,
    default: Date.now
  },
 
});



module.exports = mongoose.model('Report', reportSchema);