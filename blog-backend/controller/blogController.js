const Blog = require("../models/blog"); // Change 'blog' to 'Blog'

// Get all blogs
const getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find(); // Use 'Blog' here
    res.status(200).json(blogs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get single blog
const getSingleBlog = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id); // Use 'Blog' here
    res.status(200).json(blog);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create new blog
const createBlog = async (req, res) => {
  try {
    const blog = await Blog.create(req.body); // Use 'Blog' here
    res.status(201).json(blog);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteBlog = async (req, res) => {
  try {
    const blog = await Blog.findByIdAndDelete(req.params.id); // Use 'Blog' here
    res.status(200).json({ message: "Blog deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get blogs by isPremium
const getBlogsByIsPremium = async (req, res) => {
  try {
    const { isPremium } = req.params; // Extract the isPremium from the route parameters
    const blogs = await Blog.find({ isPremium });
    res.status(200).json(blogs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get blogs by category
const getBlogsByCategory = async (req, res) => {
  try {
    const { category } = req.params; // Extract the category from the route parameters
    const blogs = await Blog.find({ category }); // Find blogs by category
    res.status(200).json(blogs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllBlogs,
  getSingleBlog,
  createBlog,
  deleteBlog,
  getBlogsByIsPremium,
  getBlogsByCategory,
};
