import React from "react";
import Tick from "../../../public/icons/tick";

const MarketReach = () => {
  const withoutSemita = [
    "Research scattered across tabs and tools",
    "Guessing what users actually want",
    "Confusing competitor insights that don’t guide action",
    "Hours spent stitching research from different sources",
    "Hours spent stitching research from different sources",
  ];

  const withSemita = [
    "One workspace for market, customers & competitors",
    "AI tells you what your market cares about most",
    "Clear positioning & go-to-market, backed by data",
    "Insights synthesized for you in minutes",
    "One source of truth for strategy, roadmap & messaging",
  ];
  return (
    <div className="pt-[72px]">
      <div className="mb-5">
        <p className="text-3xl font-bold text-center w-full text-[#472308">
          Lightning-Fast Market Research
        </p>
        <p className="text-lg font-normal text-center w-full text-[#111827]">
          Transform weeks of manual research into minutes of AI-powered analysis
        </p>
      </div>

      <div className="max-w-sm lg:max-w-full lg:w-[80%] lg:mx-auto pb-4 md:pb-0 mb-20 border rounded-3xl border-[#FF9B0B33] grid grid-cols-1 lg:grid-cols-2 gap-6 mx-auto">
        {/* WITHOUT SEMITA */}
        <div className="p-6 w-full">
          <p className="font-semibold text-[32px]">Without Semita</p>
          <div className="pt-4 pb-6 space-y-3 flex flex-col">
            {withoutSemita.map((item, index) => {
              return (
                <div key={index} className="flex items-center space-x-2">
                  <div className="h-4 w-4">
                    <Tick />
                  </div>
                  <p className="text-sm">{item}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* WITH SEMITA */}
        <div className="p-6 w-full bg-[#FFF5E7] border border-[#7B380A] rounded-3xl">
          <p className="font-semibold text-[32px] radial-gradient-text ">
            With Semita
          </p>
          <div className="pt-4 pb-6 space-y-3 flex flex-col">
            {withSemita.map((item, index) => {
              return (
                <div key={index} className="flex items-center space-x-2">
                  <div className="h-4 w-4">
                    <Tick />
                  </div>
                  <p className="text-sm">{item}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketReach;
