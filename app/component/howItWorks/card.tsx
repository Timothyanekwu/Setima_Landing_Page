import React from "react";
import { ReactNode } from "react";

type CardProps = {
  title: string;
  subText: string;
  tagIcon: ReactNode;
  tagText: string;
  rotation: string;
};

const Card = ({ title, subText, tagIcon, tagText, rotation }: CardProps) => {
  return (
    <div
      className={`w-full rounded-[14.65] bg-[#FFF5E7] border-[1.4px] border-[#7B380A] border-radial p-4 flex flex-col space-y-6 ${rotation}`}
    >
      <div className="flex items-center space-x-1 py-1.5 px-2.5 rounded-full border border-[#7B380A] w-fit">
        {tagIcon}
        <p className="text-[9.7px] radial-gradient-text ">{tagText}</p>
      </div>
      <div>
        <p className="font-semibold text-xl text-black">{title}</p>
        <p className="text-sm text-neutral-500">{subText}</p>
      </div>
    </div>
  );
};

export default Card;
