import React from "react";

export type BounceLoaderProps = {
  size?: number | string;
  duration?: number;
  color?: string;
  iterationCount?: number | string;
  isBorderOnly?: boolean;
  borderWidth?: number;
  style?: React.CSSProperties;
  className?: string;
};
