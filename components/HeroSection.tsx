import Image from "next/image";
import React from "react";
import leftpic from "@/public/Group-1.png";
import rightpic from "@/public/Group-2.png";
import textHighlight from "@/public/LineHero.png";

const HeroSection = () => {
  return (
    <section className="relative h-[430px] tracking-wider mt-12 sm:m-0 sm:h-[600px] lg:h-[710px] overflow-hidden flex items-center justify-center">
      <div className="relative container w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        {/* Left background image */}
        <div className="absolute left-[-100px] sm:left-[-150px] lg:left-[-120px] top-1/3 sm:top-1/3 -translate-y-1/3 w-40 sm:w-60 lg:w-72 h-auto">
          <Image
            src={leftpic}
            alt="left background pic"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 30vw, 400px"
            className="object-contain"
          />
        </div>

        {/* Right background image */}
        <div className="absolute right-[-100px] lg:mt-6 sm:right-[-150px] lg:right-[-120px] top-1/2 sm:top-1/2 -translate-y-1/2 w-40 sm:w-60 lg:w-72 h-auto">
          <Image
            src={rightpic}
            alt="right background pic"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 30vw, 400px"
            className="object-contain"
          />
        </div>

        {/* Hero Content */}
        <div className="relative max-w-[75%] sm:max-w-[70%] lg:max-w-2xl">
          <h1 className="text-2xl sm:text-5xl lg:text-6xl lg:pb-2 font-bold relative">
            Spark your brand&apos;s{" "}
            <span className="relative inline-block">
              <div className="absolute inset-0 -z-10">
                <Image
                  src={textHighlight}
                  alt="text bg"
                  fill
                  className="w-full h-full object-contain"
                />
              </div>
              imaginative
            </span>{" "}
            flair with us
          </h1>

          <p className="mt-2 sm:mt-4 px-4 text-xs leading-tight sm:text-base text-gray-700">
            Our team combines strategy, design, and technology to breathe life
            into your brand. Collaborate with us to leave a lasting impression
            on your audience.
          </p>
          <button className="primary-btn mt-4">Get Started</button>
        </div>

        {/* Input box */}

        <div className="w-1/2 min-w-24 lg:w-[45%] xl:w-[55%] flex m-auto mt-8 bg-white px-3 py-1 rounded-full">
          <input
            className="w-full placeholder:text-xs md:placeholder:text-sm rounded-lg py-1 outline-none placeholder:text-gray-300"
            type="text"
            placeholder="Enter your Email"
          />
          <button className="primary-btn text-sm md:text-base">Join</button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
