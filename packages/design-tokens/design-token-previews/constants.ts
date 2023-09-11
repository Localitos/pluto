import fontSizeTokens from "../src/tokens/font-size.tokens.json";
import fontWeightTokens from "../src/tokens/font-weight.tokens.json";
import colorTokens from "../src/tokens/color.tokens.json";
import iconSizeTokens from "../src/tokens/size.tokens.json";
import spaceTokens from "../src/tokens/space.tokens.json";
import borderStyleTokens from "../src/tokens/border-style.tokens.json";
import borderWidthTokens from "../src/tokens/border-width.tokens.json";
import borderRadiiTokens from "../src/tokens/border-radius.tokens.json";

import { TokenEntry } from "./types/TokenEntry";

import {
  createBorderRadiiPreview,
  createSpacePreview,
  createColorPreview,
  createFontSizePreview,
  createIconSizePreview,
  createFontWeightPreview,
  createBorderStylePreview,
  createBorderWidthPreview,
} from "./utils/previews";

import { hexToHsla, hexToRgb } from "./utils/colors";
import { getComment, getKey, getValue } from "./utils/utils";

export const TOKEN_COLUMNS = {
  [getKey(borderRadiiTokens)]: [
    { name: "Pixels", transform: getValue },
    { name: "Preview", transform: createBorderRadiiPreview },
  ],
  [getKey(borderWidthTokens)]: [
    { name: "Pixels", transform: getValue },
    { name: "Preview", transform: createBorderWidthPreview },
  ],
  [getKey(borderStyleTokens)]: [
    { name: "Style", transform: getValue },
    { name: "Preview", transform: createBorderStylePreview },
  ],
  [getKey(spaceTokens)]: [
    { name: "Pixels", transform: getComment },
    { name: "Rems", transform: getValue },
    { name: "Preview", transform: createSpacePreview },
  ],
  [getKey(iconSizeTokens)]: [
    { name: "Pixels", transform: getComment },
    { name: "Rems", transform: getValue },
    { name: "Preview", transform: createIconSizePreview },
  ],
  [getKey(fontWeightTokens)]: [
    { name: "Weight", transform: getValue },
    { name: "Preview", transform: createFontWeightPreview },
  ],
  [getKey(fontSizeTokens)]: [
    { name: "Pixels", transform: getComment },
    { name: "Rems", transform: getValue },
    { name: "Preview", transform: createFontSizePreview },
  ],
  [getKey(colorTokens)]: [
    { name: "Hex", transform: getValue },
    {
      name: "RGB",
      transform: ([, token]: TokenEntry): string => hexToRgb(token.value),
    },
    {
      name: "Hsla",
      transform: ([, token]: TokenEntry): string => hexToHsla(token.value),
    },
    { name: "Preview", transform: createColorPreview },
  ],
};
