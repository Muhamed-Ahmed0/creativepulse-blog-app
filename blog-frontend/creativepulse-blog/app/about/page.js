import React from "react";
import Story from "./_components/Story";
import Mission from "./_components/Mission";
import Challenges from "./_components/Challenges";
import Legacy from "./_components/Legacy";
import Header from "../_components/Header";
import Footer from "../_components/Footer";

const page = () => {
  return (
    <>
      <Header />
      <Story />
      <Mission />
      <Challenges />
      <Legacy />
      <Footer />
    </>
  );
};

export default page;
