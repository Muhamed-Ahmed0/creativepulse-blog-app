/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React, { useEffect, useState } from "react";
import AllBlogs from "./_components/AllBlogs";
import axiosClient from "@/app/utils/axiosClient";
const page = () => {
  const [blogs, setBlogs] = useState([]);

  const getAllBlogs = async () => {
    try {
      const response = await axiosClient.get("/blogs");
      if (response.data) {
        console.log("Blogs:", response.data);
        setBlogs(response.data);
      }
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };
  useEffect(() => {
    getAllBlogs();
  }, []);
  return (
    <>
      <AllBlogs blogs={blogs} />
    </>
  );
};

export default page;
