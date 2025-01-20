"use client";
import React from "react";
import dynamic from "next/dynamic";
import Header from "../_components/Header";

// Dynamically import ProfileComp with SSR disabled
const ProfileComp = dynamic(() => import("./_components/ProfileComp"), {
  ssr: false,
});

const Page = () => {
  return (
    <div className="w-full">
      <Header />
      <ProfileComp />
    </div>
  );
};

export default Page;
