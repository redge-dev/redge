import type React from "react";
import { css } from "@brifui/styled/css";

import { Menu } from "./menu";

const mainStyles = css({
  minH: "100vh",
  display: "grid",
  bg: "background.muted",
  gridTemplateColumns: {
    base: "1fr",
    md: "240px minmax(0, 1fr)"
  }
});

const menuStyles = css({
  display: {
    base: "none",
    md: "block"
  }
});

const contentStyles = css({
  p: 6,
  bg: "background",
  mt: {
    md: 1.5
  },
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
  return (
    <main className={mainStyles}>
      <div className={menuStyles}>
        <Menu />
      </div>
      <div className={contentStyles}>{children}</div>
    </main>
  );
};
