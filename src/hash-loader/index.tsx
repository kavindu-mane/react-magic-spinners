import React from "react";
import "./hash-loader.css";
import { HashLoaderProps } from "./types";

const HashLoader = ({
  size = 30,
  borderWidth = 8,
  duration = 2,
  color = "#d20062",
  iterationCount = "infinite",
  style,
  className,
}: HashLoaderProps) => {
  const commonProps = {
    backgroundColor: color,
    animationDuration: `${duration}s`,
    animationIterationCount: iterationCount,
    borderRadius: borderWidth,
  };
  return (
    <div
      className={`rms-hash-loader-wrapper ${className}`}
      style={{
        width: size * 2,
        height: size * 2,
        ...style,
      }}
    >
      <span
        style={{
          width: size * 2,
          height: borderWidth,
          left: 0,
          top: borderWidth * 1.5,
          ...commonProps,
        }}
      />
      <span
        style={{
          width: size * 2,
          height: borderWidth,
          left: 0,
          bottom: borderWidth * 1.5,
          ...commonProps,
        }}
      />

      <span
        style={{
          left: borderWidth * 1.5,
          top: 0,
          width: borderWidth,
          height: size * 2,
          ...commonProps,
        }}
      />
      <span
        style={{
          right: borderWidth * 1.5,
          top: 0,
          width: borderWidth,
          height: size * 2,
          ...commonProps,
        }}
      />
    </div>
  );
};

export default HashLoader;
