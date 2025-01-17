import Image from "next/image";
import Slider from "./Slider";

const Review = () => {
  return (
    <div className="p-10 w-full flex flex-col gap-6 m-auto">
      <div className="w-full border border-1 border-[#FF60E6] border-dashed text-center"></div>

      {/* Headings and sub-headings */}
      <div className="text-xs rounded-lg md:text-sm lg:text-base xl:text-lg text-center">
        <p>Hear from our customers from Top YouTube Channel</p>
      </div>
      <div className="text-clamp rounded-xl font-semibold text-start border inline border-[#fe81eb] border-dotted p-2">
        <h1>
          We&apos;ve taught{" "}
          <span>
            <div className="relative inline align-middle w-10 md:w-12">
              <Image fill src="/images/Person1.png" alt="" />
            </div>
          </span>{" "}
          over 3,000 creators how to{" "}
          <span>
            <div className="relative inline align-middle w-10 md:w-12">
              <Image fill src="/images/Person2.png" alt="" />
            </div>
          </span>{" "}
          grow on any Platform{" "}
          <span>
            <div className="relative inline align-middle w-10 md:w-12">
              <Image fill src="/images/Person3.png" alt="" />
            </div>
          </span>
        </h1>
      </div>

      <div>
        <h2 className="text-clamp font-semibold text-start inline border border-[#fe81eb] border-dotted p-2">
          Now we can do it for you
        </h2>
      </div>
      <div></div>

      <div>
        <h2 className="text-clampSm font-mono font-bold text-start inline p-2">
          See what our famous clients write about us:{" "}
          <span className="text-sm text-blue-400 cursor-grab">
            (grab to slide the cards)
          </span>
        </h2>
      </div>
      <div></div>

      {/* Customer Reviews Slider*/}
      <Slider />
    </div>
  );
};

export default Review;
