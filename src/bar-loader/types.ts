import React from "react";

export type BarLoaderProps = {
  width?: number | string;
  height?: number | string;
  duration?: number;
  color?: string;
  trackColor?: string;
  iterationCount?: number | string;
  style?: React.CSSProperties;
  className?: string;
};
