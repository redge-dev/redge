import React from "react";
import { Text, TextProps } from "@brifui/components";
import { css as _css, cx } from "@brifui/styled/css";

const Title: React.FC<TextProps<"h3">> = ({ css, className, ...props }) => {
  return (
    <Text
      as="h3"
      type="heading.2xl"
      fontWeight="semibold"
      className={cx(
        _css(
          {
            mt: {
              base: 3,
              md: 6
            },
            px: {
              base: 3,
              lg: 10
            },
            py: {
              md: 3
            }
          },
          css
        ),
        className
      )}
      {...props}
    />
  );
};

export const Page = {
  Title
};
