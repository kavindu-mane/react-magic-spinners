import React from "react";
import "./bounce-loader.css";
import { BounceLoaderProps } from "./types";

const BounceLoader = ({
  size = 64,
  duration = 2,
  color = "#d20062",
  iterationCount = "infinite",
  style,
  className,
}: BounceLoaderProps) => {
  const commonProps = {
    width: size,
    height: size,
    animationDuration: `${duration}s`,
    backgroundColor: color,
    animationIterationCount: iterationCount,
  };

  return (
    <div
      className={`rms-bounce-loader-wrapper ${className}`}
      style={{
        width: size,
        height: size,
        ...style,
      }}
    >
      <span
        style={{
          ...commonProps,
        }}
      />

      <span
        style={{
          ...commonProps,
          animationDelay: `${-duration / 2}s`,
        }}
      />
    </div>
  );
};

export default BounceLoader;
