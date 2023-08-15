import React from "react";

const Question = ({ width = 20, height = 20 }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 13 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.5 2.375C5.68415 2.375 4.88663 2.61693 4.20827 3.07019C3.52992 3.52345 3.00121 4.16769 2.689 4.92143C2.37679 5.67518 2.2951 6.50458 2.45426 7.30475C2.61343 8.10492 3.00629 8.83992 3.58319 9.41682C4.16008 9.99371 4.89508 10.3866 5.69525 10.5457C6.49543 10.7049 7.32483 10.6232 8.07857 10.311C8.83232 9.99879 9.47655 9.47008 9.92981 8.79173C10.3831 8.11338 10.625 7.31585 10.625 6.5C10.625 5.40598 10.1904 4.35677 9.41682 3.58318C8.64323 2.8096 7.59402 2.375 6.5 2.375Z"
        stroke="#2C2C2C"
        strokeWidth="0.75"
        strokeMiterlimit="10"
      />
      <path
        d="M5.1875 5.24117C5.1875 5.24117 5.20719 4.83101 5.64617 4.47781C5.90656 4.26804 6.21875 4.20734 6.5 4.20312C6.75617 4.19984 6.98492 4.24226 7.1218 4.30742C7.35617 4.41898 7.8125 4.69132 7.8125 5.27046C7.8125 5.87984 7.41406 6.15664 6.96008 6.46109C6.50609 6.76554 6.38281 7.09601 6.38281 7.43749"
        stroke="#2C2C2C"
        strokeWidth="0.65625"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
      <path
        d="M6.35938 9.125C6.61826 9.125 6.82813 8.91513 6.82813 8.65625C6.82813 8.39737 6.61826 8.1875 6.35938 8.1875C6.10049 8.1875 5.89062 8.39737 5.89062 8.65625C5.89062 8.91513 6.10049 9.125 6.35938 9.125Z"
        fill="#2C2C2C"
      />
    </svg>
  );
};

export default Question;
