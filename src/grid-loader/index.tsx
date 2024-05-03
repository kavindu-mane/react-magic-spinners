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
  margin = 3,
  rows = 3,
  columns = 3,
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
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gridTemplateRows: `repeat(${rows}, 1fr)`,
        ...style,
      }}
    >
      {Array.from({ length: rows * columns }, (_, index) => (
        <span
          key={index}
          style={{
            ...commonProps,
            animationDelay: `${-(duration / (rows * columns)) * index}s`,
          }}
        />
      ))}
    </div>
  );
};

export default GridLoader;
