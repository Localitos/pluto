import React from "react";
import map from "lodash/map";
import { FontPreview } from "./FontPreview";
import { Token } from "./types/Token";
import { hexToHsla, hexToRgb } from "./utils/colors";
import * as fontSizeTokens from "../src/tokens/font-size.tokens.json";
import * as colorTokens from "../src/tokens/color.tokens.json";


const getKey = (object: Record<string, unknown>): string => {
  return Object.keys(object)[0];
};

type Row = Array<JSX.Element | string>;
type TokenEntry = [string, Token];
type Column = {
  name: string;
  transform: (entry: TokenEntry) => string | JSX.Element;
};

const createFontPreview = ([tokenSuffix, token]: TokenEntry) => {
  return <FontPreview fontSize={token.value} key={tokenSuffix} />;
};

const getValue = ([, token]: TokenEntry): string => {
  return token.value;
};

const getComment = ([, token]: TokenEntry): string => {
  return token.comment || "";
};

const formatTokenName = (prefix: string, suffix: string) => {
  return `${prefix}${suffix}`;
};



export const TOKENS = {
  [getKey(fontSizeTokens)]: [
    { name: "pixels", transform: getComment },
    { name: "rems", transform: getValue },
    { name: "preview", transform: createFontPreview },
  ],
  [getKey(colorTokens)]: [
    { name: "Hex", transform: getValue },
    { name: "RGB", transform: ([, token]: TokenEntry) => hexToRgb(token.value) },
    {
      name: "hsla",
      transform: ([, token]: TokenEntry) => hexToHsla(token.value),
    },
    { name: "Preview", transform: createFontPreview },
  ],
}


export const renderRows = (
  columns: Column[],
  tokens: Record<string, Record<string, Token>>
): Array<Row> => {
  const [tokenName, tokenEntries] = Object.entries(tokens)[0];

  return map(Object.entries(tokenEntries), (token) => {
    const [key] = token;

    const row = [
      formatTokenName(tokenName, key),
      ...map(columns, (column) => {
        return column.transform(token);
      }),
    ] as Row;

    return row;
  });
};
