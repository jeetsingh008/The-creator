import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="w-full h-full px-6 flex flex-col gap-14 ">
      {/* heading subheading */}
      <div className="w-auto text-center">
        <h1 className="text-clamp font-semibold">
          We are waiting for you to contact us
        </h1>
        <p className="text-clampSm">
          You can write to us at any time and get an instant response.
        </p>
      </div>

      {/* Input box */}
      <div className="w-[80%] lg:w-[40%] xl:w-[35%] flex m-auto bg-white p-2 rounded-full">
        <input
          className="w-full rounded-lg py-1 placeholder:text-gray-400"
          type="text"
          placeholder="Enter your Email"
        />
        <button className="bg-[#FF60E6] rounded-full px-3 py-1 text-black text-lg">
          Join
        </button>
      </div>

      {/* Links and Logos */}
      <div className="flex justify-between items-center px-8  mb-8">
        <div className="flex gap-1">
          <span>&copy;</span>
          <p>Copywriting</p>
        </div>
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
        <div className="flex gap-2">
          <div className="w-4 h-4 relative">
            <Image fill src="/images/FooterLogo1.png" alt="Instagram logo" />
          </div>
          <div className="w-4 h-4 relative">
            <Image fill src="/images/FooterLogo2.png" alt="Facebook logo" />
          </div>
          <div className="w-4 h-4 relative">
            <Image fill src="/images/FooterLogo3.png" alt="LinkedIN logo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
