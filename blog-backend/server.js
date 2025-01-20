// server.js
const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const cors = require("cors");
const blogRoutes = require("./routes/blogRoutes");
const userRoutes = require("./routes/userRoutes");
// Read environment variables from .env file
dotenv.config();

// Connect to MongoDB database
connectDB();

// Create Express app
const app = express();

// Enable CORS
app.use(cors());

// Middleware
app.use(express.json());

// Routes
app.use("/api/blogs", blogRoutes); // Use blogRoutes for blog-related routes

app.use("/api/users", userRoutes); // Use userRoutes for user-related routes

// Home route
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

// Start the server
app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
