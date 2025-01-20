"use client";
import React, { useState } from "react";
import Link from "next/link";
import Pass from "../../_commonComponents/Pass";
import axiosClient from "@/app/utils/axiosClient";
import Alerttt from "../../_commonComponents/Alerttt";

const Form = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const handleLogin = async (e) => {
    e.preventDefault();
    if (!email) {
      setError("Email is required");
      return;
    } else if (!password) {
      setError("Password is required");
      return;
    }
    try {
      const response = await axiosClient.post("/users/login", {
        email: email,
        password: password,
      });
      console.log("API Response:", response.data);
      if (response.data && response.data.token) {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user", JSON.stringify(response.data.user));

        // Check if the user is an admin from the response
        if (response.data.user && response.data.user.isAdmin) {
          window.location.href = "/admin"; // Redirect to the admin page if the user is an admin
        } else {
          window.location.href = "/blogs"; // Otherwise, redirect to the blogs page
        }
      }
    } catch (error) {
      setError("Login failed, Check your credentials");
      console.error("Login failed:", error);
    }
  };

  return (
    <div className="w-full h-[100vh] flex justify-center align-middle">
      <form className="p-20 h-[60vh] md:h-[80vh] m-auto lg:p-10 flex flex-col rounded-2xl bg-slate-50">
        <h1 className="text-xl font-bold text-center">Login To Start</h1>
        <p className="text-xs font-medium text-center mb-10 text-slate-500">
          Using CreativePulse
        </p>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border-2 border-gray-300 p-2 w-60 lg:w-96 rounded-md mb-3"
        />
        <Pass value={password} onChange={(e) => setPassword(e.target.value)} />
        {error && <Alerttt message={error} />}
        <button
          onClick={handleLogin}
          className="mt-10 w-60 lg:w-96 px-20 py-4 bg-purple-500 text-white rounded-md hover:bg-purple-600 transition duration-300 ease-in-out"
        >
          Login
        </button>
        <p
          href={"/auth/register"}
          className="text-xs font-medium text-center mt-10 text-slate-500"
        >
          Don't have an account?{" "}
          <Link
            href={"/auth/register"}
            className="text-black hover:text-slate-900 cursor-pointer"
          >
            Register
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Form;
