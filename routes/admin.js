const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const protectRoute = require('../middleware/auth');
const Product = require('../Models/Products');  
const User = require('../Models/Users');
const Order = require('../Models/Orders');



router.post('/productsave',  protectRoute(['admin']),async (req, res) => {
  const { productName, price, image, brand, category, stock, description } = req.body;
 
  try {
    const newProduct = new Product({
      productName,
      img:image, 
      price, 
      category,
      brand,
      stock,
      description,
    });
    // console.log(newProduct);
    const createdProduct = await newProduct.save();
    res.status(201).json(createdProduct);
  } catch (error) {
    res.status(500).json({ message: 'Product creation failed' });
  }
});



router.delete('/products/:id', protectRoute(['admin']), async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.json({ message: 'User deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting user' });
  }
});


router.delete('/users/:id', protectRoute(['admin']), async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.json({ message: 'User deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting user' });
  }
});




router.get('/users/:id', protectRoute(['admin']), async (req, res) => {
  try {
    const {name,email}=await User.findById(req.params.id);
    const data={
      name,
      email
    }
    if (data) {
      res.json(data); 
  } else {
      res.status(404).json({ message: 'User not found' }); 
  }
  } catch (error) {
    res.status(500).json({ message: 'Error deleting user' });
  }
});



router.put('/users/:id', protectRoute(['admin']), async (req, res) => {
  try {
    const userid = req.params.id; 
    const updatedData = req.body; 
    const salt = await bcrypt.genSalt(10);
    updatedData.password = await bcrypt.hash(updatedData.password, salt);
    const data=await User.findByIdAndUpdate(userid, updatedData, { new: true });
    if (data) {
      res.json(data); 
  } else {
      res.status(404).json({ message: 'User not found' }); 
  }
  } catch (error) {
    res.status(500).json({ message: 'Error deleting user' });
  }
});




router.get('/users', protectRoute(['admin']), async (req, res) => {
  try {
      const users = await User.find(); 
      res.json(users); 
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
});




router.get('/orders',  protectRoute(['admin']),async (req, res) => {
  try {
      const orders = await Order.find(); 
      res.json(orders); 
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
});


router.put('/products/:id', protectRoute(['admin']), async (req, res) => {
  try {
      const productId = req.params.id; 
      const updatedData = req.body; 

      
      const product = await Product.findByIdAndUpdate(productId, updatedData, { new: true });

      if (product) {
          res.json(product); 
      } else {
          res.status(404).json({ message: 'Product not found' }); 
      }
  } catch (error) {
      res.status(500).json({ message: error.message }); // Handle any errors
  }
});


router.put('/orders/status/:id', protectRoute(['admin']), async (req, res) => {
  const orderid = req.params.id; 
  const {status}=req.body;
  try {
    const updatedOrder = await Order.findByIdAndUpdate(
      orderid, 
      { status: status }
    );
    
    if (updatedOrder) {
      res.status(200).json({ message: 'Order Updated Successfully' });
    } else {
      res.status(404).json({ message: 'Order not found' }); // Correct message for not finding the order
    }
  } catch (error) {
    res.status(500).json({ message: 'Error deleting user' });
  }
});

module.exports = router;
