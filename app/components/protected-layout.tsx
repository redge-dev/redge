import type React from "react";
import { MaxWidthWrapper } from "packages/components/src";
import { useSidebar } from "@brifui/components";
import { css } from "@brifui/styled/css";

import { Menu } from "./menu";

const mainStyles = (isOpen?: boolean) =>
  css({
    minH: "100vh",
    bg: "background.muted",
    display: "grid",
    gridTemplateColumns: {
      base: "1fr",
      md: isOpen ? "300px minmax(0, 1fr)" : "68px minmax(0, 1fr)"
    },
    transition: "grid-template-columns 0.15s ease-in-out"
  });

const menuStyles = css({
  display: {
    base: "none",
    md: "block"
  },
  overflow: "hidden"
});

const contentStyles = css({
  w: "100%",
  mt: {
    md: 1.5
  },
  bg: "background",
  borderTop: {
    md: "2px solid {colors.border}"
  },
  borderLeft: {
    md: "2px solid {colors.border}"
  },
  borderTopLeftRadius: {
    md: "component.lg"
  }
});

export const ProtectedLayout = ({ children }: React.PropsWithChildren) => {
  const { isOpen } = useSidebar();

  return (
    <main className={mainStyles(isOpen)}>
      <div className={menuStyles}>
        <Menu />
      </div>
      <div className={contentStyles}>
        <MaxWidthWrapper css={css.raw({ maxW: "container.xl", mx: "auto" })}>
          {children}
        </MaxWidthWrapper>
      </div>
    </main>
  );
};
