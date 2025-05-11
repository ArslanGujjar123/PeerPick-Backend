const express = require('express');
const router = express.Router();
const protectRoute = require('../middleware/auth');
const Message = require('../Models/Message');  
const User = require('../Models/User');
const Need = require('../Models/Need');




router.get('/needs', async (req, res) => {
  
  try {
       const needs = await Need.find(); 
       if (!needs || needs.length === 0) {
      return res.status(404).json({ message: 'No one has posted need yet.' });
       }
       res.json({needs}); 
   } catch (error) {
       res.status(500).json({ message: error.message });
   }
});

router.get('/needs/:name', async (req, res) => {
  try {
    
    const needs = await Need.find({ "user.username": req.params.name });
   
    if (!needs || needs.length === 0) {
      return res.status(404).json({ message: 'You have no need yet.' });
    }

    res.json({ needs });
  } catch (error) {
    
    res.status(500).json({ message: error.message });
  }
});


router.get('/assigned/:name', async (req, res) => {
  try {
    
    const needs = await Need.find({ "assignedTo.username": req.params.name });
    
    if (!needs) {
      return res.status(404).json({ message: 'There is no need assigned to you yet.' });
    }

    res.json({needs});
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get('/messages/:needID', async (req, res) => {
  try {
    const { needID } = req.params;

    const messages = await Message.find({ needID })

    if (!messages || messages.length === 0) {
      return res.status(404).json({ msg: "No messages found for the provided needID." });
    }

    res.status(200).json(messages);
  } catch (error) {
    console.error("Error fetching messages:", error.message);
    res.status(500).json({ msg: "Server error" });
  }
});



// router.delete('/needs/:id', protectRoute(['user','admin']), async (req, res) => {
//   try {
//     await Need.findByIdAndDelete(req.params.id);
//     res.json({ message: 'User deleted' });
//   } catch (error) {
//     res.status(500).json({ message: 'Error deleting user' });
//   }
// });
router.delete('/needs/:id',  async (req, res) => {
  try {
    await Need.findByIdAndDelete(req.params.id);
    res.json({ message: 'User deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting user' });
  }
});


router.get('/messages/:userId1/:userId2', async (req, res) => {
  try {
    const messages = await Message.find({
      $or: [
        { sender: req.params.userId1, receiver: req.params.userId2 },
        { sender: req.params.userId2, receiver: req.params.userId1 }
      ]
    }).sort('timestamp');
    res.json(messages);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;