import React from "react";
import { Code } from "@radix-ui/themes";
const Hero = () => {
  return (
    <Code
      style={{ width: "80%", display: "block" }}
      size={{ initial: "4", md: "8", xl: "9" }}
      className="mt-10"
      variant="ghost"
      highContrast
    >
      I&#39;m Ayoub — A full-stack web magician, blending my design chops with
      coding prowess to craft websites that are both visually stunning and
      technically sound.
    </Code>
  );
};

export default Hero;
