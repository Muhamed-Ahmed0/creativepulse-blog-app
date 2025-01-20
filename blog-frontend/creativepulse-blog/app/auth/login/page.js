import React from "react";
import Form from "./_components/Form";

const Page = () => {
  return (
    <div className="relative w-full h-screen bg-gradient-to-r from-purple-500 via-blue-500 to-blue-700 overflow-hidden">
      {/* Background Animation Elements */}
      <div className="absolute inset-0">
        {/* Floating Circles */}
        <div className="absolute top-1/4 left-1/5 w-5 h-5 bg-white rounded-full animate-float"></div>
        <div className="absolute top-1/2 left-1/3 w-5 h-5 bg-white rounded-full animate-float animation-duration-2000"></div>
        <div className="absolute top-2/3 left-1/4 w-5 h-5 bg-white rounded-full animate-float animation-duration-4000"></div>
        <div className="absolute top-1/3 left-2/3 w-5 h-5 bg-white rounded-full animate-float animation-duration-5000"></div>
        <div className="absolute top-3/4 left-1/4 w-5 h-5 bg-white rounded-full animate-float animation-duration-3000"></div>
      </div>

      {/* Centered Form */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <Form />
      </div>
    </div>
  );
};

export default Page;
