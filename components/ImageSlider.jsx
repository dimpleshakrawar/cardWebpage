"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const ImageSlider = () => {
  const [positionIndexes, setPositionIndexes] = useState([0, 1, 2]);

  const images = [
    "https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171_640.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQevrEvKxXr9eE2U61FSffFOcvHB869gdetIw&usqp=CAU",
    "https://img.freepik.com/premium-photo/red-blue-stary-night-cosmos-background-wallpaper_966938-535.jpg",
  ];

  const positions = ["center", "left", "right"];

  const imageVariants = {
    center: { x: "0%", scale: 1, zIndex: 5 },
    left: { x: "-50%", scale: 0.5, zIndex: 3 },
    right: { x: "50%", scale: 0.5, zIndex: 3 },
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setPositionIndexes((prevIndexes) => {
        const updatedIndexes = prevIndexes.map(
          (prevIndex) => (prevIndex + 1) % 3
        );
        return updatedIndexes;
      });
    }, 2000);

    return () => clearTimeout(timer);
  }, [positionIndexes]);

  return (
    <div className="md:w-full md:px-[9rem] md:py-[6rem] max-sm:p-4">
      {images.map((image, index) => (
        <motion.img
          key={index}
          src={image}
          alt={image}
          className="rounded-[12px] absolute max-sm:w-[70%] md:w-[30%]"
          initial="center"
          animate={positions[positionIndexes[index]]}
          variants={imageVariants}
          transition={{ duration: 0.5 }}
        />
      ))}
    </div>
  );
};

export default ImageSlider;
