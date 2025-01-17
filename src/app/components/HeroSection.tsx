import Image from "next/image";
import LeftPic from '../../../public/images/Group-1.png'
import RightPic from '../../../public/images/Group-2.png'
const HeroSection = () => { 
  return (
    <div className="z-0 relative overflow-hidden h-[23vh] sm:h-[32vh] md:h-[40vh] lg:h-[50vh] xl:h-[70vh] 2xl:h-[90vh] w-full md:mt-0">
      {/* Background */}
      <div className="w-full flex flex-nowrap justify-between items-center gap-4">
        {/* Left Part */}
        <div className="w-1/4 md:w-[25%] translate-x-[-30%] md:translate-x-[-20%] bg-opacity-70 rounded-lg">
          <div className="translate-x-[-12%]">
            <Image
              src={LeftPic}
              alt="Group 1"
              sizes="(min-width: 640px) 1000px"
            />
          </div>
        </div>
        {/* Right Part */}
        <div className="w-1/4 md:w-[25%] md:translate-x-[20%] h-auto bg-opacity-70 rounded-lg mt-">
          <div className="translate-x-[14%]">
          <Image
              src={RightPic}
              alt="Group 1"
              sizes="(min-width: 640px) 1000px"
            />
          </div>
        </div>
      </div>

      {/* Foreground */}
      <div className="absolute top-1/2 left-1/2 transform translate-x-[-50%] translate-y-[-50%] w-3/5 md:w-3/5 lg:w-3/5 font-semibold text-[#1F392C]">
        {/* Heading */}
        <h1 className="text-center text-clamp">
          Spark your brand&apos;s imaginative flair with us
        </h1>

        {/* Subtext */}
        <p className="mt-2 text-xs md:text-sm lg:text-base md:font-normal text-center">
          Our team combines strategy, design, and technology to breathe life
          into your brand. Collaborate with us to leave a lasting impression on
          your audience.
        </p>

        {/* Input and Button */}
        <div className="w-full lg:w-[45%] xl:w-[55%] flex m-auto mt-8 bg-white px-2 py-1 rounded-full">
          <input
            className="w-full rounded-lg py-1 placeholder:text-gray-400"
            type="text"
            placeholder="Enter your Email"
          />
          <button className="bg-[#FF60E6] rounded-full px-3 py-1 text-black text-lg">
            Join
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
