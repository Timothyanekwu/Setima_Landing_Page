import React from "react";
import PropEntry from "./propEntry";
import Graph from "../../../public/icons/graph";
import Level from "../../../public/icons/level";
import Group from "../../../public/icons/group";
import Bulb from "../../../public/icons/bulb";
import Caution from "../../../public/icons/caution";
import File2 from "../../../public/icons/file2";

const IndsideSemitaAi = () => {
  const properties = [
    {
      icon: <Graph className="h-5 stroke-white w-5" />,
      title: "Market Opportunity",
      description:
        "Analyze market size, growth trends, and revenue potential to understand the true opportunity for your business idea.",
    },
    {
      icon: (
        <Level
          strokeWidth={null}
          color={"#ffffff"}
          className="h-5 stroke-white w-5"
        />
      ),
      title: "Competitive Analysis",
      description:
        "Deep dive into competitor strategies, pricing, strengths, and weaknesses to identify your competitive advantage.",
    },
    {
      icon: <Group className="h-5 stroke-white w-5" />,
      title: "Customer Insight",
      description:
        "Understand your target audience's needs, pain points, and behaviors to validate product-market fit.",
    },
    {
      icon: <Bulb strokeWidth={null} color={"#FFFFFF"} className="h-5 w-5" />,
      title: "Strategy & Positioning",
      description:
        "Develop optimal market positioning, pricing strategies, and go-to-market approaches for maximum impact.",
    },
    {
      icon: <Caution className="h-5 stroke-white w-5" />,
      title: "Risk Assessment",
      description:
        "Identify potential risks, regulatory challenges, and market barriers before you invest time and resources.",
    },
    {
      icon: <File2 className="h-5 stroke-white w-5" />,
      title: "Implementation Roadmap",
      description:
        "Get a clear, actionable roadmap with prioritized next steps, timelines, and resource requirements.",
    },
  ];
  return (
    <div className="my-20">
      <div className="mb-5">
        <p className="text-3xl font-bold text-center w-full text-[#472308">
          Indside Semita AI
        </p>
        <p className="text-lg font-normal text-center w-full text-[#111827]">
          Six essential research areas to validate your business idea and
          minimize risk
        </p>
      </div>

      <div className="border-[1.4px] rounded-3xl border-[#7B380A] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:w-[80%] mx-auto">
        {properties.map((property, index) => {
          return (
            <PropEntry
              key={index}
              code={index}
              icon={property.icon}
              title={property.title}
              description={property.description}
            />
          );
        })}
      </div>
    </div>
  );
};

export default IndsideSemitaAi;
