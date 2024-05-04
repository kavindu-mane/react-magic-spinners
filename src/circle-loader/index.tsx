import React from "react";
import "./circle-loader.css";
import { CircleLoaderProps } from "./types";

const CircleLoader = ({
  size = 112,
  borderWidth = 1,
  circleCount = 5,
  duration = 1,
  color = "#d20062",
  iterationCount = "infinite",
  style,
  className,
  isCentered = false,
}: CircleLoaderProps) => {
  const commonProps = {
    borderWidth: borderWidth,
    borderColor: color,
    borderStyle: "solid",
    animationIterationCount: iterationCount,
  };

  return (
    <div
      className={`rms-circle-loader-wrapper ${className}`}
      style={{
        width: size,
        height: size,
        ...style,
      }}
    >
      {Array.from({ length: circleCount }).map((_, index) => (
        <span
          key={index}
          style={{
            ...commonProps,
            width: `${100 - (index + 1) * (50 / circleCount)}%`,
            height: `${100 - (index + 1) * (50 / circleCount)}%`,
            top: isCentered
              ? `${(index * (50 / circleCount)) / 2}%`
              : `${(index * 10) / circleCount}%`,
            left: isCentered
              ? `${(index * (50 / circleCount)) / 2}%`
              : `${(index * 5) / circleCount}%`,
            animationDelay: `${(-duration / 5) * index}s`,
            borderBottomColor: "transparent",
            animationDuration: `${duration + 0.1 * index}s`,
          }}
        />
      ))}
    </div>
  );
};

export default CircleLoader;
