import React from "react";
import Tick from "../../../public/icons/tick";

type PricingCardProp = {
  plan: string[];
  title: string;
  price: string;
  actionText: string;
  code: number;
  style: string;
};

const PricingCard = ({
  plan,
  title,
  price,
  actionText,
  code,
  style,
}: PricingCardProp) => {
  return (
    <div
      className={`group transition-all duration-300 xl:hover:shadow-lg lg:shadow-neutral-200 hover:scale-105 min-w-full md:min-w-[400px] lg:min-w-auto lg:w-full min-h-[500px] md:min-h-96 xl:min-h-auto snap-center mt-10 lg:mt-0 md:pt-1 pb-8 md:px-1 bg-[#FFF5E7] border-b border-b-[#7B380A] md:border-none relative flex flex-col justify-between md:rounded-xl ${style}`}
    >
      <div>
        {code === 1 ? (
          <div className="bg-[#472308] text-white w-full h-[72px] flex items-center justify-center mb-5 md:rounded-t-xl">
            <p className="text-xl">Popular</p>
          </div>
        ) : (
          <div className="h-[72px] w-full mb-5 md:rounded-t-xl"></div>
        )}

        <div className="pb-14 md:pb-6 md:px-3">
          <p className="font-semibold text-[32px] md:text-3xl">{title}</p>
          <div className="flex mt-1">
            <p className="text-[32px] md:text-3xl font-semibold">S{price}</p>
            <p className="text-[32px] md:text-3xl">/month</p>
          </div>

          <div className="flex flex-col space-y-3 pt-3 pb-6">
            {plan.map((item, index) => {
              return (
                <div key={index} className="flex item-center space-x-2">
                  <div className="h-4 w-4 pt-1.5">
                    <Tick />
                  </div>

                  <p className="text-xl md:text-sm">{item}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div
        className={` 
          
            group-hover:bg-[#301705] group-hover:text-[#ffffff]
          bg-[#FFB742] text-[#301705]
         rounded-2xl w-full backdrop-opacity-90 py-3.5 flex items-center justify-center cursor-pointer transition-colors duration-300`}
      >
        <p className="font-semibold xl:text-xs">{actionText}</p>
      </div>
    </div>
  );
};

export default PricingCard;
