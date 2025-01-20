import Image from "next/image";
import Link from "next/link";
import React from "react";

const PremiumBlogs = () => {
  return (
    <div className="flex flex-col justify-between gap-10 mx-auto mt-5 mb-7">
      <Image
        src={"premiumQuestion.svg"}
        width={500}
        height={500}
        alt="Premium Question"
        className="mx-auto"
      />
      <h1 className="text-xl font-medium text-center">
        <Link
          href="/subscription"
          className="text-blue-700 cursor-pointer font-extrabold underline"
        >
          Subscribe
        </Link>{" "}
        To Get Access
      </h1>
    </div>
  );
};

export default PremiumBlogs;
