/* The theme object thinks all of the design tokens are typed as any when they're not. */
/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { defaultTheme } from "@xstyled/styled-components";
import {
  BorderRadiusTokens,
  BorderStyleTokens,
  BorderWidthTokens,
  ColorTokens,
  FontFamilyTokens,
  FontSizeTokens,
  FontWeightTokens,
  LineHeightTokens,
  SizeTokens,
  SpaceTokens,
  ZIndexTokens,
} from "@localyze-pluto/design-tokens";

export const theme = {
  ...defaultTheme,
  borderStyles: {
    ...BorderStyleTokens,
    none: "none",
  },
  borderWidths: {
    ...BorderWidthTokens,
  },
  colors: {
    ...ColorTokens,
    colorBackgroundTodo:
      "linear-gradient(360deg, rgba(16, 37, 233, 0.08) 0%, rgba(36, 63, 235, 0.0733333) 49.48%, rgba(255, 255, 255, 0) 100%)",
    colorBackgroundComplete:
      "linear-gradient(360deg, rgba(82, 244, 174, 0.12) 0%, rgba(131, 247, 197, 0.0575) 57.81%, rgba(255, 255, 255, 0) 100%)",
    colorBackgroundPreview:
      "linear-gradient(360deg, rgba(71, 94, 105, 0.08) 6.19%, rgba(71, 94, 105, 0.0504167) 57.3%, rgba(255, 255, 255, 0) 93.81%)",
    transparent: "transparent",
  },
  fontSizes: {
    ...FontSizeTokens,
  },
  fontWeights: {
    ...FontWeightTokens,
  },
  fonts: {
    ...FontFamilyTokens,
  },
  lineHeights: {
    ...LineHeightTokens,
  },
  radii: {
    ...BorderRadiusTokens,
  },
  shadows: {
    shadow: "0px 3px 24px rgba(15, 23, 42, 0.05)",
    shadowStrong: "0px 8px 24px rgba(15, 23, 42, 0.08)",
    shadowFocus:
      "0px 1px 2px rgba(0, 0, 0, 0.05), 0px 0px 0px 2px #FFFFFF, 0px 0px 0px 4px #102EE9",
    none: "none",
  },
  sizes: {
    ...SizeTokens,
  },
  space: {
    ...SpaceTokens,
  },
  states: {
    ...defaultTheme.states,
    activeItem: "&[data-active-item]",
    backdrop: "&[data-backdrop]",
    checked: '&:checked, &[aria-checked="true"], &[data-state="checked"]',
    hidden: '&[data-hidden="true"]',
    loading: '&[aria-busy="true"]',
    selected: '&[aria-selected="true"]',
    even: "&:nth-child(even)",
    odd: "&:nth-child(odd)",
  },
  zIndices: {
    ...ZIndexTokens,
  },
};
