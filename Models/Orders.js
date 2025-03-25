const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const OrderSchema = new Schema({
  customerid:{
    type: mongoose.Schema.Types.ObjectId,  
    ref: 'User',
    required: true
  },
  customerName: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  totalPrice: {
    type: Number,
    required: true,
  },
  status:{
    type: String,
    required: true,
  },
  orderDate: {
    type: Date,
    default: Date.now, 
  },
  orderTime: {
    type: String,
    default: () => new Date().toLocaleTimeString(),
  },
  details: [
    {
      productId: {
        type: mongoose.Schema.Types.ObjectId,  
        ref: 'Product',  
        required: true,
      },
      productName: {
        type: String,
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
    },
  ],
});

const Order= mongoose.model('Order', OrderSchema);
module.exports= Order;
