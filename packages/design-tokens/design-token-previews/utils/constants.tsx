import fontSizeTokens from "../../src/tokens/font-size.tokens.json";
import fontWeightTokens from "../../src/tokens/font-weight.tokens.json";
import colorTokens from "../../src/tokens/color.tokens.json";
import iconSizeTokens from "../../src/tokens/size.tokens.json";
import spaceTokens from "../../src/tokens/space.tokens.json";
import borderStyleTokens from "../../src/tokens/border-style.tokens.json";
import borderWidthTokens from "../../src/tokens/border-width.tokens.json";
import borderRadiiTokens from "../../src/tokens/border-radius.tokens.json";

import { TokenEntry } from "../types/TokenEntry";

import { createBox } from "../components/createBox";
import {
  createIconSizePreview,
  createFontSizePreview,
  getTokenComment,
  getTokenKey,
  getTokenName,
  getTokenValue,
  hexToRgb,
  hexToHsla,
} from "../utils";

const EXAMPLE_TEXT = "The quick brown fox jumped over the lazy dog.";

export const TOKEN_COLUMNS = {
  [getTokenKey(borderRadiiTokens)]: [
    {
      name: "Name",
      transform: getTokenName(getTokenKey(borderRadiiTokens)),
    },
    { name: "Pixels", transform: getTokenValue },
    {
      name: "Preview",
      transform: createBox("borderRadius", { borderStyle: "solid" }),
    },
  ],
  [getTokenKey(borderWidthTokens)]: [
    {
      name: "Name",
      transform: getTokenName(getTokenKey(borderWidthTokens)),
    },
    { name: "Pixels", transform: getTokenValue },
    {
      name: "Preview",
      transform: createBox("borderWidth", { borderStyle: "solid" }),
    },
  ],
  [getTokenKey(borderStyleTokens)]: [
    { name: "Style", transform: getTokenValue },
    { name: "Preview", transform: createBox("borderStyle") },
  ],
  [getTokenKey(spaceTokens)]: [
    { name: "Pixels", transform: getTokenComment },
    { name: "Rems", transform: getTokenValue },
    {
      name: "Preview",
      transform: createBox("w", { backgroundColor: "#413cff" }),
    },
  ],
  [getTokenKey(iconSizeTokens)]: [
    { name: "Pixels", transform: getTokenComment },
    { name: "Rems", transform: getTokenValue },
    { name: "Preview", transform: createIconSizePreview },
  ],
  [getTokenKey(fontWeightTokens)]: [
    { name: "Weight", transform: getTokenValue },
    { name: "Preview", transform: createBox("fontWeight", {}, EXAMPLE_TEXT) },
  ],
  [getTokenKey(fontSizeTokens)]: [
    { name: "Pixels", transform: getTokenComment },
    { name: "Rems", transform: getTokenValue },
    { name: "Preview", transform: createFontSizePreview },
  ],
  [getTokenKey(colorTokens)]: [
    { name: "Hex", transform: getTokenValue },
    {
      name: "RGB",
      transform: ([, token]: TokenEntry): string => hexToRgb(token.value),
    },
    {
      name: "Hsla",
      transform: ([, token]: TokenEntry): string => hexToHsla(token.value),
    },
    { name: "Preview", transform: createBox("backgroundColor") },
  ],
};
