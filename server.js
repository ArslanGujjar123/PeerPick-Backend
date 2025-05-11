// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const User= require('./Models/User');
// const Message= require('./Models/Message');
// const http = require('http');
// const socketHandler = require('./Socket/socket');
// const Need= require('./Models/Need');
// const Report= require('./Models/Report');
// const dotenv = require('dotenv');
// dotenv.config();
// const { usersData, messagesData ,needsData, reportsData} = require('./data');
// const passport = require('passport');
// const users = require('./Auth/auth');
// //  const user = require('./routes/user');
// const admin = require('./routes/admin');
// const hybrid = require('./routes/hybrid')
// // const Owner =require('./routes/Business');
// // const upload=require('./upload/upload');
// // const path = require('path');

// // Serve the uploads folder statically


// const app = express();
// const server = http.createServer(app);
// app.use(cors({
//     origin: 'http://localhost:5173' 
//   }));
 
// app.use(express.json()); // for parsing application/json
// app.use(express.urlencoded({ extended: true }));  // Parse incoming JSON data

// app.use(passport.initialize());
// socketHandler(server);
// // Passport config
// require('./Passport/passport')(passport);


// mongoose.connect(process.env.MONGO_URL)
// .then(() => console.log('Connected to MongoDB'))
// .catch(err => console.error(err));
// // Routes
// app.use('/auth', users);
// //  app.use('/user', user);
// app.use('/admin', admin);
// app.use('/hybrid', hybrid);
// // app.use('/owner', Owner);




// const PORT = process.env.PORT || 5000;
// server.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });


// // try {
// //     const result =  Message.insertMany(messagesData);
// //     if (result) {
// //         console.log('Record successfully Inserted:');
// //     } else {
// //         console.log('No record found with that _id');
// //     }
// // } catch (error) {
// //     console.error('Error deleting record:', error);
// // }
// // try {
// //     const result =  User.insertMany(usersData);
// //     if (result) {
// //         console.log('Record successfully Inserted:');
// //     } else {
// //         console.log('No record found with that _id');
// //     }
// // } catch (error) {
// //     console.error('Error deleting record:', error);
// // }
// // try {
// //     const result =  Report.insertMany(reportsData);
// //     if (result) {
// //         console.log('Record successfully Inserted:');
// //     } else {
// //         console.log('No record found with that _id');
// //     }
// // } catch (error) {
// //     console.error('Error deleting record:', error);
// // }


// // Start the server
// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const http = require('http'); // Required for socket integration
// const passport = require('passport');
// const socketIo = require('socket.io');
// const dotenv = require('dotenv');
// dotenv.config();
// const jwt = require("jsonwebtoken");
// const { usersData, messagesData ,needsData, reportsData} = require('./data');

// const User = require('./Models/User');
// const Message = require('./Models/Message');
// const Need = require('./Models/Need');
// const Report = require('./Models/Report');
// const users = require('./Auth/auth');
// const user = require('./routes/user');
// const admin = require('./routes/admin');
// const hybrid = require('./routes/hybrid');
// const session = require("express-session");

// const app = express();


// const server = http.createServer(app); // Creating an HTTP server

// // CORS Configuration
// app.use(cors({
//   origin: 'http://localhost:5173', 
//   credentials: true
// }));

// // Middleware
// app.use(express.json()); // For parsing JSON
// app.use(express.urlencoded({ extended: true })); 
// app.use(passport.initialize());
// app.use(session({ secret: process.env.SECRET_KEY, resave: false, saveUninitialized: true }));
// app.use(passport.session());

// require('./Passport/passport')(passport);

// // MongoDB Connection
// mongoose.connect(process.env.MONGO_URL)
//   .then(() => console.log('Connected to MongoDB'))
//   .catch(err => console.error(err));

// // Routes
// app.use('/auth', users);
// app.use('/user', user);
// app.use('/admin', admin);
// app.use('/hybrid', hybrid);

// // Initialize Socket.IO
// const io = socketIo(server, {
//   cors: {
//     origin: 'http://localhost:5173',
//     credentials: true,
//     methods: ['GET', 'POST']
//   }
// });

// app.get("/auth/google", passport.authenticate("google", { scope: ["profile", "email"] }));

