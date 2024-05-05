import React from "react";
import "./clock-loader.css";
import { ClockLoaderProps } from "./types";

const ClockLoader = ({
  size = 24,
  borderWidth = 2,
  duration = 2,
  color = "#d20062",
  iterationCount = "infinite",
  style,
  className,
}: ClockLoaderProps) => {
  const commonProps = {
    height: borderWidth,
    backgroundColor: color,
    animationIterationCount: iterationCount,
  };

  return (
    <div
      className={`rms-clock-loader-wrapper ${className}`}
      style={{
        width: "fit-content",
        height: "fit-content",
        ...style,
      }}
    >
      <div
        style={{
          borderWidth: borderWidth,
          borderColor: color,
          borderStyle: "solid",
          width: size * 2,
          height: size * 2,
          borderRadius: "50%",
        }}
      />

      <span
        style={{
          ...commonProps,
          width: size - borderWidth * 2,
          animationDuration: `${duration}s`,
        }}
      />

      <span
        style={{
          ...commonProps,
          width: size - borderWidth * 4,
          animationDuration: `${duration * 2}s`,
        }}
      />
    </div>
  );
};

export default ClockLoader;
