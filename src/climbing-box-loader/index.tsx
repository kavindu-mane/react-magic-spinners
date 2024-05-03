import React from "react";
import "./climbing-box-loader.css";
import { ClimbingBoxLoaderProps } from "./types";

const ClimbingBoxLoader = ({
  size = 16,
  duration = 2,
  color = "#d20062",
  iterationCount = "infinite",
  style,
  className,
}: ClimbingBoxLoaderProps) => {
  const commonProps = {
    width: size,
    height: size,
    borderRadius: size / 5,
    animationDuration: `${duration}s`,
    animationIterationCount: iterationCount,
    borderWidth: size / 5,
    borderColor: color,
    borderStyle: "solid",
    marginBottom: (2 * size) / 5,
  };

  return (
    <div
      className={`rms-climbing-box-loader-wrapper ${className}`}
      style={{
        width: 7 * size,
        height: 7 * size,
        ...style,
      }}
    >
      <span
        style={{
          ...commonProps,
        }}
      />

      <div
        style={{
          height: size / 5,
          width: 7 * size,
          backgroundColor: color,
        }}
      />
    </div>
  );
};

export default ClimbingBoxLoader;
