/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable @typescript-eslint/no-explicit-any */
import type {
  GenericThemeShape,
  BorderWidthsKeys,
  ColorsKeys,
  FontSizesKeys,
  FontWeightsKeys,
  FontsKeys,
  LineHeightsKeys,
  RadiiKeys,
  BoxShadowsKeys,
  SpacingsKeys,
  ZIndicesKeys,
} from "../types/generic-theme-shape";

interface GenerateThemeFromTokensArgs {
  borderWidths: Partial<{ [key in BorderWidthsKeys]: any }>;
  colors: Partial<{ [key in ColorsKeys]: any }>;
  radii: Partial<{ [key in RadiiKeys]: any }>;
  fonts: Partial<{ [key in FontsKeys]: any }>;
  fontSizes: Partial<{ [key in FontSizesKeys]: any }>;
  fontWeights: Partial<{ [key in FontWeightsKeys]: any }>;
  lineHeights: Partial<{ [key in LineHeightsKeys]: any }>;
  boxShadows: Partial<{ [key in BoxShadowsKeys]: any }>;
  spacings: Partial<{ [key in SpacingsKeys]: any }>;
  zIndices: Partial<{ [key in ZIndicesKeys]: any }>;
}

/**
 * Generates an avatar background color using the length of a person's full name.
 *
 * @param theme - Object of individual theme objects.
 * @param theme.borderWidths - Border width values
 * @param theme.colors - Color values
 * @param theme.radii - Radius values
 * @param theme.fonts - Font family values
 * @param theme.fontSizes - Font size values
 * @param theme.fontWeights - Font weight values
 * @param theme.lineHeights - Line height values
 * @param theme.boxShadows - Box shadow values
 * @param theme.spacings - Spacing values
 * @param theme.zIndices - zIndex values
 * @returns GenericThemeShape.
 * @example
 * generateThemeFromTokens({
 * backgroundColors,
 * borderColors,
 * borderWidths,
 * colors,
 * radii,
 * fonts,
 * fontSizes,
 * fontWeights,
 * lineHeights,
 * boxShadows,
 * spacings,
 * zIndices,
});
 */
export const generateThemeFromTokens = ({
  borderWidths,
  colors,
  radii,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  boxShadows,
  spacings,
  zIndices,
}: GenerateThemeFromTokensArgs): GenericThemeShape => {
  // Default breakpoints 400px, 1024px, 1232px
  const breakpoints = ["25rem", "64rem", "77rem"];

  return {
    shadows: boxShadows,
    borderWidths,
    radii,
    breakpoints,
    colors,
    fonts,
    fontSizes,
    fontWeights,
    lineHeights,
    space: spacings,
    zIndices,
  };
};
