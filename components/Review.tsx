import Image from "next/image";
import Slider from "./Slider";
import pic1 from "@/public/Person1.png";
import pic2 from "@/public/Person2.png";
import pic3 from "@/public/Person3.png";
import highlight from "@/public/reviewLine.png";
import highlight2 from "@/public/lineReview.png";

const Review = () => {
  return (
    <div>
      <div className="p-10 container w-full flex flex-col gap-6 mx-auto leading-none tracking-wider">

        {/* Headings and sub-headings */}
        <div className="text-xs rounded-lg md:text-sm xl:text-base text-center">
          <p>Hear from our customers from Top YouTube Channel</p>
        </div>
        <div className="text-clamp rounded-xl font-semibold text-start inline p-2">
          <h1 className="text-lg md:text-xl lg:text-2xl">
            We&apos;ve taught{" "}
            <span className="relative inline-block w-6 md:w-8 h-6 md:h-8 align-middle">
              <Image fill className="object-cover" src={pic1} alt="Person1" />
            </span>{" "}
            over 3,000 creators how to{" "}
            <span className="relative inline-block w-6 md:w-8 h-6 md:h-8 align-middle">
              <Image fill className="object-cover" src={pic2} alt="Person1" />
            </span>{" "}
            <span className="relative inline-block">
              <div className="absolute inset-0 -z-10">
                <Image
                  src={highlight}
                  alt="text bg"
                  fill
                  className="w-full h-full object-contain"
                />
              </div>
              grow on any Platform
            </span>{" "}
            <span className="relative inline-block w-6 md:w-8 h-6 md:h-8 align-middle">
              <Image fill className="object-cover" src={pic3} alt="Person1" />
            </span>
          </h1>
        </div>

        <div>
          <h2 className="font-semibold text-lg md:text-xl text-start inline p-2">
            Now{" "}
            <span className="relative inline-block">
              we can do
              {/* Highlighter Image Beneath Text */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-full h-auto">
                <Image
                  src={highlight2}
                  alt="text bg"
                  width={200} // Adjust width dynamically
                  height={50} // Adjust height dynamically
                  className="object-contain"
                />
              </div>
            </span>{" "}
            it for you
          </h2>
        </div>
        <div>
          <p className="text-lg font-semibold p-2">
            See what our famous clients write about us:
          </p>
        </div>
        {/* Customer Reviews Slider*/}
        <Slider />
      </div>
    </div>
  );
};

export default Review;
