import Link from "next/link";
import React from "react";

const Items = ({ similarBlogs }) => {
  return (
    <Link
      href={`/blogs/${similarBlogs._id}`}
      className="flex flex-col align-middle justify-center w-[410px] h-[400px] transition ease-in-out duration-100 hover:scale-105"
    >
      <img
        src={similarBlogs.CoverPhoto}
        alt="Blog Image"
        className="rounded-t-md w-full h-full object-cover"
      />
      <div className="bg-black h-32 p-5 rounded-b-md">
        <h1 className="text-lg text-white font-medium line-clamp-1">
          {similarBlogs.title}
        </h1>
        <br />
        <p className="text-sm font-light text-white line-clamp-2">
          {similarBlogs.content}
        </p>
      </div>
    </Link>
  );
};

export default Items;