// app.get("/auth/google/peerpick", passport.authenticate("google", { failureRedirect: "/unauthorized" }), (req, res) => {
  
//    const email = req.user.email;
  
//   if (!email.endsWith("@umt.edu.pk")) {
//     return res.status(403).json({ message: "You are not authorized to sign in." });
//   }
//    async function fetchEmail() {
//     try {
//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//       res.redirect("http://localhost:5173/login?message=You are already registered, please login");
//     }
//   } catch (error) {
//     console.error("Error checking user email:", error);
//   }
// }

// fetchEmail(); 
//   const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: "1h" });

//   res.redirect(`http://localhost:5173/register?token=${token}`);
// });

// app.get("/unauthorized", (req, res) => {
//   res.redirect("http://localhost:5173//login");
// });

// // try {
// //     const result =  Need.insertMany(needsData);
// //     if (result) {
// //         console.log('Record successfully Inserted:');
// //     } else {
// //         console.log('No record found with that _id');
// //     }
// // } catch (error) {
// //     console.error('Error deleting record:', error);
// // }
// // async function fetchRecords() {
// //   try {
// //       const result = await Message.insertMany(messagesData);
      
// //           console.log('Records successfully retrieved:', result);
      
// //   } catch (error) {
// //       console.error('Error retrieving records:', error);
// //   }
// // }

// // fetchRecords(); // Call the function


// // try {
// //     const result =  User.insertMany(usersData);
// //     if (result) {
// //         console.log('Record successfully Inserted:');
// //     } else {
// //         console.log('No record found with that _id');
// //     }
// // } catch (error) {
// //     console.error('Error deleting record:', error);
// // }
// // try {
// //     const result =  Report.insertMany(reportsData);
// //     if (result) {
// //         console.log('Record successfully Inserted:');
// //     } else {
// //         console.log('No record found with that _id');
// //     }
// // } catch (error) {
// //     console.error('Error deleting record:', error);
// // }


// // Socket.IO Event Handling
// io.on("connection", (socket) => {
//   console.log(`New client connected: ${socket.id}`);

//   // Authenticate user and update socket ID
//   socket.on("authenticate", async (username) => {
//     try {
//       await User.findOneAndUpdate({ username }, { socketId: socket.id });
//       console.log(`User ${username} authenticated with socket ${socket.id}`);
//     } catch (err) {
//       console.error("Authentication error:", err);
//     }
//   });

//   // Handle sending messages
//   socket.on("sendMessage", async ({ needID, sender, receiver, content, timestamp }) => {
//     try {
//       const message = new Message({
//         needID,
//         sender,
//         receiver,
//         content,
//         timestamp,
//         read: false,
//       });

//       await message.save();

//       // Find receiver to send live notification
//       const receiverUser = await User.findOne({ username: receiver.username });
//       if (receiverUser?.socketId) {
//         io.to(receiverUser.socketId).emit("receiveMessage", message);
//       }

//       // Acknowledge message sent
//       socket.emit("messageSent", message);
//     } catch (err) {
//       console.error("Error sending message:", err);
//       socket.emit("messageError", { error: "Failed to send message" });
//     }
//   });

//   // Handle disconnect
//   socket.on("disconnect", () => {
//     console.log(`Client disconnected: ${socket.id}`);
//   });
// });

// const PORT = process.env.PORT || 5000;
// server.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http'); // Required for socket integration
const passport = require('passport');
const socketIo = require('socket.io');
const dotenv = require('dotenv');
const session = require("express-session");
const jwt = require("jsonwebtoken");

dotenv.config();

const { usersData, messagesData ,needsData, reportsData } = require('./data');
const User = require('./Models/User');
const Message = require('./Models/Message');
const Need = require('./Models/Need');
const Report = require('./Models/Report');
const users = require('./Auth/auth');
const user = require('./routes/user');
const admin = require('./routes/admin');
const hybrid = require('./routes/hybrid');

const GoogleStrategy = require("passport-google-oauth20").Strategy;

const app = express();
const server = http.createServer(app); // Creating an HTTP server

// CORS Configuration
app.use(cors({
  origin: 'http://localhost:5173', 
  credentials: true
}));

