import React from "react";
import Image from "next/image";
import "../../app/globals.css";
const OtherThings = () => {
  return (
    <div className="bg-black w-full p-10 md:h-[155vh] h-[165vh]">
      <img src="/_images/laptopBlog.png" alt="Laptop" className="mx-auto" />

      <div className="mt-10 flex md:flex-row lg:flex-row flex-col gap-5 justify-center align-middle">
        <div className="bg-slate-50 slideright shadow-md shadow-purple-500 mx-auto w-[300px] lg:w-[500px] lg:h-[450px] rounded-2xl text-center p-5">
          <h1 className="text-3xl font-bold mt-10">Always Here For You</h1>
          <p className="mt-2 text-md font-medium">
            Our 24/7 support ensures we’re just a click away whenever you need
            us, day or night.
          </p>
          <Image
            src="costumerService.svg"
            alt="Other Things"
            width={300}
            height={300}
            className="mx-auto"
          />
        </div>
        <div className="bg-slate-50 slideleft shadow-md shadow-purple-500 mx-auto w-[300px] lg:w-[500px] lg:h-[450px] rounded-2xl text-center p-5">
          <h1 className="text-3xl font-bold mt-10">Diverse Content</h1>
          <p className="mt-2 text-md font-medium">
            Explore a wide range of topics tailored to spark your curiosity,
            from tech and trends to lifestyle and beyond—there’s something for
            everyone.
          </p>
          <Image
            src="diversty.svg"
            alt="Other Things"
            width={300}
            height={300}
            className="mx-auto mt-5"
          />
        </div>
      </div>
    </div>
  );
};

export default OtherThings;
