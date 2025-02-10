import Image from "next/image";
import React from "react";

type MyComponentType = {
  imageSrc: string;
  Name: string;
  reviewTxt: string;
  color: string;
};

const BigCard: React.FC<MyComponentType> = ({
  imageSrc,
  Name,
  reviewTxt,
  color,
}) => {
  return (
    <div
      style={{ backgroundColor: color }}
      className="min-w-[12rem] sm:min-w-[16rem] md:min-w-[20rem] h-[75%] shadow-lg rounded-lg p-6 mx-4"
    >
      <div className="relative w-8 lg:w-10"><Image src={imageSrc} alt="" fill /></div>
      <div>
        <h2 className="text-lg lg:text-xl font-semibold">{Name}</h2>
      </div>
      <div>
        <p className="text-xs sm:py-2 font-medium">
          {reviewTxt}
        </p>
      </div>
    </div>
  );
};

export default BigCard;
