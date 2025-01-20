import { List } from "lucide-react";
import Link from "next/link";
import React from "react";

const BlogItem = ({ blog }) => {
  return (
    <Link
      href={`/blogs/${blog._id}`}
      className="relative overflow-hidden rounded-lg shadow transition ease-in-out hover:shadow-2xl duration-100 hover:scale-105"
    >
      <img
        alt=""
        src={blog.CoverPhoto}
        className="absolute inset-0 h-full w-full object-cover opacity-85"
      />

      <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
        <div className="p-4 sm:p-6">
          <time
            datetime={blog.createdAt}
            className="block text-xs text-white/90"
          >
            {" "}
            {new Date(blog.createdAt).toLocaleDateString()}
          </time>

          <a href="#">
            <h3 className="mt-0.5 text-lg text-white">{blog.title}</h3>
          </a>

          <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
            {blog.content}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default BlogItem;
