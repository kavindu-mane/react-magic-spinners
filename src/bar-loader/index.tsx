import React from "react";
import "./bar-loader.css";
import { BarLoaderProps } from "./types";

const BarLoader = ({
  width = 200,
  height = 10,
  duration = 3,
  color = "#d20062",
  trackColor = "#d2006260",
  iterationCount = "infinite",
  style,
  className,
}: BarLoaderProps) => {
  const commonProps = {
    width: "80%",
    animationDuration: `${duration}s`,
    backgroundColor: color,
    animationIterationCount: iterationCount,
  };

  return (
    <div
      className={`rms-bar-loader-wrapper ${className}`}
      style={{
        backgroundColor: trackColor,
        borderRadius: height,
        height: height,
        width: width,
        ...style,
      }}
    >
      <span
        style={{
          ...commonProps,
        }}
      />
    </div>
  );
};

export default BarLoader;
