import React from "react";
import styles from "./portfolioCard.module.css";
import Image from "next/image";
import Link from "next/link";
import { ExternalLinkIcon } from "@radix-ui/react-icons";

interface Props {
  technologie?: string;
  link?: string;
  year?: string;
  picture?: string;
}

const PortfolioCard = ({ link, picture, technologie, year }: Props) => {
  return (
    <>
      <div className={styles.card}>
        <div className={styles.allDots}>
          <div className={[styles.dot, styles.dot1].join(" ")}></div>
          <div className={[styles.dot, styles.dot2].join(" ")}></div>
          <div className={[styles.dot, styles.dot3].join(" ")}></div>
          <div className={[styles.dot, styles.dot4].join(" ")}></div>
        </div>

        <Image
          src="/yuta.jpeg"
          className="rounded-[20px]"
          height={350}
          width={350}
          alt="Pic"
        />
        <div className={styles.detail}>
          <h2>
            <span>Technologie </span>
            {technologie}
          </h2>
          <h2>
            <span>Year </span>
            {year}
          </h2>
          <h2 className="flex">
            <div className="flex gap-2 items-center">
              <Link className="underline" href="ayowaaab.github.io/AnimePage">
                Visite Site
              </Link>
              <ExternalLinkIcon />
            </div>
          </h2>
        </div>
      </div>
    </>
  );
};

export default PortfolioCard;
