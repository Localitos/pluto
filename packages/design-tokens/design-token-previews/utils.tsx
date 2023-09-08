import React from "react";
import map from "lodash/map";
import pick from "lodash/pick";
import { FontPreview } from "./FontPreview";

type Row = Array<JSX.Element | string>;

type SingleToken = Record<string, { value: string; comment?: string }>;

const colorHeaders = ["Name", "Color", "Hex", "RGB", "hsla"];

// const fontSizeHeaders = ["Name", "Pixels", "Rems", "Visualisation"];

const createFontPreview = (token) => {
  const [key, value] = token;

  return <FontPreview fontSize={value.comment} key={key} />;
};

const fontSizeHeaders = [
  { name: "Name", transform: console.log },
  { name: "pixels", transform: console.log },
  { name: "rems", transform: console.log },
  { name: "preview", transform: createFontPreview },
];

const formatTokenName = (prefix: string, suffix: string) => {
  return `${prefix}${suffix}`;
};

const getAttributeValue = (key: string, token: SingleToken) => {
  return token[key];
};

const getComment = (token: SingleToken) => {
  const [, value] = token;
  return getAttributeValue("comment", value);
};

export const renderRows = (tokens: Record<string, SingleToken>): Array<Row> => {
  const [tokenName, tokenEntries] = Object.entries(tokens)[0];

  return map(Object.entries(tokenEntries), (token) => {
    const [key, value] = token;

    return [
      formatTokenName(tokenName, key),
      getComment(token), getAttributeValue("value", value),
      <FontPreview fontSize={value.comment} key={key} />,
    ] as Row;
  });
};
