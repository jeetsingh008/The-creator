import React, { useState } from "react";

const UserMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      {/* Hamburger Button */}
      <button
        className="flex flex-col items-center justify-center w-10 h-10 space-y-1 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div
          className={`w-6 h-0.5 bg-gray-800 transition-transform ${
            isOpen ? "rotate-45 translate-y-1.5" : ""
          }`}
        ></div>
        <div
          className={`w-6 h-0.5 bg-gray-800 transition-opacity ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        ></div>
        <div
          className={`w-6 h-0.5 bg-gray-800 transition-transform ${
            isOpen ? "-rotate-45 -translate-y-1.5" : ""
          }`}
        ></div>
      </button>

      {/* Dropdown Menu */}
      {isOpen ? (
        <div className="absolute top-12 left-0 w-40 bg-white rounded-lg shadow-md">
          <ul className="flex flex-col">
            <li className="px-4 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer">
              Partners
            </li>
            <li className="px-4 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer">
              How we work
            </li>
            <li className="px-4 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer">
              Review
            </li>
            <li className="px-4 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer">
              Charity
            </li>
          </ul>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default UserMenu;
