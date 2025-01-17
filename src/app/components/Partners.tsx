import Image from "next/image";
import PartnersSlider from "./PartnersSlider";
import img from "../../../public/images/line3.png"

const Partners = () => {
  return (
    <div className="relative h-[30vh] sm:h-[31vh] md:h-[36vh] lg:h-[45vh] xl:h-[45vh] 2xl:h-[55vh]  w-full p-4 bg-transparent">
      <div className="absolute z-0 h-2/5 w-2/5 md:h-2/4 md:w-2/5">
        <div>
          <Image
            src={img}
            alt="Group 1"
            sizes="(min-width: 640px) 1000px"
          />
        </div>
      </div>

      <div className="absolute top-4 left-1/2 w-2/3 transform translate-x-[-50%] text-xl md:text-4xl md:top-10 text-center">
        <h1 className="text-[#1F392C] text-center font-sans font-medium text-clamp">
          Contact us today to explore partnership opportunities!
        </h1>
      </div>
      {/* Foreground */}
      <div className="w-full absolute mt-16 md:mt-28 py-4">
        <PartnersSlider />
      </div>
    </div>
  );
};

export default Partners;
