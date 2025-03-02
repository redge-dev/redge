import React from "react";
import { css, cx } from "@brifui/styled/css";

export const GradientBackground: React.FC<
  React.ComponentPropsWithRef<"div">
> = ({ className, ...props }) => {
  return (
    <div
      className={cx(
        css({
          pointerEvents: "none",
          top: 0,
          left: 0,
          w: "100%",
          h: "100%",
          position: "absolute",
          background: `url("/gradient-bg.png") center/cover no-repeat`
        }),
        className
      )}
      {...props}
    />
  );
};
