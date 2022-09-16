import { globalCss } from "@stitches/react";

export const globalStyles = globalCss({
  html: {
    fontSize: "100%",
  },
  body: {
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
