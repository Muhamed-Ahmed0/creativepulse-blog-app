// routes/blogRoutes.js
const express = require("express");
const router = express.Router();
const {
  createBlog,
  getAllBlogs,
  getSingleBlog,
  deleteBlog,
  getBlogsByIsPremium,
  getBlogsByCategory,
} = require("../controller/blogController");

// Define routes
router.get("/", getAllBlogs); // Get all blogs
router.get("/:id", getSingleBlog); // Get a single blog by ID
router.post("/", createBlog); // Create a new blog
router.delete("/:id", deleteBlog); // Delete a blog by ID
router.get("/isPremium/:isPremium", getBlogsByIsPremium);
router.get("/category/:category", getBlogsByCategory);

// Export router
module.exports = router;
