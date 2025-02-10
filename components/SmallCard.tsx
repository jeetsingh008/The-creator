import Image from "next/image";
import React, { FC } from "react";
type ComponentType = {
  imageSrc: string;
  color: string;
};

const SmallCard: FC<ComponentType> = ({ color, imageSrc }) => {
  return (
    <div
      style={{ backgroundColor: color }}
      className="flex flex-col gap-2 min-w-[18rem] p-3 rounded-lg shadow-md"
    >
      <div className="flex justify-between ">
        <div className="relative w-6 h-6">
          <Image className="" src={imageSrc} alt="Twitter Logo" fill />
        </div>
        <h4>2008-TODAY</h4>
      </div>
      <div>
        <p className="text-xs lg:text-[0.8rem]">
          Provides communication between the agency and brands. Collects
          customer feedback and encourages discussion about the product, which
          helps improve it.
        </p>
      </div>
    </div>
  );
};

export default SmallCard;
