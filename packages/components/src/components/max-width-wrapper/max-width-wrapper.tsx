import type React from "react";
import { css, cx } from "@brifui/styled/css";
import { WithCss } from "@brifui/styled/types";

export type MaxWidthWrapperProps = React.ComponentPropsWithRef<"div">;

export const MaxWidthWrapper: React.FC<MaxWidthWrapperProps & WithCss> = ({
  css: _css,
  className,
  ...props
}) => {
  return (
    <div
      className={cx(
        css(
          {
            w: "100%",
            maxW: "container.xl"
          },
          _css
        ),
        className
      )}
      {...props}
    />
  );
};
