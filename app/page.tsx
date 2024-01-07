import React from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import PortfolioCard from "./components/PortfolioCard";

const page = () => {
  // const PortfolioCardArray = [
  //   {pic:"/yuta.jpeg",tech="ReactJS| TypeScript | Chakra-UI",url:"ayowaaab.github.io/AnimePage",year:"2023"}
  // ]

  return (
    <>
      <NavBar />
      <Hero />
      <div className="h-[100vh] relative">
        <PortfolioCard
          picture="/yuta.jpeg"
          technologie="ReactJS| TypeScript | Chakra-UI"
          linkUrl="ayowaaab.github.io/AnimePage/"
          year="2023"
        />
      </div>
    </>
  );
};

export default page;
