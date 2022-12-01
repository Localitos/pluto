import { createGlobalStyle } from "@xstyled/styled-components";

export const BaseStyles = createGlobalStyle`
  body {
    font-size: fontSize30;
    font-family: fontFamilyModerat;
    font-weight: fontWeightRegular;
    font-variant-numeric: tabular-nums;
    line-height: lineHeight30;
  }

  [data-backdrop] {
    background-color: rgba(100, 116, 139, 0.75);
  }
`;
