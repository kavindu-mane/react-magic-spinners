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
  margin = 2.4,
}: GridLoaderProps) => {
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
      className={`rms-grid-loader-wrapper ${className}`}
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
