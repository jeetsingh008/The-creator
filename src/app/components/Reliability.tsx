import Image from "next/image";

const Reliability = () => {
  return (
    <div className="grid grid-cols-1 p-12 md:p-12 lg:p-14 xl:p-16 2xl:p-20 gap-8 md:gap-10 lg:gap-12 xl:gap-14 md:grid-cols-2  place-items-center h-full w-full">
      {/* First card */}
      <div className="w-full h-full bg-pink-400 rounded-lg">
        <div className="relative my-4 w-full">
          <Image className="w-full" src="/images/Logos1.png" alt="logos image" fill />
        </div>
        <div className="relative w-full">
          <Image src="/images/Logos2.png" alt="logos image" fill/>
        </div>
        <p className="text-clampSm p-6">We&apos;ve participated in events for children&apos;s education, health initiatives, and disaster relief. We&apos;re dedicated to ongoing involvement and exploring new opportunities.</p>
      </div>

      {/* Second card */}
      <div className="w-full h-full p-6 bg-white rounded-lg">
        <h1 className="text-clamp font-semibold">Charity</h1>
        <p className="text-clampSm mt-2">Our creative agency supports charities globally, using our skills in branding, marketing, and social media to make a positive impact on local communities and raise awareness about important causes. </p>
      </div>
    </div>
  );
};

export default Reliability;
