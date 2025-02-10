import Image from "next/image";
import React from "react";
import Leftpic from "@/public/Group-3.png";
import Rightpic from "@/public/Group-4.png";

const MakeItBig2 = () => {
  return (
    <div className="">
      <div className="relative container mx-auto min-h-[500px] md:py-4 xl:py-6 flex justify-center items-center ">
        
        {/* Background Images */}
        <div className="absolute flex justify-between items-center inset-0 w-full h-full z-[-1]">
          <div className="translate-x-[-20%] sm:translate-x-[-15%] lg:translate-x-[-10%]">
            <Image
              src={Leftpic}
              alt="Left Background"
              sizes="(max-width: 768px) 80vw, 50vw"
              className="w-[150px] sm:w-[250px] md:w-[350px] lg:w-[400px]"
            />
          </div>
          <div className="translate-x-[30%] sm:translate-x-[25%] lg:translate-x-[30%]">
            <Image
              src={Rightpic}
              alt="Right Background"
              sizes="(max-width: 768px) 80vw, 50vw"
              className="w-[150px] sm:w-[250px] md:w-[350px] lg:w-[400px]"
            />
          </div>
        </div>

        {/* Content Box */}
        <div className="w-[90%] max-w-[1000px] bg-[#fefbf1] xl:bg-transparent shadow-lg bg-opacity-90 h-[90%] md:w-[80%] md:h-[80%] lg:w-[60%] lg:h-[70%] flex flex-col justify-center items-center gap-6 md:gap-7 p-4 sm:p-6 lg:p-10 rounded-2xl md:shadow-none py-6 lg:py-8 xl:py-12">
          <h1 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold max-w-[85%] leading-none">
            We do it for you. No more struggling to grow on any Platform
          </h1>
          <h3 className="text-center text-lg sm:text-xl md:text-2xl xl:text-3xl max-w-[85%]">
            Work with our expert strategists, writers, editors, and producers to
            create content that transforms your content.
          </h3>
          <p className="text-center text-sm sm:text-base md:text-lg xl:text-xl xl:p-6 max-w-[85%]">
            No managing a team of freelancers or spending countless hours trying
            to master all the skillsets Platform requires - all you need is The
            Creator.
          </p>
        </div>

      </div>
    </div>
  );
};

export default MakeItBig2;
