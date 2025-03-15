import { css } from "@brifui/styled/css";

export const containerStyles = css.raw({
  w: "10",
  display: "inline-block",
  "& img": {
    w: "100%",
    h: "auto",
    objectFit: "contain"
  }
});
