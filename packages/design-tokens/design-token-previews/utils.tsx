import React from "react";
import map from "lodash/map";
import keys from "lodash/keys";
import camelCase from "lodash/camelCase";
import capitalize from "lodash/capitalize";
import invokeMap from "lodash/invokeMap";

import fontSizeTokens from "../src/tokens/font-size.tokens.json";
import fontWeightTokens from "../src/tokens/font-weight.tokens.json";
import colorTokens from "../src/tokens/color.tokens.json";
import iconSizeTokens from "../src/tokens/size.tokens.json";
import spaceTokens from "../src/tokens/space.tokens.json";
import borderStyleTokens from "../src/tokens/border-style.tokens.json";
import borderWidthTokens from "../src/tokens/border-width.tokens.json";
import borderRadiiTokens from "../src/tokens/border-radius.tokens.json";

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
import { Token, TokenEntry } from "./types/Token";
import { Column, Row } from "./types/TokenTable";

import { CopyToClipboardButton } from "./CopyToClipboardButton";

const getKey = (object: Record<string, unknown>): string => {
  return keys(object)[0];
};

const getValue = ([, token]: TokenEntry): string => {
  return token.value;
};

const getComment = ([, token]: TokenEntry): string => {
  return token.comment || "";
};

const formatTokenName = (prefix: string, suffix: string) => {
  const tokenName = camelCase(`${prefix}${capitalize(suffix)}`);
  return (
    <div style={{ display: "flex" }}>
      <div>{tokenName}</div>
      <div>
        <CopyToClipboardButton textToCopy={tokenName} />
      </div>
    </div>
  );
};

export const TOKENS = {
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

export const renderRows = (
  columns: Column[],
  tokens: Record<string, Record<string, Token>>
): Array<Row> => {
  const [tokenName, tokenEntries] = Object.entries(tokens)[0];

  return map(Object.entries(tokenEntries), (token) => {
    const [key] = token;

    const tokenRows: Row[] = invokeMap(columns, "transform", token) as Row[];

    return [formatTokenName(tokenName, key), ...tokenRows];
  }) as Row[];
};
