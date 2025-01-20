import React from "react";
import Image from "next/image";
import "../../app/globals.css";
const Benefits = () => {
  return (
    <div className="w-full bg-customBG h-fit p-10 text-black text-center">
      <h1 className="text-5xl font-bold mt-10">Benefits</h1>
      <h1 className="text-sm mt-2">We Provide Numerous Benefits</h1>
      <div className="w-full slideright mt-20 lg:mt-10 flex p-5 lg:flex-row flex-col-reverse justify-between align-middle">
        <div className="lg:w-1/2 w-full ">
          <h1 className="text-2xl font-bold mt-10">
            1. Expert Insights & Unique Perspectives
          </h1>
          <p className="mt-2 text-md font-medium">
            - At CreativePulse, we deliver more than just information—we provide
            expert-driven insights that dive deep into the topics you care
            about. Our team of seasoned writers and industry professionals
            ensures every piece is well-researched and uniquely crafted. By
            offering fresh perspectives, we aim to inspire innovative thinking
            and keep you ahead in a competitive world. Whether you’re looking
            for trends, analysis, or creative ideas, we’ve got you covered.
          </p>
        </div>
        <Image
          src="experts.svg"
          alt="Benefits"
          width={300}
          height={300}
          className="md:mx-auto"
        />
      </div>
      <div className="w-full slideleft  mt-20 lg:mt-10 flex lg:flex-row flex-col p-5 justify-between align-middle">
        <Image
          src="trends.svg"
          alt="Benefits"
          width={300}
          height={300}
          className="md:mx-auto"
        />
        <div className="lg:w-1/2 w-full">
          <h1 className="text-2xl text-center font-bold mt-20">
            2. Stay Ahead with the Latest Trends
          </h1>
          <p className="mt-2 text-md font-medium">
            - The world moves fast, and staying informed is crucial. That’s why
            we bring you the latest trends, innovations, and breakthroughs
            across a wide range of topics. From emerging technologies to
            lifestyle hacks and market insights, our timely content ensures
            you’re always in the know. With every update, you’ll gain actionable
            knowledge to make informed decisions and stay ahead in your personal
            and professional life.
          </p>
        </div>
      </div>
      <div className="w-full mt-20 slideright lg:mt-10 p-5 flex lg:flex-row flex-col-reverse justify-between align-middle">
        <div className="lg:w-1/2 w-full">
          <h1 className="text-2xl font-bold mt-16">
            3. Consistently High-Quality Content
          </h1>
          <p className="mt-2 text-md font-medium">
            - Quality is our priority, and it shows in everything we create.
            Each article is meticulously crafted to ensure it’s engaging,
            accurate, and valuable to our readers. We believe in delivering
            content that not only informs but also inspires and entertains. With
            a commitment to excellence, you can trust us to provide reliable and
            enriching content every time you visit. At CreativePulse, your
            reading experience is our top priority.
          </p>
        </div>
        <Image
          src="quality.svg"
          alt="Benefits"
          width={300}
          height={300}
          className="md:mx-auto"
        />
      </div>
    </div>
  );
};

export default Benefits;
