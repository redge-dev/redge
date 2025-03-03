import { css } from "@brifui/styled/css";

export const containerStyles = css({
  gap: 8,
  display: "flex",
  flexDirection: "column",
  maxWidth: {
    base: "unset",
    md: "380px"
  }
});

export const titleContainerStyles = css({
  gap: 2,
  display: "flex",
  flexDirection: "column"
});

export const titleStyles = css({
  fontWeight: "bold"
});

export const descStyles = css({
  color: "text.muted"
});

export const bodyStyles = css({
  gap: 2,
  display: "flex",
  flexDirection: "column"
});

export const signUpTextStyles = css({
  color: "text.muted",
  "&>a": {
    textDecoration: "underline",
    fontWeight: "semibold",
    transition: "colors",
    _hover: {
      color: "text"
    }
  }
});

export const dividerStyles = css({
  py: 2,
  gap: 2,
  display: "flex",
  alignItems: "center",
  position: "relative",
  color: "border.muted",
  _before: {
    content: '""',
    flex: 1,
    height: "1px",
    background: "border.muted"
  },
  _after: {
    content: '""',
    flex: 1,
    height: "1px",
    background: "border.muted"
  }
});
