import Image from "next/image";
import React from "react";
import Watermark from "../../../public/svgs/watermark";

const StartTrial = () => {
  return (
    <div className="absolute top-[-400px] md:top-[-280px] left-1/2 -translate-x-1/2 w-full max-w-7xl xl:px-10">
      <div className="rounded-3xl w-full bg-[#472308] border-2 border-[#472308] px-6 lg:pr-0 pt-12 lg:pt-20 h-[753px] md:h-[500px] lg:h-[420] relative overflow-hidden flex flex-col lg:flex-row">
        {/* Watermark at the very back */}
        <Watermark
          width={700}
          height={700}
          color="#FFE7D5"
          className="absolute opacity-20 top-10 md:top-[-100px] left-[-500px] md:left-[100px] lg:left-[300px] z-0"
        />

        {/* Content on top */}
        <div className="flex flex-col space-y-8 relative z-20 lg:w-[70%]">
          <p className="text-[40px] lg:text-4xl text-[#FFB742] font-bold">
            Ready To Build With Clarity?
          </p>
          <p className="text-white">
            Turn ideas into informed decisions with AI insights that guide your
            next move. Try Semita free for 7 days, full access to every feature.
            Cancel anytime.
          </p>
          <div className="px-[34px] py-3.5 bg-[#FFB742] rounded-2xl w-fit cursor-pointer">
            <p className="text-[#301705] font-semibold">
              Start your free trial
            </p>
          </div>
        </div>

        {/* Image between watermark and content */}
        <div className="w-full md:w-[60%] aspect-square absolute lg:relative right-[-18px] -bottom-5 z-10 flex justify-end items-end">
          <Image
            src={"/images/freetrial.png"}
            alt="Freetrial Template"
            width={500}
            height={500}
            style={{ objectFit: "contain" }}
          />
        </div>
      </div>
    </div>
  );
};

export default StartTrial;
