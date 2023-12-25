import { Code, Text } from "@radix-ui/themes";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <>
      <header className="flex justify-between items-center pt-10">
        <Image
          src="Logo.svg"
          alt="logo"
          className="w-32"
          width={0}
          height={0}
        />
        <nav className="flex gap-[85px]">
          <Link
            target="_blank"
            className="opacity-50 hover:opacity-100 duration-300"
            href="https://github.com/ayowaaab"
          >
            <Code variant="ghost" highContrast>
              Github
            </Code>
          </Link>
          <Link
            target="_blank"
            className="opacity-50 hover:opacity-100 duration-300"
            href="https://www.instagram.com/ayoub__dahmen/"
          >
            <Code variant="ghost" highContrast>
              Instagram
            </Code>
          </Link>
          <Link
            target="_blank"
            className="opacity-50 hover:opacity-100 duration-300"
            href="https://www.facebook.com/ayoub.dahmen.87"
          >
            <Code variant="ghost" highContrast>
              Linkdin
            </Code>
          </Link>
        </nav>
        <Link href="#" className="opacity-50 hover:opacity-100 duration-300">
          <Code variant="ghost" highContrast>
            About
          </Code>
        </Link>
      </header>
    </>
  );
};

export default NavBar;
