import Image from "next/image";
import Pic1 from "../../../public/images/HowWeWorkPic1.png"
import Pic2 from "../../../public/images/HowWeWorkPic2.png"
import Pic3 from "../../../public/images/HowWeWorkPic3.png"

const HowWeWork = () => {
  return (
    <div className="p-4 rounded-lg bg-transparent flex flex-col gap-6">
      <div className="md:grid md:grid-cols-2 gap-14 place-items-center md:place-self-center p-8 md:p-16 lg:p-16">
        <div className="flex flex-col gap-2">
          <div>
            <h2 className="text-clamp font-semibold">1# Research & Analysis</h2>
          </div>
          <div>
            <p className="text-clampSm">
              Our agency&apos;s research-driven approach involves gathering insights
              into our clients&apos; industries, competitors, and target audiences to
              develop tailored strategies that deliver exceptional results. This
              deep understanding allows us to create innovative and effective
              campaigns that resonate with our clients&apos; audiences.
            </p>
          </div>
        </div>
        <div >
          <Image src={Pic1} alt="Image" sizes="(max-width: 640px) 1000px" />
        </div>
      </div>

      <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-14 p-8 md:p-16 lg:p-16">
        <div>
          <Image  src={Pic2} alt="Image" sizes="(max-width: 640px) 1000px"/>
        </div>
        <div className="flex flex-col gap-2">
          <div>
            <h2 className="text-clamp font-semibold">
              2# Concept development:
            </h2>
          </div>
          <div>
            <p className="text-clampSm">
              Based on the brief and research, the agency&apos;s creative team
              generates ideas for the campaign. These concepts are presented to
              the client for feedback and refinement.
            </p>
          </div>
        </div>
      </div>

      <div className="md:grid md:grid-cols-2 p-8 gap-14 md:p-16 lg:p-16">
        <div className="flex flex-col gap-2">
          <div>
            <h2 className="text-clamp font-semibold">
              3# Design and execution:
            </h2>
          </div>
          <div>
            <p className="text-clampSm">
              Once the concept is approved, the agency&apos;s designers and
              developers bring it to life. This includes creating visual assets,
              writing copy, and developing multimedia content.
            </p>
          </div>
        </div>
        <div>
          <Image  src={Pic3} alt="Image" sizes="(max-width: 640px) 1000px"/>
        </div>
      </div>
    </div>
  );
};

export default HowWeWork;
