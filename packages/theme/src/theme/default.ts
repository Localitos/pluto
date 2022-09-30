import { generateThemeFromTokens } from "../utils/generate-theme-from-tokens";
import {
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
} from "./tokens";

export const DefaultTheme = generateThemeFromTokens({
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
});
