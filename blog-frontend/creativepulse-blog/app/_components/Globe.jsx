import React from "react";
import Link from "next/link";
const Globe = () => {
  return (
    <div className="bg-[url('/_images/world.jpg')] bg-cover md:h-[90vh] p-10 w-full h-[70vh] text-white">
      <div className="text-center m-auto flex flex-col">
        <h1 className="text-5xl font-bold mt-24">
          Join Millions Of People Across The Globe
        </h1>
        <Link
          href={"/blogs"}
          className="mt-20 mx-auto px-20 py-4 bg-purple-800 text-white rounded-3xl hover:bg-purple-900 transition duration-300 ease-in-out"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default Globe;
