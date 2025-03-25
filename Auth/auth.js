const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../Models/Users');
const router = express.Router();

const key = process.env.SECRET_KEY;

// Register Route
router.post('/register', async (req, res) => {
    const { name, email, password } = req.body;
  

    try {
        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ success: false, message: 'Email already exists' });
        }

        // Create a new user
        const newUser = new User({
            name,
            email,
            password
        });

        // Hash password before saving in database
        const salt = await bcrypt.genSalt(10);
        newUser.password = await bcrypt.hash(password, salt);

        // Save the new user to the database
        const savedUser = await newUser.save();

        // Create JWT Payload
        const payload = {
            id: savedUser._id,
            name: savedUser.name,
            role: 'user',
        };

        // Sign token and send it back
        const token = jwt.sign(payload, key, { expiresIn: '2h' }); // Token expires in 1 hour

        return res.json({
            success: true,
            token: 'Bearer ' + token
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: 'Server error' });
    }
});


// Login Route
router.post('/login', (req, res) => {
    const { email, password } = req.body;
  
    // Find user by email
    User.findOne({ email }).then(user => {
      if (!user) {
        return res.status(404).json({ email: 'User not found' });
      }
  
      // Check password
      bcrypt.compare(password, user.password).then(isMatch => {
        if (isMatch) {
          // User matched, create JWT Payload with role
          const payload = {
            id: user._id,
            name: user.name,
            role: user.role,  // Include the user's role
          };
  
          // Sign token
          jwt.sign(
            payload,
            key,
            { expiresIn: '2h' },  // 1 hour expiration
            (err, token) => {
              res.json({
                success: true,
                token: 'Bearer ' + token,  // Return the token to the client
              });
            }
          );
        } else {
          return res.status(400).json({ password: 'Password incorrect' });
        }
      });
    });
  });


module.exports = router;
