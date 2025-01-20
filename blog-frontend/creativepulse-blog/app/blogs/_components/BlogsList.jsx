import React from "react";
import BlogItem from "./BlogItem";
const BlogsList = ({ blogs }) => {
  return (
    <div className="grid md:grid-cols-3 grid-cols-1  gap-4 ">
      {/* Blogs List */}
      {blogs.map((blog) => (
        <BlogItem key={blog.id} blog={blog} />
      ))}
    </div>
  );
};

export default BlogsList;
