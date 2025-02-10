"use client";
import BigCard from "@/components/BigCard";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const Slider = () => {
  const [width, setWidth] = useState(0);
  const corousel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (corousel.current) {
      const scrollWidth = corousel.current.scrollWidth;
      const offsetWidth = corousel.current.offsetWidth;
      setWidth(scrollWidth - offsetWidth);
    }
  }, []);

  return (
    <motion.div className="md:mx10">
      <motion.div
        ref={corousel}
        className="corousal text-black border-none outline-none flex h-72 p-5 cursor-grab overflow-hidden bg-blue-300 bg-gradient-to-r from-white via-white to-[#F8F5F0]"
      >
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="inner-corousal flex justify-center items-center bg-transparent"
        >
          <BigCard
            imageSrc="/images/Avatar1.png"
            Name="John Li"
            reviewTxt="The Creator innovative ideas, strategic approach, and outstanding results have left a lasting impression on me as a blogger, making them a standout in the creative industry."
            color="#FF60E6"
          />
          <BigCard
            imageSrc="/images/Avatar2.png"
            Name="Amanda Steen"
            reviewTxt="The Creator innovative ideas, strategic approach, and outstanding results have left a lasting impression on me as a blogger, making them a standout in the creative industry."
            color="#FFB6C1"
          />
          <BigCard
            imageSrc="/images/Avatar3.png"
            Name="John Li"
            reviewTxt="The Creator innovative ideas, strategic approach, and outstanding results have left a lasting impression on me as a blogger, making them a standout in the creative industry."
            color="#DA70D6"
          />
          <BigCard
            imageSrc="/images/Avatar3.png"
            Name="John Li"
            reviewTxt="The Creator innovative ideas, strategic approach, and outstanding results have left a lasting impression on me as a blogger, making them a standout in the creative industry."
            color="#FF9999"
          />
          <BigCard
            imageSrc="/images/Avatar3.png"
            Name="John Li"
            reviewTxt="The Creator innovative ideas, strategic approach, and outstanding results have left a lasting impression on me as a blogger, making them a standout in the creative industry."
            color="#D74894"
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Slider;
