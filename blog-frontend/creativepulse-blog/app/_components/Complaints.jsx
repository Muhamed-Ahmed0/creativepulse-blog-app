import React from "react";

const Complaints = () => {
  return (
    <div className="flex flex-col lg:flex-row align-middle w-full md:h-[70vh] h-[100vh] lg:h-[90vh]">
      <div className="lg:w-1/2 w-full p-10 text-center">
        <h1 className="text-4xl font-bold ">Feel Free To Bother Us</h1>
        <h2 className="text-xl font-medium mt-3">
          24/7 Customer Support Remember ?
        </h2>
      </div>
      <form className="lg:w-1/2 w-full p-20 md:ml-48 lg:p-10 flex flex-col">
        <input
          type="text"
          placeholder="Name"
          className="border-2 border-gray-300 p-2 w-60 lg:w-96 rounded-md"
        />
        <br />
        <textarea
          placeholder="Message"
          className="border-2 border-gray-300 p-2 w-60 lg:w-96 rounded-md"
          rows={10}
        />
        <br />
        <button className="mt-10 w-60 lg:w-96 px-20 py-4 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition duration-300 ease-in-out">
          Send
        </button>
      </form>
    </div>
  );
};

export default Complaints;
