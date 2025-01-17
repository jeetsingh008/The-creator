import Image from "next/image";
import React from "react";
import Leftpic from "../../../public/images/Group-3.png";
import Rightpic from "../../../public/images/Group-4.png";

const MakeItBig2 = () => {
  return (
    <div className="relative  lg:bg-transparent flex justify-center items-center h-[45vh] md:h-[50vh] lg:h-[80vh] overflow-hidden">
      {/* Background */}
      <div className="absolute flex justify-between p-0 m-auto inset-0 w-full h-full z-[-1]">
        <div className="translate-x-[-10%]">
          <Image
            src={Leftpic}
            alt="Group 1"
            sizes="(min-width: 640px) 1200px"
          />
        </div>
        <div className="translate-x-[35%]">
          <Image
            src={Rightpic}
            alt="Group 1"
            sizes="(min-width: 640px) 1200px"
          />
        </div>
      </div>

      {/* Content */}
      <div className="w-[90%] bg-[#fefbf1] shadow-lg bg-opacity-85 h-[90%] md:w-[80%] md:h-[80%] lg:w-[60%] lg:h-[70%] flex flex-col justify-center items-center gap-4 md:gap-5 p-3 md:p-6 lg:bg-transparent rounded-xl md:shadow-none py-4 lg:py-6 xl:py-10 lg:p-14">
        <h1 className="text-center text-clamp font-semibold">
          We do it for you. No more struggling to grow on any Platform
        </h1>
        <h3 className="text-center text-[1.3rem] md:text-[1.2rem] lg:text-[1.4rem] xl:text-[1.7rem]">
          Work with our expert strategists writers, editors, and producers to
          create content that transforms your content
        </h3>
        <p className="text-center text-[0.8rem] md:text-[1rem] lg:text-[1.1rem] xl:text-[1.1rem] xl:p-6">
          No managing a team of freelancers or spending countless hours trying
          to master all the skillsets Platform requires - all you need is The
          Creator
        </p>
      </div>
    </div>
  );
};

export default MakeItBig2;