// Middleware
app.use(express.json()); // For parsing JSON
app.use(express.urlencoded({ extended: true })); 
app.use(passport.initialize());
app.use(session({ secret: process.env.SECRET_KEY, resave: false, saveUninitialized: true }));
app.use(passport.session());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error(err));

// Initialize Passport Google OAuth
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:5000/auth/google/peerpick",
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        const email = profile.emails[0].value;

        // Check if email matches the required domain
        if (!email.endsWith("@umt.edu.pk")) {
          return done(null, false, { message: "You are not authorized to sign in." });
        }

        const user = { googleId: profile.id, name: profile.displayName, email };

        return done(null, user);
      } catch (error) {
        console.error("Google OAuth Error:", error);
        return done(error, null);
      }
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

// Routes
app.use('/auth', users);
app.use('/user', user);
app.use('/admin', admin);
app.use('/hybrid', hybrid);

// Google Authentication Routes
app.get("/auth/google", passport.authenticate("google", { scope: ["profile", "email"] }));

app.get(
  "/auth/google/peerpick",
  passport.authenticate("google", { failureRedirect: "/unauthorized" }),
  async (req, res) => {
    
    try {
       const email = req.user?.email;
      if (!email) {
        throw new Error("User email not found");
      }

      const existingUser = await User.findOne({ email });

      if (existingUser) {
        return res.redirect("http://localhost:5173/login?message=You%20are%20already%20registered,%20please%20login");
      }

      const token = jwt.sign({ email }, process.env.SECRET_KEY, { expiresIn: "1h" });
      res.redirect(`http://localhost:5173/register?token=${token}`);
    } catch (error) {
      console.error("Error checking user email:", error);
      res.redirect("http://localhost:5173/login?message=An error occurred during sign-in");
    }
  }
);

app.get("/unauthorized", (req, res) => {
  res.redirect("http://localhost:5173/login");
});

// Initialize Socket.IO
const io = socketIo(server, {
  cors: {
    origin: 'http://localhost:5173',
    credentials: true,
    methods: ['GET', 'POST']
  }
});
// try {
//     const result =  Need.insertMany(needsData);
//     if (result) {
//         console.log('Record successfully Inserted:');
//     } else {
//         console.log('No record found with that _id');
//     }
// } catch (error) {
//     console.error('Error deleting record:', error);
// }
// async function fetchRecords() {
//   try {
//       const result = await Message.insertMany(messagesData);
      
//           console.log('Records successfully retrieved:', result);
      
//   } catch (error) {
//       console.error('Error retrieving records:', error);
//   }
// }

// fetchRecords(); // Call the function


// try {
//     const result =  User.insertMany(usersData);
//     if (result) {
//         console.log('Record successfully Inserted:');
//     } else {
//         console.log('No record found with that _id');
//     }
// } catch (error) {
//     console.error('Error deleting record:', error);
// }
// try {
//     const result =  Report.insertMany(reportsData);
//     if (result) {
//         console.log('Record successfully Inserted:');
//     } else {
//         console.log('No record found with that _id');
//     }
// } catch (error) {
//     console.error('Error deleting record:', error);
// }

// Socket.IO Event Handling
io.on("connection", (socket) => {
  console.log(`New client connected: ${socket.id}`);

  socket.on("authenticate", async (username) => {
    try {
      await User.findOneAndUpdate({ username }, { socketId: socket.id });
      console.log(`User ${username} authenticated with socket ${socket.id}`);
    } catch (err) {
      console.error("Authentication error:", err);
    }
  });

  socket.on("sendMessage", async ({ needID, sender, receiver, content, timestamp }) => {
    try {
      const message = new Message({ needID, sender, receiver, content, timestamp, read: false });

      await message.save();

      const receiverUser = await User.findOne({ username: receiver.username });
      if (receiverUser?.socketId) {
        io.to(receiverUser.socketId).emit("receiveMessage", message);
      }

      socket.emit("messageSent", message);
    } catch (err) {
      console.error("Error sending message:", err);
      socket.emit("messageError", { error: "Failed to send message" });
    }
  });

  socket.on("disconnect", () => {
    console.log(`Client disconnected: ${socket.id}`);
  });
});

// Start Server
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
