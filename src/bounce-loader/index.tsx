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
  isBorderOnly = false,
  borderWidth = 2,
}: BounceLoaderProps) => {
  const commonProps = {
    width: size,
    height: size,
    animationDuration: `${duration}s`,
    backgroundColor: isBorderOnly ? "transparent" : color,
    animationIterationCount: iterationCount,
    border: isBorderOnly ? `${borderWidth}px solid ${color}` : "none",
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
