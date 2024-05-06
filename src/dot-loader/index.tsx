import React from "react";
import "./dot-loader.css";
import { DotLoaderProps } from "./types";

const DotLoader = ({
  size = 64,
  duration = 1,
  color = "#d20062",
  iterationCount = "infinite",
  style,
  className,
}: DotLoaderProps) => {
  const commonProps = {
    height: size / 2,
    width: size / 2,
    backgroundColor: color,
    animationIterationCount: iterationCount,
    animationDuration: `${duration * 2}s`,
  };

  return (
    <div
      className={`rms-dot-loader-wrapper ${className}`}
      style={{
        animationIterationCount: iterationCount,
        animationDuration: `${duration * 2}s`,
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

export default DotLoader;
