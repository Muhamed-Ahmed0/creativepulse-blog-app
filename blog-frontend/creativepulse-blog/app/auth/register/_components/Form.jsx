"use client";
import React, { useState } from "react";
import Link from "next/link";
import Pass from "../../_commonComponents/Pass";
import axiosClient from "@/app/utils/axiosClient";
import { validateEmail } from "@/app/utils/helperFunctions";
import Alerttt from "../../_commonComponents/Alerttt";
const Form = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  // Register API Call Logic
  const handleRegister = async (e) => {
    e.preventDefault();
    console.log("Username entered:", username);
    console.log("Email entered:", email);
    console.log("Password entered:", password);

    if (!username) {
      setError("Username is required");
      return;
    } else if (!email || !validateEmail(email)) {
      setError("Email is required");
      return;
    } else if (!password) {
      setError("Password is required");
      return;
    } else if (password.length < 8) {
      setError("Password must be at least 8 characters long");
      return;
    } else if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    } else {
      setError("");

      // REGISTER API CALL
      try {
        const response = await axiosClient.post("/users/register", {
          name: username,
          email: email,
          password: password,
        });
        if (response) {
          console.log("API Response:", response.data); // Log the full response
        }
        if (response.data && response.data.error) {
          setError(response.data.message);
        }
        if (response.data && response.data.token) {
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("user", JSON.stringify(response.data.user));

          window.location.href = "/blogs";
        }
      } catch (error) {
        console.error("Error registering user:", error);
        setError("User Already Registered");
      }
    }
  };
  return (
    <div className="w-full h-[100vh] flex justify-center align-middle">
      {error && <Alerttt message={error} />}

      <form className="p-20 h-[65vh] md:h-[80vh] m-auto lg:p-10 flex flex-col rounded-2xl bg-slate-50">
        <h1 className="text-xl font-bold text-center">Register To Start</h1>
        <p className="text-xs font-medium text-center mb-10 text-slate-500">
          Your Journey
        </p>
        <input
          type="text"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
          placeholder="Username"
          className="border-2 border-gray-300 p-2 w-60 lg:w-96 rounded-md mb-3"
        />
        <input
          type="email"
          value={email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          className="border-2 border-gray-300 p-2 w-60 lg:w-96 rounded-md mb-3"
        />
        <Pass value={password} onChange={(e) => setPassword(e.target.value)} />
        <input
          type="password"
          placeholder="Confirm Password"
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="border-2 absolute bottom-[41vh] md:bottom-56 border-gray-300 p-2 w-60 lg:w-96 rounded-md mb-3"
        />
        <button
          onClick={handleRegister}
          className="mt-14 w-60 lg:w-96 px-20 py-4 bg-purple-500 text-white rounded-md hover:bg-purple-600 transition duration-300 ease-in-out"
        >
          Register
        </button>
        <Link
          href={"/auth/login"}
          className="text-xs font-medium text-center mt-10 text-slate-500"
        >
          Already Have An Account?{" "}
          <span className="text-black hover:text-slate-900 cursor-pointer">
            Login
          </span>
        </Link>
      </form>
    </div>
  );
};

export default Form;
