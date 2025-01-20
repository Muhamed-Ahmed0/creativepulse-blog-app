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
const BlogsTable = ({ blogs }) => {
  return (
    <div className="mt-10">
      <h3 className="text-2xl mb-4 font-semibold">Recent Blogs</h3>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead className="hidden md:table-cell">Author</TableHead>
            <TableHead className="hidden md:table-cell text-right">
              Date
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {blogs.slice(0, 5).map((blog) => (
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
              <TableCell className="hidden md:table-cell text-right">
                {new Date(blog.createdAt).toLocaleDateString()}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default BlogsTable;
