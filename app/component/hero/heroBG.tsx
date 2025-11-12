import React from "react";
import GridLine from "../../../public/svgs/heroBG";
import Abstract from "../../../public/svgs/abstract";

const HeroBG = () => {
  const generateBoxProps = (count = 8, opacity = 0.11, size = [75, 90]) => {
    return Array.from({ length: count }, () => {
      const width = Math.random() * (size[1] - size[0]) + size[0]; // 21px to 28px
      const height = Math.random() * (size[1] - size[0]) + size[0]; // 21px to 28px
      const opac = Math.random() * opacity;
      const top = Math.random() * 100; // 0% to 100%
      const left = Math.random() * 100; // 0% to 100%
      return { width, height, opacity: opac, top, left };
    });
  };

  const boxesSet1 = generateBoxProps();
  const boxesSet2 = generateBoxProps(3, 0.08, [100, 120]);
  return (
    <div className="fixed top-0 w-screen h-screen -z-50 opacity-80">
      <div className=" opacity-10 relative">
        <div className="rotate-[-40deg] h-[400px] w-[900px] bg-[#F3BCBE] backdrop-blur-2xl -top-60 -left-60 absolute"></div>
        <div className="rotate-[-40deg] h-[600px] w-[1200px] bg-[#FFEFB4] backdrop-blur-2xl top-[10%] left-[5%] absolute"></div>
        <div className="rotate-[-40deg] h-[400px] w-[900px] bg-[#FFD642] backdrop-blur-2xl bottom-0 left-[85%] absolute"></div>
      </div>

      <div>
        {boxesSet1.map((item, index) => {
          return (
            <div
              className="absolute"
              key={index}
              style={{
                width: `${item.width}px`,
                height: `${item.height}px`,
                opacity: `${item.opacity}`,
                backgroundColor: `#7B380A`,
                top: `${item.top}%`,
                left: `${item.left}%`,
              }}
            ></div>
          );
        })}

        {boxesSet2.map((item, index) => {
          return (
            <div
              className="absolute"
              key={index}
              style={{
                width: `${item.width}px`,
                height: `${item.height}px`,
                opacity: `${item.opacity}`,
                backgroundColor: `#FF6F00`,
                top: `${item.top}%`,
                left: `${item.left}%`,
              }}
            ></div>
          );
        })}
        {boxesSet1.map((item, index) => {
          return (
            <div
              className="absolute"
              key={index}
              style={{
                width: `${item.width}px`,
                height: `${item.height}px`,
                opacity: `${item.opacity}`,
                backgroundColor: `#7B380A`,
                top: `${item.top}%`,
                left: `${item.left}%`,
              }}
            ></div>
          );
        })}
      </div>

      <GridLine className="absolute w-full h-full -top-16 opacity-55" />
      <Abstract className="h-full w-full blur-[150px]" />
    </div>
  );
};

export default HeroBG;
