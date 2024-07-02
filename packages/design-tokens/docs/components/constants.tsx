import React from "react";
import keys from "lodash/keys";
import filter from "lodash/filter";
import reduce from "lodash/reduce";
import get from "lodash/get";
import replace from "lodash/replace";
import startsWith from "lodash/startsWith";
import fontSizeTokens from "../../src/tokens/font-size.tokens.json";
import fontWeightTokens from "../../src/tokens/font-weight.tokens.json";
import colorTokens from "../../src/tokens/color.tokens.json";
import iconSizeTokens from "../../src/tokens/size.tokens.json";
import spaceTokens from "../../src/tokens/space.tokens.json";
import borderStyleTokens from "../../src/tokens/border-style.tokens.json";
import borderWidthTokens from "../../src/tokens/border-width.tokens.json";
import borderRadiiTokens from "../../src/tokens/border-radius.tokens.json";
import { Icon } from "../../../components/src/components/Icon/Icon";
import { TokenTuple } from "../types/TokenTuple";
import {
  getTokenComment,
  getTokenKey,
  getTokenName,
  getTokenNameFromTuple,
  getTokenValue,
  hexToRgb,
  hexToHsla,
} from "../utils";
import { Box } from "../../../components/src/primitives/Box";
import { Text } from "../../../components/src/primitives/Text";
import { TokenColumn } from "../types/TokenColumn";
import { Token } from "../types/Token";
import { createPreview } from "./createPreview";

const TEXT_PREVIEW = (
  <Text.span>The quick brown fox jumped over the lazy dog.</Text.span>
);

type TokenColumnsProps = {
  [key: string]: Array<TokenColumn>;
};

const getTokenFromVariable = (tokens: unknown, token: Token): string => {
  return get(tokens, replace(token.value, /[{}]/g, "")).value as string;
};

const COLORS = reduce(
  filter(keys(colorTokens), (item) => item !== "default"),
  (acc, prefix) => {
    const arr = [
      {
        name: "Name",
        transform: getTokenNameFromTuple(prefix),
      },
      {
        name: "Raw",
        transform: ([, token]: TokenTuple) => token.value,
      },
      {
        name: "Hex",
        transform: ([, token]: TokenTuple) =>
          startsWith(token.value, "{")
            ? getTokenFromVariable(colorTokens, token)
            : token.value,
      },
      {
        name: "RGB",
        transform: ([, token]: TokenTuple): string =>
          startsWith(token.value, "{")
            ? hexToRgb(getTokenFromVariable(colorTokens, token))
            : hexToRgb(token.value),
      },
      {
        name: "Hsla",
        transform: ([, token]: TokenTuple): string =>
          startsWith(token.value, "{")
            ? hexToHsla(getTokenFromVariable(colorTokens, token))
            : hexToHsla(token.value),
      },
      {
        name: "Preview",
        transform: createPreview({
          prefix,
          attribute: "backgroundColor",
          componentProps: {
            w: "70px",
            h: "30px",
            borderRadius: "borderRadius35",
          },
        }),
      },
    ];

    return {
      ...acc,
      [prefix]: arr,
    };
  },
  {},
);

const FONT_SIZE = reduce(
  filter(keys(fontSizeTokens), (item) => item !== "default"),
  (acc, prefix) => {
    const columns = [
      {
        name: "Name",
        transform: getTokenNameFromTuple(prefix),
      },
      { name: "Pixels", transform: getTokenComment },
      { name: "Rems", transform: getTokenValue },
      {
        name: "Preview",
        transform: createPreview({
          prefix,
          attribute: "fontSize",
          children: TEXT_PREVIEW,
          componentProps: {
            p: "space40",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            overflow: "hidden",
            maxWidth: "600px",
          },
        }),
      },
    ];

    return {
      ...acc,
      [prefix]: columns,
    };
  },
  {},
);

const SPACE = reduce(
  filter(keys(spaceTokens), (item) => item !== "default"),
  (acc, prefix) => {
    const columns = [
      {
        name: "Name",
        transform: getTokenNameFromTuple(prefix),
      },
      { name: "Pixels", transform: getTokenComment },
      { name: "Rems", transform: getTokenValue },
      {
        name: "Preview",
        transform: createPreview({
          prefix,
          attribute: "p",
          children: (
            <Box.div
              backgroundColor="colorBackgroundPrimaryWeakest"
              h="50px"
              w="50px"
            />
          ),
          componentProps: {
            backgroundColor: "colorBackgroundPrimaryWeak",
            display: "inline-flex",
            justifyContent: "center",
          },
        }),
      },
    ];

    return {
      ...acc,
      [prefix]: columns,
    };
  },
  {},
);

export const TOKEN_COLUMNS: TokenColumnsProps = {
  [getTokenKey(borderRadiiTokens)]: [
    {
      name: "Name",
      transform: getTokenName(borderRadiiTokens),
    },
    { name: "Pixels", transform: getTokenValue },
    {
      name: "Preview",
      transform: createPreview({
        prefix: getTokenKey(borderRadiiTokens),
        attribute: "borderRadius",
        componentProps: {
          borderStyle: "borderStyleSolid",
          w: "50px",
          h: "50px",
        },
        overrideProps: {
          pill: {
            h: "30px",
          },
        },
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
      transform: createPreview({
        prefix: getTokenKey(borderWidthTokens),
        attribute: "borderWidth",
        componentProps: {
          borderStyle: "borderStyleSolid",
          w: "50px",
          h: "50px",
        },
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
      transform: createPreview({
        prefix: getTokenKey(borderStyleTokens),
        attribute: "borderStyle",
        componentProps: {
          w: "50px",
          h: "50px",
        },
      }),
    },
  ],

  [getTokenKey(iconSizeTokens)]: [
    {
      name: "Name",
      transform: getTokenName(iconSizeTokens),
    },
    { name: "Pixels", transform: getTokenComment },
    { name: "Rems", transform: getTokenValue },
    {
      name: "Preview",
      transform: createPreview({
        prefix: getTokenKey(iconSizeTokens),
        component: Icon,
        componentProps: {
          decorative: true,
          display: "flex",
          icon: "book-open",
        },
        attribute: "size",
        children: (
          <Box.div
            backgroundColor="colorBackgroundPrimaryWeakest"
            h="50px"
            w="50px"
          />
        ),
      }),
    },
  ],
  [getTokenKey(fontWeightTokens)]: [
    {
      name: "Name",
      transform: getTokenName(fontWeightTokens),
    },
    { name: "Weight", transform: getTokenValue },
    {
      name: "Preview",
      transform: createPreview({
        prefix: getTokenKey(fontWeightTokens),
        attribute: "fontWeight",
        children: TEXT_PREVIEW,
      }),
    },
  ],
  ...SPACE,
  ...FONT_SIZE,
  ...COLORS,
};
