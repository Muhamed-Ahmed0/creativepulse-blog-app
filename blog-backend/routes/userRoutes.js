// routes/userRoutes.js
const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  getProfile,
  getAllUsers,
  deleteUser,
  getNotAdmins,
} = require("../controller/authController");
const {
  authMiddleware,
  adminMiddleware,
} = require("../middleware/authMiddleware");

// Register new user
router.post("/register", registerUser);

// Login user
router.post("/login", loginUser);

// Get user profile (protected)
router.get("/profile", authMiddleware, getProfile); // This route would require authentication

// Get All Users
router.get("/getUsers", authMiddleware, adminMiddleware, getAllUsers);

// Delete User
router.delete("/deleteUser/:id", authMiddleware, adminMiddleware, deleteUser);

// Get Not Admins
router.get("/not-admins", authMiddleware, adminMiddleware, getNotAdmins);
module.exports = router;
