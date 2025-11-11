import React from "react";
import StartTrial from "./startTrial";
import Logo from "../../../public/logo/logo";
import Linkedin from "../../../public/icons/linkedin";
import X from "../../../public/icons/X";
import Instagram from "../../../public/icons/instagram";

const Footer = () => {
  const links = [
    "Features",
    "About",
    "Help Center",
    "Pricing",
    "Blog",
    "Community",
    "API",
    "Contact",
    "Status",
    "Documentation",
    " ",
    "Privacy",
  ];
  return (
    <footer className="w-full relative pb-[120px] lg:pb-[50px] flex flex-col space-y-12 pt-[436px] md:pt-[300px] lg:pt-[250px]">
      <StartTrial />

      <div className="xl:flex justify-between xl:px-10">
        <div className="flex flex-col space-y-4 xl:w-[40%] mb-40 lg:mb-0">
          <div className="flex space-x-2 items-center">
            <Logo />
            <p className="font-bold text-xl">Semita AI</p>
          </div>
          <p>
            The clear path forward. From insight to action, giving you the
            clarity and confidence to move forward.
          </p>
          <div className="flex items-center space-x-2">
            <Linkedin className="h-4 w-4" /> <X className="w-4 h-4" />
            <Instagram className="h-4 w-4" />
          </div>
        </div>

        <div className="flex flex-col space-y-4 pb-10">
          <div className="grid grid-cols-3">
            <p className="font-semibold">Product</p>
            <p className="font-semibold">Company</p>
            <p className="font-semibold">Support</p>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {links.map((link, index) => (
              <p key={index} className="py-1 cursor-pointer">
                {link}
              </p>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-t-[#FF9B0B33] py-8 xl:px-10 xl:flex justify-between">
        <p>© Semita AI. All rights reserved</p>
        <div className="flex justify-between lg:grid grid-cols-3 mt-10 xl:mt-0 xl:w-[40%] gap-4 xl:gap-10">
          <p className="underline text-sm underline-offset-4">Privacy Policy</p>
          <p className="underline text-sm underline-offset-4">
            Terms of Service
          </p>
          <p className="underline text-sm underline-offset-4">
            Cookie Settings
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
