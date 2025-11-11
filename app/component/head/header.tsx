import React from "react";
import Logo from "../../../public/logo/logo";

const Header = () => {
  return (
    <div className="h-[100px] px-4 xl:px-28 w-full bg-[#FF9B0B0D] border-b border-b-[#FF9B0B33] flex justify-between items-center backdrop-blur-md z-50">
      <div className="h-full font-bold text-xl flex items-center gap-3">
        <Logo />
        <p>Semita AI</p>
      </div>
      <div className="flex items-center gap-10">
        <div className="hidden md:flex space-x-4 text-sm">
          <p className="cursor-pointer">Features</p>
          <p className="cursor-pointer">How it works</p>
          <p className="cursor-pointer">Demo</p>
          <p className="cursor-pointer">Pricing</p>
        </div>
        <div className="h-14 w-36 rounded-2xl bg-[#301705] flex items-center justify-center cursor-pointer">
          <p className="text-white font-semibold">Start Now</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
