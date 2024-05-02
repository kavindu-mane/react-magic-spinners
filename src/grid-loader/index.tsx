import React from "react";
import "./grid-loader.css";
import { GridLoaderProps } from "./types";

const GridLoader = ({
  dotsSize = 16,
  duration = 1,
  color = "#d20062",
  backgroundColor = "transparent",
  iterationCount = "infinite",
  style,
  className,
}: GridLoaderProps) => {
  
  const commonProps = {
    width: dotsSize,
    height: dotsSize,
    animationDuration: `${duration}s`,
    backgroundColor: color,
    animationIterationCount: iterationCount,
  };

  return (
    <div
      className={`rms-wrapper ${className}`}
      style={{
        backgroundColor,
        ...style,
      }}
    >
      <span
        style={{
          animationDelay: "0s",
          ...commonProps,
        }}
      />
      <span
        style={{
          animationDelay: `${-duration / 2}s`,
          ...commonProps,
        }}
      />
      <span
        style={{
          animationDelay: `${-duration}s`,
          ...commonProps,
        }}
      />
      <span
        style={{
          animationDelay: `${-duration / 2}s`,
          ...commonProps,
        }}
      />
      <span
        style={{
          animationDelay: `${-duration}s`,
          ...commonProps,
        }}
      />
      <span
        style={{
          animationDelay: "0s",
          ...commonProps,
        }}
      />
      <span
        style={{
          animationDelay: `${-duration}s`,
          ...commonProps,
        }}
      />
      <span
        style={{
          animationDelay: "0s",
          ...commonProps,
        }}
      />
      <span
        style={{
          animationDelay: `${-duration / 2}s`,
          ...commonProps,
        }}
      />
    </div>
  );
};

export default GridLoader;
