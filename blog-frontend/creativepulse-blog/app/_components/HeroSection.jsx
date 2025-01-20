import Link from "next/link";
import React from "react";

const HeroSection = () => {
  return (
    <div className="bg-heroBG md:h-[90vh] h-[100vh] w-full">
      <div className="h-[90vh] w-full flex flex-col text-center align-middle text-white">
        <h1 className="text-4xl font-bold mt-[20vh]">
          Discover Ideas, Inspiration, and Innovation
        </h1>
        <div className="mx-auto w-2/3">
          <p className="text-md mt-[3vh] text-center">
            At CreativePulse, we bring you the latest insights, creative ideas,
            and stories that spark innovation. Explore our articles and get
            inspired to take on new challenges in life, work, and everything in
            between.
          </p>
        </div>
        <Link
          href={"/blogs"}
          className="mt-[5vh] mx-auto px-10 py-2 bg-purple-800 text-white rounded-3xl hover:bg-purple-900 transition duration-300 ease-in-out"
        >
          Start Reading
        </Link>
        <h6 className="mt-[2vh] text-xs">Try For Free, Upgrade Later!</h6>
      </div>
    </div>
  );
};

export default HeroSection;
