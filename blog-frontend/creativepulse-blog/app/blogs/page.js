/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React, { useEffect, useState } from "react";
import axiosClient from "../utils/axiosClient";
import dynamic from "next/dynamic";
import BlogsList from "./_components/BlogsList";
import Link from "next/link";
import Divider from "./_components/Divider";
import PremiumBlogs from "./_components/PremiumBlogs";
import ActualBlogs from "./_components/ActualBlogs";

const Header = dynamic(() => import("@/app/_components/Header"));

const page = () => {
  const [blogs, setBlogs] = useState([]);
  const [subscription, setSubscription] = useState(null); // Initializing state for subscription

  // Get The Blogs
  const getFreeBlogs = async () => {
    try {
      const response = await axiosClient.get("/blogs/isPremium/false");
      if (response.data) {
        console.log("Blogs:", response.data);
        setBlogs(response.data);
      }
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

  useEffect(() => {
    // Set subscription value only on client-side (after mounting)
    const storedSubscription = localStorage.getItem("subscription");
    setSubscription(storedSubscription);

    getFreeBlogs(); // Fetch blogs on page load
  }, []);

  console.log("Blogs from state:", blogs);

  return (
    <div className="overflow-x-hidden">
      <Header />
      <div className="mb-10 h-[80vh] rounded-b-2xl bg-[url('https://images.pexels.com/photos/2881229/pexels-photo-2881229.jpeg?auto=compress&cs=tinysrgb&w=600')] bg-cover">
        <h2 className="text-white relative w-fit bg-slate-700 py-2 px-6 rounded-tr-lg rounded-bl-lg top-56 left-5">
          tech
        </h2>
        <h1 className="text-4xl font-bold text-white relative top-60 left-5">
          Serverless Architecture
        </h1>
        <p className="text-white relative top-64 left-5">
          By: <span className="text-white font-bold">Olivia Brown</span>
        </p>
        <Link
          href="/blogs/67755615776f893445b2544b"
          className="text-white rounded-xl relative top-72 left-5 bg-purple-900 py-3 px-16 "
        >
          {" "}
          View{" "}
        </Link>
      </div>

      <div className="flex flex-col justify-between gap-10 mx-auto mt-5 mb-10">
        {/* Left side: Heading with Link */}
        <div className="flex justify-center items-center md:items-start md:w-1/3 w-56 text-center gap-5 md:mr-auto m-auto">
          <h1 className="text-3xl font-bold mb-3">Our Free Blogs</h1>
        </div>

        {/* Right side: Blogs List */}
        <div className="w-11/12 mx-auto">
          <BlogsList blogs={blogs} />
        </div>
      </div>
      <Divider />
      <br />
      {subscription === "pro" ? <ActualBlogs /> : <PremiumBlogs />}
    </div>
  );
};

export default page;
