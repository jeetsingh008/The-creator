"use client";
import React from "react";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import SmallCard from "@/components/SmallCard";

const PartnersSlider = () => {
  const [width, setWidth] = useState(0);
  const corousel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollWidth = corousel.current?.scrollWidth ?? 0;
    const offsetWidth = corousel.current?.offsetWidth ?? 0;
    setWidth(scrollWidth - offsetWidth);
  }, []);

  return (
    <motion.div>
      <motion.div
        ref={corousel}
        className="corousal text-black bg-gradient-to-r from-pink-100 to-white rounded-2xl flex h-48 overflow-hidden lg:overflow-visible"
      >
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: width > 0 ? -width : 0 }}
          className="inner-corousal flex gap-6 justify-center items-center p-4"
        >
          <SmallCard imageSrc="/logo/PinterestLogo.png" color="#FF60E6" />
          <SmallCard imageSrc="/logo/TwitterLogo.png" color="#FFADF2" />
          <SmallCard imageSrc="/logo/PinterestLogo.png" color="#FF60E6" />
          <SmallCard imageSrc="/logo/PinterestLogo.png" color="#FF60E6" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default PartnersSlider;
