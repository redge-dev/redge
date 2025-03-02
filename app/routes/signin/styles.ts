import { css } from "@brifui/styled/css";

export const containerStyles = css({
  px: 6,
  gap: 4,
  w: "100%",
  minH: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center"
});

export const gradientBgStyles = css({
  zIndex: -1
});

export const trademarkStyles = css({
  pb: 4,
  color: "text.muted"
});

export const gridStyles = css({
  w: "100%",
  h: "100%",
  pt: 24,
  minH: "100vh",
  display: "grid",
  gridTemplateColumns: {
    base: "1fr",
    md: "1fr 1fr"
  }
});

export const logoStyles = css({
  w: "fit-content",
  display: "block"
});

export const formContainerStyles = css({
  display: "flex",
  flexDirection: "column"
});

export const formStyles = css({
  pt: 24,
  flex: 1,
  display: "flex",
  flexDirection: "column"
});

export const previewContainerStyles = css({
  display: {
    base: "none",
    md: "block"
  }
});
