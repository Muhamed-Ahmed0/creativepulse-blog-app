"use client";
import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import axiosClient from "@/app/utils/axiosClient";
const UsersTable = () => {
  const [users, setUsers] = useState([]);

  const GetNotAdmins = async () => {
    try {
      const response = await axiosClient.get("/users/not-admins");
      if (response.data) {
        console.log("Users:", response.data);
        setUsers(response.data);
      }
    } catch (error) {
      console.error("Error fetching Users:", error);
    }
  };
  const removeUser = async (id) => {
    try {
      const response = await axiosClient.delete(`/users/deleteUser/${id}`);
      if (response.data) {
        alert("User removed successfully");
        console.log("User removed:", response.data);
        GetNotAdmins();
      }
    } catch (error) {
      console.error("Error removing user:", error);
    }
  };
  useEffect(() => {
    GetNotAdmins();
  }, []);
  return (
    <div className="mt-10">
      <h3 className="text-2xl mb-4 font-semibold">Users</h3>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead className="hidden md:table-cell">Email</TableHead>
            <TableHead className="hidden md:table-cell text-right">
              Action
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user._id}>
              <TableCell>
                <h1 href={`/blogs/${user._id}`} className="text-black">
                  {user.name}
                </h1>
              </TableCell>
              <TableCell className="hidden md:table-cell">
                {user.email}
              </TableCell>
              <TableCell className="table-cell text-right">
                <button
                  onClick={() => removeUser(user._id)}
                  className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-300 ease-in-out"
                >
                  Remove
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default UsersTable;
