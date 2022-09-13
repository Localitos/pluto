import { globalCss } from "@stitches/react";
import { theme } from "../theme/default";

export const globalStyles = globalCss({
  "*": {
    margin: theme.space[0],
    padding: theme.space[0],
  },
  html: {
    fontSize: "100%",
  },
  body: {
    fontFamily: "$moderat",
    fontWeight: "$fontWeightNormal",
    "-webkit-font-smoothing": "antialiased",
    "-moz-osx-font-smoothing": "grayscale",
  },
  "*, *::after, *::before": {
    boxSizing: "border-box",
  },
  "@media (prefers-reduced-motion: reduce)": {
    "*": {
      animationDuration: "0 !important",
      animationIterationCount: "1 !important",
      transitionDuration: "0 !important",
      scrollBehavior: "auto !important",
    },
  },
});
