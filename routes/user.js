const express = require('express');
const router = express.Router();
const protectRoute = require('../middleware/auth');
const Need= require('../Models/Need');


router.post('/needs/:name', async (req, res) => {
  try {
    const { 
      title, 
      description, 
      category, 
      status, 
      assignedTo, 
      imageUrls 
    } = req.body;

    // if (!user?.username || !title || !description || !category) {
    //   return res.status(400).json({ msg: 'Please include all required fields: user (with username), title, description, and category.' });
    // }

    // const validCategories = ['Project', 'Notes', 'Assignment', 'Study', 'other'];
    // if (!validCategories.includes(category)) {
    //   return res.status(400).json({ msg: `Invalid category. Must be one of: ${validCategories.join(', ')}` });
    // }

    // const validStatuses = ['open', 'assigned', 'closed'];
    // if (status && !validStatuses.includes(status)) {
    //   return res.status(400).json({ msg: `Invalid status. Must be one of: ${validStatuses.join(', ')}` });
    // }

    if (imageUrls && !imageUrls.every(url => /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i.test(url))) {
      return res.status(400).json({ msg: 'One or more image URLs are invalid.' });
    }

    const newNeed = new Need({
      user: {
        username: req.params.name
      },
      title,
      description,
      category,
      status: status || 'open',
      assignedTo: assignedTo || null,
      imageUrls: imageUrls || []
    });

    const savedNeed = await newNeed.save();

    res.status(201).json(savedNeed);

  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: 'Server error' });
  }
});
router.put('/needs/:id', async (req, res) => {
  try {
    const {
      title,
      description,
      category,
      status,
      assignedTo,
      imageUrls,
    } = req.body; 

    const updatedNeed = await Need.findByIdAndUpdate(
      req.params.id, 
      {
        $set: {
          title,
          description,
          category,
          status,
          assignedTo,
          imageUrls,
        },
      },
      { new: true, runValidators: true } 
    );

   
    if (!updatedNeed) {
      return res.status(404).json({ msg: "Need not found" });
    }

    res.status(200).json(updatedNeed);
  } catch (error) {
    console.error("Error updating the need:", error.message);
    res.status(500).json({ msg: "Server error" });
  }
});
module.exports = router;
