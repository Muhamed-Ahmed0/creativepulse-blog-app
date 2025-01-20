/* eslint-disable react/jsx-key */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import axiosClient from "@/app/utils/axiosClient";
import React, { useEffect, useState } from "react";
import Loader from "../_components/Loaders";

import Items from "../_components/Items";
import Header from "@/app/_components/Header";

const page = ({ params }) => {
  const { id } = params; // Blog ID from params
  const [blog, setBlog] = useState(null);
  const [blogsByCategory, setBlogsByCategory] = useState(null);
  const [liked, setLiked] = useState(false);

  // Check if the blog is already liked
  useEffect(() => {
    const likedBlogs = JSON.parse(localStorage.getItem("likedBlogs")) || [];
    setLiked(likedBlogs.includes(id)); // Set initial liked state
  }, [id]);

  // Toggle like state and update localStorage
  const handleLikes = () => {
    const likedBlogs = JSON.parse(localStorage.getItem("likedBlogs")) || [];
    let updatedLikes;

    if (liked) {
      // Remove blog ID from the liked list
      updatedLikes = likedBlogs.filter((blogId) => blogId !== id);
    } else {
      // Add blog ID to the liked list
      updatedLikes = [...likedBlogs, id];
    }

    // Update localStorage and state
    localStorage.setItem("likedBlogs", JSON.stringify(updatedLikes));
    setLiked(!liked);
  };
  const getBlogDetails = async () => {
    try {
      const response = await axiosClient.get(`/blogs/${id}`);
      if (response.data) {
        console.log("Blog Details:", response.data);
        setBlog(response.data);
      }
    } catch (error) {
      console.error("Error fetching blog details:", error);
    }
  };

  const getBlogByCategory = async (category) => {
    try {
      const response = await axiosClient.get(`/blogs/category/${category}`);
      if (response.data) {
        console.log("Blog Category Details:", response.data);
        setBlogsByCategory(response.data);
      }
    } catch (error) {
      console.error("Error fetching blog by category:", error);
    }
  };

  useEffect(() => {
    getBlogDetails();
  }, [id]);

  useEffect(() => {
    if (blog && blog.category) {
      getBlogByCategory(blog.category);
    }
  }, [blog]);

  if (!blog) {
    return <Loader />;
  }

  return (
    <div>
      <Header />
      <div className="w-full h-[80vh] flex flex-col mb-80">
        <div className="flex justify-center items-center gap-3 mx-auto">
          <img
            src={blog.authorImage}
            className="w-16 h-16 mt-2 rounded-full"
            alt="Author Image"
          />
          <h1 className="font-medium text-lg">{blog.author}</h1>
        </div>

        <div className="w-full flex flex-col items-center justify-center p-10">
          <h1 className="text-4xl font-bold m-6">{blog.title}</h1>
          <div className="w-full flex flex-col md:flex-row justify-center align-middle border p-5 gap-5 bg-slate-50">
            <img
              src={blog.CoverPhoto}
              alt="Blog Cover"
              className="md:w-1/3 w-full h-[300px]"
            />
            <div className="flex flex-col gap-10">
              <h2>{blog.content}</h2>
              <button
                onClick={handleLikes}
                className={`p-2 rounded ${
                  liked ? "bg-red-500 text-white" : "bg-gray-200 text-black"
                }`}
              >
                {liked ? "Unlike" : "Like"}
              </button>
            </div>
          </div>
        </div>
        <hr />
        {blogsByCategory && (
          <div className="mt-10">
            <h2 className="text-5xl font-bold mb-10 ml-12">Related Blogs</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-5">
              {blogsByCategory.map((relatedBlog) => (
                <Items similarBlogs={relatedBlog} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default page;
