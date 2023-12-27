import React from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Cards from "./components/Cards";

const page = () => {
  return (
    <>
      <NavBar />
      <div className="h-[90vh]">
        <Hero />
      </div>
      <Cards />
    </>
  );
};

export default page;
