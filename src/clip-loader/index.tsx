import React from "react";
import "./clip-loader.css";
import { ClipLoaderProps } from "./types";

const ClipLoader = ({
  size = 32,
  borderWidth = 2,
  duration = 1,
  color = "#d20062",
  iterationCount = "infinite",
  style,
  className,
}: ClipLoaderProps) => {
  const commonProps = {
    borderWidth: borderWidth,
    borderColor: color,
    borderStyle: "solid",
    animationIterationCount: iterationCount,
  };

  return (
    <div
      className={`rms-clip-loader-wrapper ${className}`}
      style={{
        width: "fit-content",
        height: "fit-content",
        ...style,
      }}
    >
      <span
        style={{
          ...commonProps,
          width: size,
          height: size,
          borderBottomColor: "transparent",
          animationDuration: `${duration}s`,
        }}
      />
    </div>
  );
};

export default ClipLoader;
