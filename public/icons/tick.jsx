import * as React from "react";
const Tick = (props) => (
  <svg
    width={19}
    height={15}
    viewBox="0 0 19 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M1.36475 8.22339L5.93617 12.7957L17.3647 1.36487"
      stroke="url(#paint0_radial_485_3426)"
      strokeWidth={2.72975}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <defs>
      <radialGradient
        id="paint0_radial_485_3426"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="matrix(6.99492 -2.69896 0.035313 17.0861 9.46932 9.69988)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.00961538} stopColor="#FF6F00" />
        <stop offset={0.495192} stopColor="#7B380A" />
      </radialGradient>
    </defs>
  </svg>
);
export default Tick;
