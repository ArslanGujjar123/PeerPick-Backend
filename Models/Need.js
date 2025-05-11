const mongoose = require('mongoose');

const needSchema = new mongoose.Schema({
  
  user: {
    username: {
      type: String,
      required: true
    }
  },

  title: {
    type: String,
    trim: true,
    required: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
    maxlength: 1000
  },
  category: {
    type: String,
    required: true,
    enum: [
      'Project',
      'Notes',
      'Assignment',
      'Study',
      'other'
    ]
  },
  
  status: {
    type: String,
    enum: ['open', 'assigned', 'closed'],
    default: 'open'
  },

  assignedTo: {
    username: {
      type: String,
      default: null
    }
  },
  createdAt: {
    type: Date,
    default: Date.now
  },

  imageUrls: [{
    type: String,
    validate: {
      validator: function(url) {
        
        return /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i.test(url);
      },
      message: props => `${props.value} is not a valid image URL!`
    }
  }],

});



module.exports = mongoose.model('Need', needSchema);