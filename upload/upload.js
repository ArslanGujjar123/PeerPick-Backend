const express = require('express');
const multer = require('multer');
const router = express.Router();
const protectRoute = require('../middleware/auth');
const path = require('path');
const fs = require('fs');


const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, 'Images/');  // Save in the 'Images' directory
  },
  filename(req, file, cb) {
    cb(
      null,
      `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`  // Save the file with a unique name
    );
  },
});

// File type check
const checkFileType = (file, cb) => {
  const filetypes = /jpg|jpeg|png/;
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = filetypes.test(file.mimetype);

  if (extname && mimetype) {
    return cb(null, true);
  } else {
    cb(new Error('Images only!'));
  }
};

// Initialize upload
const upload = multer({
  storage,
  fileFilter: function (req, file, cb) {
    checkFileType(file, cb);
  },
});

router.post('/upload', protectRoute(['admin']), upload.single('image'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: 'No file uploaded' });
  }
  res.json({
    fileName: req.file.filename,  // This returns only the image name with extension
  });
});



router.delete('/delete/image/:imageName', protectRoute(['admin']), (req, res) => {
  const imageName = req.params.imageName;
  const imagePath = path.join(__dirname, '..', 'Images', imageName);
console.log(imagePath);
  // Check if the image exists
  fs.access(imagePath, fs.constants.F_OK, (err) => {
      if (err) {
          return res.status(403).json({ message: 'Image not found' });
      }

      // Delete the image
      fs.unlink(imagePath, (err) => {
          if (err) {
              return res.status(500).json({ message: 'Error deleting image' });
          }
          res.status(200).json({ message: 'Image deleted successfully' });
      });
  });
});


module.exports = router;
