import React from "react";
import Image from "next/image";
import logo from "@/public/Logo.png";
import Hamburger from "./Hamburger";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="fixed top-0 w-full p-4 z-50 min-w-[260px] tracking-wider bg-[#F8F5F0]">
      <nav className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex gap-2 cursor-pointer">
            <Image src={logo} alt="logo" height={25} width={25} quality={100} />
            <h2 className="font-semibold text-lg">The Creator</h2>
          </div>
          {/* Menu */}
          <div className="hidden md:block">
            <ul className="flex space-x-5 font-medium !leading-snug">
              <Link href="/" legacyBehavior>
                <a className="hover:text-primary">Partners</a>
              </Link>
              <Link href="/" legacyBehavior>
                <a className="hover:text-primary">How We Work</a>
              </Link>
              <Link href="/" legacyBehavior>
                <a className="hover:text-primary">Review</a>
              </Link>
              <Link href="/" legacyBehavior>
                <a className="hover:text-primary">Charity</a>
              </Link>
            </ul>
          </div>

          {/* Join now button */}
          <button className="primary-btn text-sm md:text-base hidden md:block ">
            Join The Creator
          </button>

          <button className="primary-btn md:hidden text-xs font-semibold">Join</button>
          {/* Mobile hamburger menu */}
          <div className="md:hidden">
            <Hamburger />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
