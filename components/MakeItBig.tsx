import Image from "next/image";
import React from "react";
import img from "@/public/Shocked-girl.png";

const MakeItBig = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col justify-center items-center p-12">
        <div>
          <h1 className="text-center text-2xl font-sans font-medium md:text-5xl pb-6 md:p-6 lg:p-10">
            Making it big on any Platform is tougher than you think
          </h1>
        </div>

        <div className="p-4 max-w-2xl">
          <Image
            src={img}
            alt="Shocked girl pic"
            sizes="(max-width: 640px) 250px, (max-width: 768px) 500px,(max-width: 1024px) 700px,(max-width: 1280px) 700px, 1200px"
            quality={100}
          />
        </div>
      </div>
    </div>
  );
};

export default MakeItBig;
