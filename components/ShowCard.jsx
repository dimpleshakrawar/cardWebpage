"use client";

import { useState, useEffect } from "react";

import Image from "next/image";
import smallCard1 from "@/images/smallCard1.jpg";
import smallCard2 from "@/images/smallCard2.jpg";
import smallCard3 from "@/images/smallCard3.jpg";
import smallCard4 from "@/images/smallCard4.png";
import card1 from "@/images/cardImage1.jpg";
import card2 from "@/images/card2.jpg";
import card3 from "@/images/card3.jpg";
import card4 from "@/images/card1.jpg";

export default function ShowCard() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSelectedIndex((prevIndexes) => (prevIndexes + 1) % 4);
    }, 2000);
    return () => clearTimeout(timer);
  }, [selectedIndex]);

  const cardImages = [card1, card2, card3, card4];
  const cardIcons = [smallCard1, smallCard2, smallCard3, smallCard4];
  return (
    <div className="p-8">
      <div className="md:mb-10 max-sm:p-6 md:h-[15rem] max-sm:h-[12rem] transition-all duration-300 ease-in-out">
        <Image
          src={cardImages[selectedIndex]}
          alt="cardImage"
          width={350}
          height={250}
        />
      </div>
      <div className="mb-2 max-sm:h-4">
        <div className="flex justify-between">
          {cardIcons.map((card, index) => (
            <div
              key={index}
              className={`transition-all duration-100 ease-in-out ${
                selectedIndex === index && "border-2 border-black"
              }`}
            >
              <Image src={card} alt="cardIcons" width={50} height={50} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
