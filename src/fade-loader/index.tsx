import React from "react";
import { FadeLoaderProps } from "./types";

const FadeLoader = ({
  size = 24,
  borderWidth = 3,
  duration = 1,
  color = "#d20062",
  iterationCount = "infinite",
  style,
  className,
}: FadeLoaderProps) => {
  return (
    <svg
      width={2 * size}
      height={2 * size}
      viewBox={`0 0 ${2 * size} ${2 * size}`}
      className={className}
      style={{
        borderRadius: "50%",
        overflow: "hidden",
        ...style,
      }}
    >
      {Array.from({ length: 8 }).map((_, index) => (
        <rect
          key={index}
          x={size - borderWidth / 2}
          y={-size / 3}
          width={borderWidth}
          height={size}
          fill={color}
          transform={`rotate(${45 * index} ${size} ${size})`}
        >
          <animate
            attributeName="opacity"
            values="0;0.25;0.5;0.75;1;0.75;0.5;0.25;0;"
            dur={`${duration}s`}
            repeatCount={
              iterationCount === "infinite" ? "indefinite" : iterationCount
            }
            begin={`${index * (duration / 8)}s`}
          />
        </rect>
      ))}
    </svg>
  );
};

export default FadeLoader;
