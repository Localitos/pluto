import { createGlobalStyle } from "@xstyled/styled-components";

export const GlobalStyles = createGlobalStyle`
  html {
    font-size: 100%;
  }
  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  *, *::after, *::before {
    box-sizing: border-box;
  }
  @media (prefers-reduced-motion: reduce) {
    * {
      animation-duration: 0 !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0 !important;
      scroll-behavior: auto !important;
    }
  }
`;
