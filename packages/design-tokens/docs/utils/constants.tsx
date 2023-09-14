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
  createIconPreview,
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
      transform: getTokenName(borderRadiiTokens),
    },
    { name: "Pixels", transform: getTokenValue },
    {
      name: "Preview",
      transform: createBox("borderRadius", {
        borderStyle: "solid",
        w: "50px",
        h: "50px",
      }),
    },
  ],
  [getTokenKey(borderWidthTokens)]: [
    {
      name: "Name",
      transform: getTokenName(borderWidthTokens),
    },
    { name: "Pixels", transform: getTokenValue },
    {
      name: "Preview",
      transform: createBox("borderWidth", {
        borderStyle: "solid",
        w: "50px",
        h: "50px",
      }),
    },
  ],
  [getTokenKey(borderStyleTokens)]: [
    {
      name: "Name",
      transform: getTokenName(borderStyleTokens),
    },
    { name: "Style", transform: getTokenValue },
    {
      name: "Preview",
      transform: createBox("borderStyle", { w: "50px", h: "50px" }),
    },
  ],
  [getTokenKey(spaceTokens)]: [
    {
      name: "Name",
      transform: getTokenName(spaceTokens),
    },
    { name: "Pixels", transform: getTokenComment },
    { name: "Rems", transform: getTokenValue },
    {
      name: "Preview",
      transform: createBox("w", { backgroundColor: "#413cff" }),
    },
  ],
  [getTokenKey(iconSizeTokens)]: [
    {
      name: "Name",
      transform: getTokenName(iconSizeTokens),
    },
    { name: "Pixels", transform: getTokenComment },
    { name: "Rems", transform: getTokenValue },
    { name: "Preview", transform: createIconPreview },
  ],
  [getTokenKey(fontWeightTokens)]: [
    {
      name: "Name",
      transform: getTokenName(fontWeightTokens),
    },
    { name: "Weight", transform: getTokenValue },
    { name: "Preview", transform: createBox("fontWeight", {}, EXAMPLE_TEXT) },
  ],
  [getTokenKey(fontSizeTokens)]: [
    {
      name: "Name",
      transform: getTokenName(fontSizeTokens),
    },
    { name: "Pixels", transform: getTokenComment },
    { name: "Rems", transform: getTokenValue },
    { name: "Preview", transform: createFontSizePreview },
  ],
  [getTokenKey(colorTokens)]: [
    {
      name: "Name",
      transform: getTokenName(colorTokens),
    },
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
