"use client";
import React, { useLayoutEffect, useRef } from "react";
import { Text } from "@radix-ui/themes";
import Image from "next/image";
import { gsap } from "gsap";
const Hero = () => {
  const app = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from("#arrow", {
        y: -50,
        ease: "power3.out",
        duration: 0.8,
        yoyo: true,
        opacity: 0,
        repeat: -1,
      });
    }, app);

    return () => ctx.revert();
  }, []);
  return (
    <>
      <div ref={app}>
        <Text
          size={{ initial: "3", sm: "6", md: "7", xl: "8" }}
          style={{
            lineHeight: "calc(1rem + 2vw)",
            width: "80%",
            display: "block",
          }}
          weight={"light"}
        >
          I&#39;m Ayoub — A full-stack web magician, blending my design chops
          with coding prowess to craft websites that are both visually stunning
          and technically sound.
        </Text>
        <div className="flex justify-center  mt-20 md:justify-end" id="arrow">
          <Image
            src="/Scroll-Down.png"
            height={0}
            width={0}
            className="w-4"
            alt="arrowDown"
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
