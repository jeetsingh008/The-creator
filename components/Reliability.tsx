import Image from "next/image";
import logo1 from "@/public/logo/Logos1.png";
import logo2 from "@/public/logo/Logos2.png";

const Reliability = () => {
  return (
    <div className="overflow-hidden">
      <div className="grid grid-cols-1 container mx-auto max-w-[80%] py-4 lg:py-8 xl:py-14 gap-8 md:gap-10 lg:gap-12 xl:gap-14 md:grid-cols-2 place-items-center h-full w-full">
        {/* First card */}
        <div className="w-full h-full bg-pink-400 rounded-lg flex flex-col items-center">
          <div className="w-full flex flex-col items-center gap-4">
            <Image
              className="w-full h-auto object-contain"
              src={logo1}
              alt="logos image"
            />
            <Image
              className="w-full h-auto object-contain"
              src={logo2}
              alt="logos image"
            />
          </div>
          <p className="text-clampSm p-6 text-center">
            We&apos;ve participated in events for children&apos;s education,
            health initiatives, and disaster relief. We&apos;re dedicated to
            ongoing involvement and exploring new opportunities.
          </p>
        </div>

        {/* Second card */}
        <div className="w-full h-full p-10 bg-white rounded-lg">
          <h1 className="text-xl md:text-2xl font-semibold">Charity</h1>
          <p className="text-clampSm mt-2 w-4/5">
            Our creative agency supports charities globally, using our skills in
            branding, marketing, and social media to make a positive impact on
            local communities and raise awareness about important causes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Reliability;
