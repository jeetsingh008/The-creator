"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import UserMenu from "./UserMenu";

const Header = () => {

  return (
    <motion.div className="flex bg-[#F8F5F0] h-16 sticky top-0 z-50 px-8 p-2 justify-between items-center ">
      {/* logo and name */}
      <motion.div
        initial={{ x: -200 }} // Start from outside the screen (left)
        animate={{ x: 0 }} // End at the original position
        transition={{ type: "spring", stiffness: 100, damping: 10 }}
        className="flex gap-2 justify-center items-center"
      >
        <Image height={24} width={24} src="/Logo.png" alt="Logo of creato" />
        <h1 className="text-[#1F392C] text-xl font-medium">The Creator</h1>
      </motion.div>

      {/* navigation */}
      <div className="hidden md:block">
        <div className="flex gap-4 text-[#1F392C]">
          <h5 className="font-normal hover:text-pink-600 cursor-pointer">
            Partners
          </h5>
          <h5 className="font-normal hover:text-pink-600 cursor-pointer">
            How we work
          </h5>
          <h5 className="font-normal hover:text-pink-600 cursor-pointer">
            Review
          </h5>
          <h5 className="font-normal hover:text-pink-600 cursor-pointer">
            Charity
          </h5>
        </div>
      </div>

      {/* Hamburger Button */}
      <div className="absolute flex justify-center left-[50%] translate-x-[-50%] md:hidden">
        <UserMenu />
      </div>

      {/* join us button */}
      <motion.div
        initial={{ x: 200 }} // Start from outside the screen (left)
        animate={{ x: 0 }} // End at the original position
        transition={{ type: "spring", stiffness: 100, damping: 10 }}
      >
        <button className="bg-[#FF60E6] text-sm font-semibold px-5 py-2 rounded-full hover:scale-105 ease-in-out duration-100">
          Join The Creator
        </button>
      </motion.div>
    </motion.div>
  );
};

export default Header;
