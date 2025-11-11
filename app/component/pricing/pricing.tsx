import React from "react";
import PricingCard from "./pricingCard";

const Pricing = () => {
  const pricingPlans = [
    {
      plan: [
        "2 market research reports/month",
        "Basic market analysis",
        "Limited Deep Dives",
        "Email support",
      ],
      title: "BASIC",
      price: "20",
      actionText: "Get Started",
      style: "lg:-rotate-12 lg:z-10",
    },
    {
      plan: [
        "4 market research reports/month",
        "Risk Assessment & Implementation Roadmap ",
        "Deep Dives and Co-Pilot",
        "Custom report templates",
      ],
      title: "PLUS",
      price: "30",
      actionText: "Get Started",
      style: "lg:rotate-0 lg:z-20",
    },

    {
      plan: [
        "Unlimited research reports",
        "Full platform access",
        "Dedicated account manager",
        "White-label reports",
      ],
      title: "ENTERPRISE",
      price: "99",
      style: "lg:rotate-12 lg:z-10",
      actionText: "Contact US",
    },
  ];
  return (
    <div className="py-[72py] pb-[150%] md:pb-[50%] xl:pb-[40%]">
      <div className="mb-5">
        <p className="text-[40px] leading-12 font-bold text-center w-full text-[#472308]">
          Simple, Transparent Pricing
        </p>
        <p className="text-lg font-normal text-center w-full text-[#111827] my-3">
          Choose the plan that fits your research needs
        </p>
      </div>

      <div className="w-full md:w-[60%] lg:w-full mx-auto overflow-x-auto lg:overflow-x-visible flex space-x-4 lg:-space-x-14 snap-x snap-mandatory scroll-smooth lg:justify-center">
        {pricingPlans.map((plan, index) => {
          return (
            <PricingCard
              key={index}
              code={index}
              plan={plan.plan}
              title={plan.title}
              actionText={plan.actionText}
              price={plan.price}
              style={plan.style}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Pricing;
