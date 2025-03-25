const express = require('express');
const router = express.Router();
const protectRoute = require('../middleware/auth');
const Order= require('../Models/Orders');


router.post('/orders',protectRoute(['user']), async (req, res) => {
  try {
      const { customerid, customerName, address, phoneNumber, totalPrice,status, details } = req.body;
     
      // Validate required fields
      if (!customerid || !customerName || !address || !phoneNumber || !totalPrice || !details || details.length === 0) {
        return res.status(400).json({ msg: 'Please include all required fields' });
      }
  
      const newOrder = new Order({
        customerid,
        customerName,
        address,
        phoneNumber,
        totalPrice,
        status,
        details
      });
     
      // Save the order to the database
      const savedOrder = await newOrder.save();
  
      // Send a response with the saved order
      res.status(201).json(savedOrder);
    } catch (err) {
      console.error(err.message);
      res.status(500).json({ msg: 'Server error' });
    }
});
router.get('/orders/:id', protectRoute(['user']),async (req, res) => {
  try {
     
      const orders = await Order.find({ customerid: req.params.id }); 
      res.json(orders); 
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
});
module.exports = router;
