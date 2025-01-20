/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import DashboardCard from "@/components/dashboard/DashboardCard";
import { Newspaper, User } from "lucide-react";
import axiosClient from "../utils/axiosClient";
import BlogsTable from "@/components/blogs/BlogsTable";

const Page = () => {
  const router = useRouter();
  const [user, setUser] = useState(null); // Store the user from localStorage
  const [isAdmin, setIsAdmin] = useState(false);
  const [blogs, setBlogs] = useState([]);
  const [users, setUsers] = useState([]);

  // Function to check if the user is admin
  const checkAdmin = (user) => {
    if (user && user.isAdmin) {
      setIsAdmin(true);
    } else {
      setIsAdmin(false);
      router.push("/blogs"); // Redirect to blogs if not admin
    }
  };

  // Fetch blogs
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

  // Fetch users
  const getAllUsers = async () => {
    try {
      const response = await axiosClient.get("/users/getUsers");
      if (response.data) {
        console.log("Users:", response.data);
        setUsers(response.data);
      }
    } catch (error) {
      console.error("Error fetching Users:", error);
    }
  };

  // Run client-side logic after the component mounts
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user")); // Access localStorage safely
    setUser(storedUser);
    checkAdmin(storedUser); // Check if the user is admin
    getAllBlogs(); // Fetch blogs
    getAllUsers(); // Fetch users
  }, []);

  return isAdmin ? (
    <>
      <div className="flex flex-col md:flex-row justify-between gap-5 mb-5">
        <DashboardCard
          title="Blogs"
          count={blogs.length}
          icon={<Newspaper className="text-slate-500" size={72} />}
        />
        <DashboardCard
          title="Users"
          count={users.length - 1}
          icon={<User className="text-slate-500" size={72} />}
        />
      </div>
      <img
        src="https://tse4.mm.bing.net/th?id=OIP.mcSrsbnq_8_QhZ_vgZQyeQHaDt&pid=Api&P=0&h=220"
        className="w-full h-[400px]"
      />
      <BlogsTable blogs={blogs} />
    </>
  ) : null;
};

export default Page;
