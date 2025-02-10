import React from "react";
import PartnersSlider from "./PartnersSlider";
import Image from "next/image";
import textHighlight from "@/public/linePartners.png";
import bgImage from "@/public/partnersBG.png"; // Replace with actual image

const PartnersSection = () => {
  return (
    <section className="relative p-4 min-h-[450px] md:min-h-[600px flex items-center">
      {/* Background Image (Left Half) */}
      <div className="absolute left-12 top-14 xl:top-10 -rotate-12 w-1/2 h-full hidden lg:block">
        <div className="relative max-w-md">
          <Image
            src={bgImage}
            alt="Background"
            layout="responsive"
            className="object-cover"
            quality={100}
          />
        </div>
      </div>

      {/* Content Section */}
      <div className="relative z-10 container mx-auto grid grid-cols-1 gap-10 place-items-center">
        {/* Heading */}
        <div className="w-2/3 mx-auto">
          <div className="w-full">
            <h1 className="text-center text-xl sm:text-4xl 2xl:text-5xl tracking-wide font-bold">
              Contact us today to explore partnership{" "}
              <span className="relative inline-block">
                opportunities
                {/* Highlighter Image Beneath Text */}
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-full h-auto">
                  <Image
                    src={textHighlight}
                    alt="text bg"
                    width={200}
                    height={50}
                    className="object-contain"
                  />
                </div>
              </span>
            </h1>
          </div>
        </div>

        {/* Card */}
        <div className="min-h-40 w-4/5 py-4 px-10 lg:flex lg:items-center gap-4 rounded-2xl bg-white">
          {/* Text */}
          <div className="text-center lg:text-start lg:w-1/3">
            <h1 className="text-2xl md:text-2xl font-semibold tracking-wider">
              Partners:
            </h1>
            <p className="p-4 lg:p-0 lg:py-2 text-xs sm:text-sm md:text-base leading-relaxed">
              Our creative agency forms strong partnerships with diverse
              businesses, from startups to global brands, based on trust,
              respect, and a shared vision for success.
            </p>
          </div>
          {/* Slider */}
          <div className="lg:w-2/3 overflow-hidden">
            <PartnersSlider />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
