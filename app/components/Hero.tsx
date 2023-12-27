import React from "react";
import { Text } from "@radix-ui/themes";
import { AiOutlineArrowDown } from "react-icons/ai";
import Image from "next/image";
const Hero = () => {
  return (
    <>
      <Text
        size={{initial:"3",lg:"7",xl:"9"}}
        style={{ lineHeight: "calc(1rem + 25px)", width: "80%", display: "block" }}
        weight={"light"}
      >
        I&#39;m Ayoub — A full-stack web magician, blending my design chops with
        coding prowess to craft websites that are both visually stunning and
        technically sound.
      </Text>
      <div className="flex justify-end mt-20">

      <Image src="/Scroll-Down.png" height={0} width={0} className="w-4" alt="arrowDown"/>
      </div>
    </>
  );
};

export default Hero;
