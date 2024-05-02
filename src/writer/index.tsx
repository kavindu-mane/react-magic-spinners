import React from "react";
import "./writer.css";
import { WriterProps } from "./types";

const Writer = ({
  text = "Hello",
  fontSize = "5rem",
  fontFamily = "Arial",
  fontWeight = 600,
  width = 500,
  height = 200,
  duration = 3,
  backgroundColor = "transparent",
  iterationCount = "infinite",
  style,
  className,
}: WriterProps) => {
  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      style={{
        width: `${width}px"`,
        height: `${height}px`,
        backgroundColor,
        ...style,
      }}
      className={className}
    >
      <text
        x="50%"
        y="50%"
        dy="0.32em"
        textAnchor="middle"
        style={{
          fontSize,
          fontFamily,
          fontWeight,
          animationDuration: `${duration}s`,
          animationIterationCount: iterationCount,
        }}
        className={"rms-logo-animate"}
      >
        {text}
      </text>
    </svg>
  );
};

export default Writer;
