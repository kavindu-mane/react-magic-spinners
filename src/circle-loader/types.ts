import React from "react";

export type CircleLoaderProps = {
  size?: number | string;
  borderWidth?: number;
  circleCount?: number;
  duration?: number;
  color?: string;
  iterationCount?: number | string;
  style?: React.CSSProperties;
  className?: string;
  isCentered?: boolean;
};
