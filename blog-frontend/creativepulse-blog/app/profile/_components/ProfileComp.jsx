"use client";
import React, { useEffect, useState } from "react";
import { getInitials } from "@/app/utils/helperFunctions";
import LikedBlogs from "./LikedBlogs";

const ProfileComp = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check if window object is available to ensure this code runs only in the browser
    if (typeof window !== "undefined") {
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    }
  }, []);

  const handleSignOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("likedBlogs");

    // Redirect to login page after sign-out
    window.location.href = "/auth/login";
  };

  if (!user) return <div>Loading...</div>; // Add a loading state until user is fetched

  return (
    <div className="w-full flex flex-col gap-16 justify-center items-center mt-5">
      <div className="w-full flex gap-16 justify-center items-center">
        <div className="rounded-full py-10 px-12 bg-gray-100 hover:bg-gray-200 text-6xl font-medium text-teal-600">
          {getInitials(user?.name || "Unknown User")}
        </div>
        <div>
          <h1 className="text-2xl font-bold">{user?.name || "Unknown User"}</h1>
          <p className="text-gray-600">{user?.email || "Unknown Email"}</p>
          <button
            className="mt-2 px-7 py-1 rounded-2xl bg-red-600 text-white hover:bg-red-700 text-md"
            onClick={handleSignOut}
          >
            Log Out
          </button>
        </div>
      </div>
      <hr className="w-7/12 mx-auto border-1 border-black" />
      <div className="w-full h-fit flex flex-col justify-center items-center">
        <h1 className="text-2xl font-bold">Your Liked Blogs</h1>
        <br />
        <LikedBlogs />
      </div>
    </div>
  );
};

export default ProfileComp;
