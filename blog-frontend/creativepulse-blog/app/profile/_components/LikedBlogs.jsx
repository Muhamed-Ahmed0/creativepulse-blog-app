"use client";
import Link from "next/link";
import React, { useState, useEffect, useMemo } from "react";
import axiosClient from "@/app/utils/axiosClient";
import { List } from "lucide-react";
const LikedBlogs = ({ blog }) => {
  // Memoize likedBlogsIds to prevent recalculation on each render
  const likedBlogsIds = useMemo(
    () => JSON.parse(localStorage.getItem("likedBlogs")) || [],
    [] // Empty dependency array ensures it runs only once when component mounts
  );

  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    // If no liked blogs, do nothing
    if (likedBlogsIds.length === 0) return;

    // Fetch blogs based on likedBlogsIds
    const fetchBlogs = async () => {
      try {
        const fetchedBlogs = await Promise.all(
          likedBlogsIds.map(async (blogId) => {
            const res = await axiosClient.get(`/blogs/${blogId}`);
            return res.data;
          })
        );
        setBlogs(fetchedBlogs); // Set the fetched blogs
      } catch (error) {
        console.error("Error fetching liked blogs:", error);
      }
    };

    fetchBlogs(); // Trigger the fetch only once
  }, []); // Run effect when likedBlogsIds change (in this case, it's memoized)

  return (
    <div>
      {blogs.length === 0 ? (
        <p>No liked blogs found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full">
          {blogs.map((blog) => (
            <div key={blog._id}>
              <Link
                href={`/blogs/${blog._id}`}
                className="flex flex-col align-middle justify-center w-[410px] h-[400px] transition ease-in-out duration-100 hover:scale-105"
              >
                <img
                  src={blog.CoverPhoto}
                  alt="Blog Image"
                  className="rounded-t-md w-full h-full object-cover"
                />
                <div className="bg-black h-40 p-5 rounded-b-md">
                  <h1 className="text-lg text-white font-medium line-clamp-1">
                    {blog.title}
                  </h1>
                  <br />
                  <p className="text-sm font-light text-white line-clamp-2">
                    {blog.content}
                  </p>
                  <br />
                  <h3 className="flex text-slate-400 gap-2">
                    <List /> {blog.category}
                  </h3>
                </div>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LikedBlogs;
