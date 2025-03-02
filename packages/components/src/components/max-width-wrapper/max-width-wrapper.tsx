import type React from "react";
import { css, cx } from "@brifui/styled/css";

export type MaxWidthWrapperProps = React.ComponentPropsWithRef<"div">;

export const MaxWidthWrapper: React.FC<MaxWidthWrapperProps> = ({
  className,
  ...props
}) => {
  return (
    <div
      className={cx(
        css({
          w: "100%",
          maxW: "container.xl"
        }),
        className
      )}
      {...props}
    />
  );
};
