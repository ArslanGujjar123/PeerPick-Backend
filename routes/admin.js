const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const protectRoute = require('../middleware/auth');
const Message = require('../Models/Message');  
const User = require('../Models/User');
const Need = require('../Models/Need');
const Report = require('../Models/Report')



// router.post('/productsave',  protectRoute(['admin']),async (req, res) => {
//   const { productName, price, image, brand, category, stock, description } = req.body;
 
//   try {
//     const newProduct = new Product({
//       productName,
//       img:image, 
//       price, 
//       category,
//       brand,
//       stock,
//       description,
//     });
//     // console.log(newProduct);
//     const createdProduct = await newProduct.save();
//     res.status(201).json(createdProduct);
//   } catch (error) {
//     res.status(500).json({ message: 'Product creation failed' });
//   }
// });



router.delete('/needs/:id',  async (req, res) => {
  try {
    await Need.findByIdAndDelete(req.params.id);
    res.json({ message: 'Need deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting user' });
  }
});


router.delete('/users/:id', async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.json({ message: 'User deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting user' });
  }
});




router.get('/users/:id', async (req, res) => {
  try {
    const user=await User.findById(req.params.id);
    // const data={
    //   name,
    //   email
    // }
    if (user) {
      res.json(user); 
  } else {
      res.status(404).json({ message: 'User not found' }); 
  }
  } catch (error) {
    res.status(500).json({ message: 'Error Finding user' });
  }
});

router.put('/users/:id/:blockStatus', async (req, res) => {
  try {
    const userId = req.params.id; 
    const isBlocked = req.params.blockStatus === "true"; 

    
    const updatedUser = await User.findByIdAndUpdate(userId, { isBlocked }, { new: true });

    if (updatedUser) {
      res.json({ message: `User ${isBlocked ? "blocked" : "unblocked"} successfully`, user: updatedUser }); 
    } else {
      res.status(404).json({ message: 'User not found' }); 
    }
  } catch (error) {
    res.status(500).json({ message: 'Error updating user block status', error: error.message });
  }
});



// router.put('/users/:id', protectRoute(['admin']), async (req, res) => {
//   try {
//     const userid = req.params.id; 
//     const updatedData = req.body; 
//     const salt = await bcrypt.genSalt(10);
//     updatedData.password = await bcrypt.hash(updatedData.password, salt);
//     const data=await User.findByIdAndUpdate(userid, updatedData, { new: true });
//     if (data) {
//       res.json(data); 
//   } else {
//       res.status(404).json({ message: 'User not found' }); 
//   }
//   } catch (error) {
//     res.status(500).json({ message: 'Error deleting user' });
//   }
// });




router.get('/users', async (req, res) => {
  try {
      const users = await User.find(); 
      res.json(users); 
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
});




router.get('/reports', async (req, res) => {
  try {
      const reports = await Report.find(); 
      res.json(reports); 
  } catch (error) {
      res.status(500).json({ message: "Error Finding Report" });
  }
});


// router.put('/products/:id', protectRoute(['admin']), async (req, res) => {
//   try {
//       const productId = req.params.id; 
//       const updatedData = req.body; 

      
//       const product = await Product.findByIdAndUpdate(productId, updatedData, { new: true });

//       if (product) {
//           res.json(product); 
//       } else {
//           res.status(404).json({ message: 'Product not found' }); 
//       }
//   } catch (error) {
//       res.status(500).json({ message: error.message }); 
//   }
// });


// router.put('/orders/status/:id', protectRoute(['admin']), async (req, res) => {
//   const orderid = req.params.id; 
//   const {status}=req.body;
//   try {
//     const updatedOrder = await Order.findByIdAndUpdate(
//       orderid, 
//       { status: status }
//     );
    
//     if (updatedOrder) {
//       res.status(200).json({ message: 'Order Updated Successfully' });
//     } else {
//       res.status(404).json({ message: 'Order not found' }); // Correct message for not finding the order
//     }
//   } catch (error) {
//     res.status(500).json({ message: 'Error deleting user' });
//   }
// });

module.exports = router;
