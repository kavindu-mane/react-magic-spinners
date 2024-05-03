import React from "react";
import "./beat-loader.css";
import { BeatLoaderProps } from "./types";

const BeatLoader = ({
  dotsSize = 16,
  duration = 0.5,
  color = "#d20062",
  iterationCount = "infinite",
  style,
  className,
  margin = 4,
  dotsCount = 3,
}: BeatLoaderProps) => {
  const commonProps = {
    width: dotsSize,
    height: dotsSize,
    animationDuration: `${duration}s`,
    backgroundColor: color,
    animationIterationCount: iterationCount,
    margin: margin,
  };

  return (
    <div
      className={`rms-beat-loader-wrapper ${className}`}
      style={{
        ...style,
      }}
    >
      {Array.from({ length: dotsCount }, (_, index) => (
        <span
          key={index}
          style={{
            ...commonProps,
            animationDelay: `${(duration / dotsCount) * index}s`,
          }}
        />
      ))}
    </div>
  );
};

export default BeatLoader;
