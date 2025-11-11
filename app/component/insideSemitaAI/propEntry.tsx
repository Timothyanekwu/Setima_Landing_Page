import React from "react";

type PropEntryProps = {
  title?: string;
  icon?: React.ReactNode;
  description?: string;
  code: number;
};

const PropEntry = ({ title, icon, description, code }: PropEntryProps) => {
  return (
    <div
      className={`flex flex-col space-y-5 p-6 ${
        code % 2 !== 0 && "bg-[#FFF5E7]"
      } ${code === 5 && "rounded-b-3xl md:rounded-none"}`}
    >
      <div className="w-12 h-12 rounded-lg bg-[linear-gradient(135deg,_#FFB742_0%,_#FF9500_100%)] flex items-center justify-center">
        {icon}
      </div>
      <div>
        <p className="font-semibold text-xl">{title}</p>
        <p className="text-sm">{description}</p>
      </div>
    </div>
  );
};

export default PropEntry;
