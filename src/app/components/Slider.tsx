"use client";
import BigCard from "./Cards/BigCard";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const Slider = () => {
  const [width, setWidth] = useState(0);
  const corousel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollWidth = corousel.current!.scrollWidth!;
    const offsetWidth = corousel.current!.offsetWidth!;
    setWidth(scrollWidth - offsetWidth);
  }, []);

  return (
    <motion.div className="mx-10">
      <motion.div
        ref={corousel}
        className="corousal text-black flex h-56 cursor-grab overflow-hidden "
      >
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="inner-corousal flex justify-center items-center"
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
