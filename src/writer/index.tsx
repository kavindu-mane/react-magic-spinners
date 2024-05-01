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
  duration = "3s",
  backgroundColor = "transparent",
  iterationCount = "infinite",
}: WriterProps) => {
  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      style={{
        width: `${width}px"`,
        height: `${height}px`,
        backgroundColor,
      }}
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
          animationDuration: duration,
          animationIterationCount: iterationCount,
        }}
        className={"logo-animate"}
      >
        {text}
      </text>
    </svg>
  );
};

export default Writer;
