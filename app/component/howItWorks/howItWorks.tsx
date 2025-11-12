import React from "react";
import Card from "./card";
import Pencil from "../../../public/icons/pencil";
import Bulb from "../../../public/icons/bulb";
import File from "../../../public/icons/file";
import Level from "../../../public/icons/level";

const HowItWorks = () => {
  const items = [
    {
      title: "Describe your idea",
      subText: "Enter your concept and context.",
      tagText: "Step 1",
      tagIcon: <Pencil className="w-2.5 h-2.5" />,
      rotation: "",
    },
    {
      title: "AI research and analysis",
      subText:
        "We gather market signals, customer insights, competitors, and risks.",
      tagText: "Step 2",
      tagIcon: <Bulb color={""} strokeWidth={0.69} className="w-2.5 h-2.5" />,
      rotation: "-rotate-[3.46deg] lg:rotate-0 z-10",
    },
    {
      title: "Clear report and next steps",
      subText: "Get a decision plus structured, actionable next steps.",
      tagText: "Step 3",
      tagIcon: <File className="w-2.5 h-2.5" />,
      rotation: "z-20",
    },
    {
      title: "Track and iterate",
      subText: "Monitor progress and revisit results anytime.",
      tagText: "Step 4",
      tagIcon: <Level color={""} strokeWidth={0.6} className="w-2.5 h-2.5" />,
      rotation: "rotate-[2.9deg] lg:rotate-0 z-30",
    },
  ];
  return (
    <div className="max-w-sm lg:max-w-full mx-auto">
      <div>
        <p className="text-3xl font-bold text-center w-full text-[#472308">
          How Semita Works
        </p>
        <p className="text-sm text-center w-full text-[#111827]">
          Get comprehensive market research and actionable roadmaps in four
          simple steps
        </p>
      </div>

      <div className="my-10 lg:grid grid-cols-4 gap-x-8">
        {items.map((item, index) => {
          return (
            <Card
              key={index}
              title={item.title}
              subText={item.subText}
              tagText={item.tagText}
              tagIcon={item.tagIcon}
              rotation={item.rotation}
            />
          );
        })}
      </div>
    </div>
  );
};

export default HowItWorks;
