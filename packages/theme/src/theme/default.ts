import { defaultTheme } from "@xstyled/styled-components";
import * as borderRadiusTokens from "@localyze-pluto/design-tokens/dist/js/border-radius.js";
import * as borderStyleTokens from "@localyze-pluto/design-tokens/dist/js/border-style.js";
import * as borderWidthTokens from "@localyze-pluto/design-tokens/dist/js/border-width.js";
import * as colorTokens from "@localyze-pluto/design-tokens/dist/js/colors.js";
import * as fontFamilyTokens from "@localyze-pluto/design-tokens/dist/js/font-family.js";
import * as fontSizeTokens from "@localyze-pluto/design-tokens/dist/js/font-size.js";
import * as fontWeightTokens from "@localyze-pluto/design-tokens/dist/js/font-weight.js";
import * as lineHeightTokens from "@localyze-pluto/design-tokens/dist/js/line-height.js";
import * as sizeTokens from "@localyze-pluto/design-tokens/dist/js/size.js";
import * as spaceTokens from "@localyze-pluto/design-tokens/dist/js/space.js";
import * as zIndexTokens from "@localyze-pluto/design-tokens/dist/js/z-index.js";

export const theme = {
  ...defaultTheme,
  borderStyles: {
    ...borderStyleTokens,
  },
  borderWidths: {
    ...borderWidthTokens,
  },
  colors: {
    ...colorTokens,
    colorBackgroundTodo:
      "linear-gradient(360deg, rgba(16, 37, 233, 0.08) 0%, rgba(36, 63, 235, 0.0733333) 49.48%, rgba(255, 255, 255, 0) 100%)",
    colorBackgroundComplete:
      "linear-gradient(360deg, rgba(82, 244, 174, 0.12) 0%, rgba(131, 247, 197, 0.0575) 57.81%, rgba(255, 255, 255, 0) 100%)",
    colorBackgroundPreview:
      "linear-gradient(360deg, rgba(71, 94, 105, 0.08) 6.19%, rgba(71, 94, 105, 0.0504167) 57.3%, rgba(255, 255, 255, 0) 93.81%)",
  },
  fontSizes: {
    ...fontSizeTokens,
  },
  fontWeights: {
    ...fontWeightTokens,
  },
  fonts: {
    ...fontFamilyTokens,
  },
  lineHeights: {
    ...lineHeightTokens,
  },
  radii: {
    ...borderRadiusTokens,
  },
  shadows: {
    shadow: "0px 3px 24px rgba(15, 23, 42, 0.05)",
    shadowStrong: "0px 8px 24px rgba(15, 23, 42, 0.08)",
    shadowFocus:
      "0px 1px 2px rgba(0, 0, 0, 0.05), 0px 0px 0px 2px #FFFFFF, 0px 0px 0px 4px #102EE9",
  },
  sizes: {
    ...sizeTokens,
  },
  space: {
    ...spaceTokens,
  },
  states: {
    ...defaultTheme.states,
    backdrop: "&[data-backdrop]",
    hidden: '&[data-hidden="true"]',
    loading: '&[aria-busy="true"]',
  },
  zIndices: {
    ...zIndexTokens,
  },
};
