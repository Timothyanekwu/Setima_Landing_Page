import React from "react";
import Pencil from "../../../public/icons/pencil";
import HeroBG from "./heroBG";

const Hero = () => {
  return (
    <div className="flex flex-col items-center pt-24 xl:pt-20 pb-12 relative overflow-hidden px-6">
      <div className="relative rounded-full gradient-border">
        <div className="flex items-center rounded-full bg-[#fff8f2] w-fit space-x-3 px-3 py-1 ">
          <Pencil />
          <p className="text-sm font-medium radial-gradient-text">
            AI-Powered Market Research
          </p>
        </div>
      </div>

      <div className="flex flex-col mt-4 ">
        <p className="font-bold text-center text-6xl md:text-7xl tracking-tight md:tracking-normal text-[#472308]">
          Market Research - Simplified
        </p>
        <p
          className="font-bold text-6xl md:text-7xl text-center radial-gradient-text 
"
        >
          For Your Business
        </p>
        <p className="text-lg text-[#111827] text-center py-3 md:w-[60%] mx-auto">
          Transform any business idea into data-driven decisions with AI that
          analyzes markets, competitors, and opportunities seamlessly.
        </p>
      </div>

      <div className="flex w-fit mx-auto space-x-2 mt-5">
        <div className="bg-[#FFB742] rounded-2xl px-6 py-3 mt-6 w-fit cursor-pointer">
          <p className="text-[#301705] font-semibold">Get Started</p>
        </div>
        <div className="bg-[#301705] rounded-2xl px-6 py-3 mt-6 w-fit cursor-pointer">
          <p className="text-white font-semibold">Get Started</p>
        </div>
      </div>

      <video
        className="w-full lg:w-[50%] h-auto mt-10 rounded-lg -rotate-2"
        controls
        poster="/images/placeholderImage.png"
      >
        <source src="/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <HeroBG />
    </div>
  );
};

export default Hero;
