import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";
import axiosClient from "@/app/utils/axiosClient";
const AllBlogs = ({ blogs }) => {
  const deleteBlog = async (id) => {
    try {
      const response = await axiosClient.delete(`/blogs/${id}`);
      if (response.data) {
        alert("Blog removed successfully");
        console.log("Blog removed:", response.data);
        getAllBlogs();
      }
    } catch (error) {
      console.error("Error removing blog:", error);
    }
  };
  return (
    <div className="mt-10">
      <div className="flex justify-between ">
        <h3 className="text-2xl mb-4 font-semibold">All Blogs</h3>
        <Link
          href="/admin/featured-blogs/create-new"
          className="bg-blue-900 text-white text-center rounded-md px-4 py-3"
        >
          Create New
        </Link>
      </div>
      <br />
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead className="hidden md:table-cell">Author</TableHead>
            <TableHead className="hidden md:table-cell text-right">
              Actions
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {blogs.map((blog) => (
            <TableRow key={blog._id}>
              <TableCell>
                <Link
                  href={`/blogs/${blog._id}`}
                  className="text-blue-500 hover:underline"
                >
                  {blog.title}
                </Link>
              </TableCell>
              <TableCell className="hidden md:table-cell">
                {blog.author}
              </TableCell>
              <TableCell className="flex flex-col justify-center align-middle gap-2 md:table-cell text-right">
                <button
                  onClick={() => deleteBlog(blog._id)}
                  className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-300 ease-in-out"
                >
                  Delete
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default AllBlogs;
