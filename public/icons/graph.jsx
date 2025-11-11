import * as React from "react";
const Graph = (props) => (
  <svg
    width={20}
    height={12}
    viewBox="0 0 20 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M11 1H19M19 1V9M19 1L11 9L7 5L1 11"
      stroke="#FFFCF9"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default Graph;
