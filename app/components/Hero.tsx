"use client";
import React, { useLayoutEffect, useRef } from "react";
import { Text } from "@radix-ui/themes";
import Image from "next/image";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/all";

const Hero = () => {
  gsap.registerPlugin(TextPlugin);
  const app = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap
        .timeline()
        .to("#description", {
          text: "Hi! 👋",
          duration: 0.5,
          delay: 1.5,
          ease: "none",
        })
        .to("#description", {
          text: "I&#39;m Ayoub — A full-stack web magician, blending my design chops with coding prowess to craft websites that are both visually stunning and technically sound.",
          duration: 10,
          delay: 0.5,
          ease: "none",
        })
        .from("#arrow", {
          y: -50,
          delay: 1,
          ease: "power3.out",
          duration: 0.8,
          yoyo: true,
          visibility: "visible",
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
          id="description"
          size={{ initial: "3", sm: "6", md: "7", xl: "8" }}
          style={{
            lineHeight: "calc(1rem + 2vw)",
            display: "block",
          }}
          className="w-full md:w-10/12"
          weight={"light"}
        ></Text>

        <div
          className="flex justify-center  mt-20 md:justify-end invisible"
          id="arrow"
        >
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
