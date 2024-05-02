import React from "react";

export type WriterProps = {
  text?: string;
  fontSize?: number | string;
  fontFamily?: string;
  fontWeight?: number | string;
  width?: number;
  height?: number;
  backgroundColor?: string;
  duration?: number;
  iterationCount?: number | string;
  style?: React.CSSProperties;
  className?: string;
};
