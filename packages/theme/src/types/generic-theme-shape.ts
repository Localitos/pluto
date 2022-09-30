/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable @typescript-eslint/no-explicit-any */
import type {
  borderWidths,
  colors,
  fontSizes,
  fontWeights,
  fonts,
  lineHeights,
  radii,
  boxShadows,
  spacings,
  zIndices,
} from "../theme/tokens";
import { DefaultTheme } from "../theme/default";

export type BorderWidthsKeys = keyof typeof borderWidths;
export type ColorsKeys = keyof typeof colors;
export type FontSizesKeys = keyof typeof fontSizes;
export type FontWeightsKeys = keyof typeof fontWeights;
export type FontsKeys = keyof typeof fonts;
export type LineHeightsKeys = keyof typeof lineHeights;
export type RadiiKeys = keyof typeof radii;
export type BoxShadowsKeys = keyof typeof boxShadows;
export type SpacingsKeys = keyof typeof spacings;
export type ZIndicesKeys = keyof typeof zIndices;

export interface GenericThemeShape {
  borderWidths: Partial<{
    [key in BorderWidthsKeys]: any;
  }>;
  breakpoints: Partial<{
    [key: string]: any;
  }>;
  colors: Partial<{
    [key in ColorsKeys]: any;
  }>;
  fontSizes: Partial<{
    [key in FontSizesKeys]: any;
  }>;
  fontWeights: Partial<{
    [key in FontWeightsKeys]: any;
  }>;
  fonts: Partial<{
    [key in FontsKeys]: any;
  }>;
  lineHeights: Partial<{
    [key in LineHeightsKeys]: any;
  }>;
  radii: Partial<{
    [key in RadiiKeys]: any;
  }>;
  shadows: Partial<{
    [key in BoxShadowsKeys]: any;
  }>;
  space: Partial<{
    [key in SpacingsKeys]: any;
  }>;
  zIndices: Partial<{
    [key in ZIndicesKeys]: any;
  }>;
}

export type ThemeShape = typeof DefaultTheme;
