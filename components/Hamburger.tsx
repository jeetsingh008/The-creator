"use client"; // Necessary for Next.js (app router) if using client-side interactions

import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const Hamburger = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative z-50">
      {/* Hamburger Icon */}
      <button
        className="p-2 rounded-md text-black"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="absolute right-0 mt-3 w-48 bg-white shadow-lg rounded-lg p-4 flex flex-col space-y-3"
        >
          <a href="#" className="text-gray-700 hover:text-black">
            Home
          </a>
          <a href="#" className="text-gray-700 hover:text-black">
            About
          </a>
          <a href="#" className="text-gray-700 hover:text-black">
            Services
          </a>
          <a href="#" className="text-gray-700 hover:text-black">
            Contact
          </a>
        </motion.div>
      )}
    </div>
  );
};

export default Hamburger;
