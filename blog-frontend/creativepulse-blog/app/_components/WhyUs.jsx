import React from "react";
import Image from "next/image";
const WhyUs = () => {
  return (
    <div className="bg-slate-50 w-full lg:h-[75vh] md:h-[55vh] h-[105vh] flex lg:flex-row flex-col align-middle">
      <div className="lg:w-[60%] p-10 lg:p-5 w-full h-fit mt-[5vh] sm:mt-0 lg:mt-[10vh]">
        <h1 className="text-4xl font-bold m-12">Why Us?</h1>
        <p className="lg:m-12  font-semibold">
          - At CreativePulse, we don’t just share stories—we share ideas that
          resonate. We are committed to providing you with content that
          inspires, educates, and empowers. Our mission is simple: to spark
          creativity and innovation through thoughtful and engaging writing.
          With every article, we aim to challenge perspectives, introduce new
          concepts, and create a space for meaningful discussions. Whether
          you’re here to stay ahead of trends or find fresh inspiration, we are
          dedicated to being the platform that keeps you curious and informed.
        </p>
      </div>
      <Image
        src="whyUs.svg"
        alt="Why Us?"
        width={250}
        height={250}
        className="lg:mt-10 mx-auto"
      />
    </div>
  );
};

export default WhyUs;
