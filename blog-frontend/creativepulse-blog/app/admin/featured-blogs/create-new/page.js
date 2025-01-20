"use client";
import React from "react";
import axiosClient from "@/app/utils/axiosClient";

const Page = () => {
  const handleCreateBlog = async (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form[0].value;
    const content = form[1].value;
    const CoverPhoto = form[2].value;
    const author = form[3].value;
    const authorImage = form[4].value;
    const category = form[5].value;
    const isPremium = form[6].checked;

    // Check for empty fields
    if (
      !title ||
      !content ||
      !CoverPhoto ||
      !author ||
      !authorImage ||
      !category
    ) {
      alert("Please fill all the fields");
      return;
    }

    const blog = {
      title,
      content,
      CoverPhoto,
      author,
      authorImage,
      category,
      isPremium,
    };

    try {
      const { data } = await axiosClient.post("/blogs", blog);
      alert("Blog created successfully");
      console.log(data);
      form.reset(); // Reset the form after successful creation
    } catch (error) {
      console.error("Error creating blog:", error);
      alert("Failed to create blog");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-3xl text-center">Create New Blog</h1>
      <br />
      <form
        onSubmit={handleCreateBlog}
        className="w-full p-5 flex flex-col justify-center items-center"
      >
        <input
          type="text"
          className="p-3 w-[520px] rounded-md bg-slate-200 font-semibold text-lg"
          placeholder="Title"
        />
        <br />
        <textarea
          rows={10}
          className="p-3 w-[520px] rounded-md bg-slate-200 font-semibold text-lg"
          placeholder="Content"
        />
        <br />
        <input
          type="text"
          className="p-3 w-[520px] rounded-md bg-slate-200 font-semibold text-lg"
          placeholder="Cover Photo"
        />
        <br />
        <div className="flex flex-row justify-start gap-2 items-center w-[520px]">
          <input
            type="text"
            className="p-3 w-[40%] rounded-md bg-slate-200 font-semibold text-lg"
            placeholder="Author"
          />
          <input
            type="text"
            className="p-3 w-[60%] rounded-md bg-slate-200 font-semibold text-lg"
            placeholder="Author Image URL"
          />
        </div>
        <br />
        <input
          type="text"
          className="p-3 w-[520px] rounded-md bg-slate-200 font-semibold text-lg"
          placeholder="Category"
        />
        <br />
        <div className="flex items-center">
          <input type="checkbox" className="mr-2" id="premium" />
          <label htmlFor="premium" className="font-semibold text-lg">
            Premium
          </label>
        </div>
        <br />
        <button
          type="submit"
          className="p-3 w-[520px] rounded-md bg-purple-700 text-white font-semibold text-lg"
        >
          Create
        </button>
      </form>
    </div>
  );
};

export default Page;
