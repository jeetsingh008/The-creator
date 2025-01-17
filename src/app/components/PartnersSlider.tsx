"use client";
import React from "react";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import SmallCard from "./Cards/SmallCard";

const PartnersSlider = () => {
  const [width, setWidth] = useState(0);
  const corousel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollWidth = corousel.current?.scrollWidth ?? 0;
    const offsetWidth = corousel.current?.offsetWidth ?? 0;
    setWidth(scrollWidth - offsetWidth);
  }, []);

  return (
    <motion.div className="mx-10">
      <motion.div
        ref={corousel}
        className="corousal text-black flex h-56 cursor-grab overflow-hidden"
      >
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: width > 0 ? -width : 0 }}
          className="inner-corousal flex gap-6 justify-center items-center p-4"
        >
          <SmallCard imageSrc= "/images/TwitterLogo.png" color="#FFFFFF" />
          <SmallCard imageSrc= "/images/PinterestLogo.png" color="#FFFFFF" />
          <SmallCard imageSrc= "/images/TwitterLogo.png" color="#FFFFFF" />
          <SmallCard imageSrc= "/images/PinterestLogo.png" color="#FFFFFF" />
          <SmallCard imageSrc= "/images/TwitterLogo.png" color="#FFFFFF" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default PartnersSlider;
