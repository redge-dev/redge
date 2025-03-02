import type React from "react";
import { MaxWidthWrapper } from "packages/components/src";
import { css } from "@brifui/styled/css";

const mainStyles = css({
  position: "relative"
});

const wrapperStyles = css({
  mx: "auto",
  minH: "100vh"
});

export const Layout = ({ children }: React.PropsWithChildren) => {
  return (
    <main className={mainStyles}>
      <MaxWidthWrapper className={wrapperStyles}>{children}</MaxWidthWrapper>
    </main>
  );
};
