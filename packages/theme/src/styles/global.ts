import { css } from "@styled-system/css";

export const plutoGlobalStyles = css({
  html: {
    fontSize: "100%",
    fontFamily: "fontFamilyModerat",
  },
  body: {
    margin: 0,
    fontSize: "fontSize30",
  },
  "*, *::after, *::before": {
    boxSizing: "border-box",
  },
});
