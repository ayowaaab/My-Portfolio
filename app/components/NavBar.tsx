import { Text } from "@radix-ui/themes";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const NavBar = () => {
  const links = [
    { label: "Github", href: "https://github.com/ayowaaab" },
    { label: "Instagram", href: "https://www.instagram.com/ayoub__dahmen/" },
    {
      label: "Linkdin",
      href: "https://www.linkedin.com/in/ayoub-dahmen-040480268/",
    },
  ];
  return (
    <>
      <header className="flex flex-col md:flex-row justify-center md:justify-between items-center pt-10 mb-20 gap-5 ">
        <Image
          src="Logo.svg"
          alt="logo"
          className="w-32 hidden md:block"
          width={0}
          height={0}
        />
        <nav className="flex md:gap-[85px] gap-[30px]">
          {links.map((link) => (
            <Link
              target="_blank"
              className="opacity-50 hover:opacity-100 transition-colors"
              key={link.href}
              href={link.href}
            >
              <Text size={{ initial: "2", lg: "3", xl: "4" }}>
                {link.label}
              </Text>
            </Link>
          ))}
        </nav>
        <Link
          href="#"
          className="opacity-50 hover:opacity-100 transition-colors"
        >
          <Text className="font-light text-1">ayoub1dahmen@gmail.com</Text>
        </Link>
      </header>
    </>
  );
};

export default NavBar;
