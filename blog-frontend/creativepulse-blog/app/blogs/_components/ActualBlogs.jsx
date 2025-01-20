"use client";
import React, { useState, useEffect } from "react";
import axiosClient from "@/app/utils/axiosClient";
import BlogItem from "./BlogItem";
const ActualBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  // Get The Blogs
  const getPremiumBlogs = async () => {
    try {
      const response = await axiosClient.get("/blogs/isPremium/true");
      if (response.data) {
        console.log("Premium:", response.data);
        setBlogs(response.data);
      }
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

  useEffect(() => {
    getPremiumBlogs();
  }, []);
  console.log("Premium Blogs from state:", blogs);
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 gap-6 m-10">
      {/* Blogs List */}
      {blogs.map((blog) => (
        <BlogItem key={blog.id} blog={blog} />
      ))}
    </div>
  );
};

export default ActualBlogs;
