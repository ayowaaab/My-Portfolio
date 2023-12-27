import React from "react";
import PortfolioCard from "./PortfolioCard/PortfolioCard";
import { Heading } from "@radix-ui/themes";

const Cards = () => {
  return (
    <>
      <center>
        <div className="flex flex-col items-center justify-start gap-5 mt-5">
          <Heading size={"9"}>Anime Page</Heading>

          <PortfolioCard
            technologie="ReactJS|TypeScript|Chakra-UI"
            link="ayowaaab.github.io/AnimePage"
            year="2023"
          />
        </div>
      </center>
    </>
  );
};

export default Cards;
