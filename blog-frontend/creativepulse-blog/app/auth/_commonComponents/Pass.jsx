"use client";
import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

const Pass = ({ value, onChange, placeholder }) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prevState) => !prevState);
  };
  return (
    <>
      <input
        type={isPasswordVisible ? "text" : "password"}
        value={value}
        placeholder={placeholder || "Password"}
        onChange={onChange}
        className="border-2 border-gray-300 p-2 w-60 lg:w-96 rounded-md mb-3"
      />
      <span
        onClick={togglePasswordVisibility}
        role="button"
        aria-label={isPasswordVisible ? "Hide password" : "Show password"}
        className="relative bottom-[34px] left-[200px] md:left-[330px] transform -translate-y-1/2 cursor-pointer"
      >
        {isPasswordVisible ? <Eye size={27} /> : <EyeOff size={27} />}
      </span>
    </>
  );
};

export default Pass;
