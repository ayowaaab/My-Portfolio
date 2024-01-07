import Image from "next/image";
import React from "react";
import styles from "./portfolioCard.module.css";
import Link from "next/link";

interface Props {
  picture: string;
  technologie: string;
  linkUrl: string;
  year: string;
}

const PortfolioCard = ({ technologie, linkUrl, year, picture }: Props) => {
  return (
    <>
      <div className={styles.bothBlurCard}>
        <div className={styles.card}>
          <div className={[styles.cardSide, styles.left].join(" ")}>
            <div>
              <Image
                src={picture}
                alt="yuta"
                className={styles.cardSideImg}
                width={1000}
                height={1000}
              />
              <div className="flex flex-col gap-0">
                <p>
                  <strong className="uppercase text-neutral-400">
                    technologie 
                  </strong>
                  {technologie}
                </p>
                <Link href={linkUrl}>
                  <strong className="uppercase text-neutral-400">link </strong>
                  {linkUrl}
                </Link>
                <p>
                  <strong className="uppercase text-neutral-400">year </strong>
                  {year}
                </p>
              </div>
              <div className={styles.dots}>
                <div className={styles.dot + " left-0 top-0"}></div>
                <div className={styles.dot + " right-0 top-0"}></div>
                <div className={styles.dot + " left-0 bottom-0"}></div>
                <div className={styles.dot + " left-0 bottom-0"}></div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.cardSide}>
            <div>
              <Image
                src={picture}
                alt="yuta"
                className={styles.cardSideImg}
                width={1000}
                height={1000}
              />
              <div className="flex flex-col gap-0">
                <p>
                  <strong className="uppercase text-neutral-400">
                    technologie 
                  </strong>
                  {technologie}
                </p>
                <Link href={linkUrl}>
                  <strong className="uppercase text-neutral-400">link </strong>
                  {linkUrl}
                </Link>
                <p>
                  <strong className="uppercase text-neutral-400">year </strong>
                  {year}
                </p>
              </div>
              <div className={styles.dots}>
                <div className={styles.dot + " left-0 top-0"}></div>
                <div className={styles.dot + " right-0 top-0"}></div>
                <div className={styles.dot + " left-0 bottom-0"}></div>
                <div className={styles.dot + " left-0 bottom-0"}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={[styles.card, styles.mainCard].join(" ")}>
        <div className={styles.cardSide}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <div>
            <Image
              src={picture}
              alt="yuta"
              width={1000}
              height={1000}
              className={styles.cardSideImg}
            />
            <div>
              <p>
                <strong className="uppercase text-[#808080]">technologie </strong>
                {technologie}
              </p>
              <Link href={"https://"+linkUrl}>
                <strong className="uppercase text-[#808080]">link </strong>
                {linkUrl}
              </Link>
              <p>
                <strong className="uppercase text-[#808080]">year </strong>
                {year}
              </p>
            </div>
            <div className={styles.dots}>
              <div className={styles.dot + " left-0 top-0"}></div>
              <div className={styles.dot + " right-0 top-0"}></div>
              <div className={styles.dot + " left-0 bottom-0"}></div>
              <div className={styles.dot + " left-0 bottom-0"}></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PortfolioCard;
