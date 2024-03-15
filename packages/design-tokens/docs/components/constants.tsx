import React from "react";
import camelCase from "lodash/camelCase";
import capitalize from "lodash/capitalize";
import keys from "lodash/keys";
import filter from "lodash/filter";
import reduce from "lodash/reduce";
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
  getTokenValue,
  hexToRgb,
  hexToHsla,
} from "../utils";
import { Box } from "../../../components/src/primitives/Box";
import { Text } from "../../../components/src/primitives/Text";
import { createPreview } from "./createPreview";

const TEXT_PREVIEW = (
  <Text.span>The quick brown fox jumped over the lazy dog.</Text.span>
);

const COLORS = reduce(
  filter(keys(colorTokens), (item) => item !== "default"),
  (acc, cur) => {
    const arr = [
      {
        name: "Name",
        transform: ([, token]: TokenTuple) => {
          return camelCase(`${cur}${capitalize(token[0])}`);
        },
      },
      { name: "Hex", transform: getTokenValue },
      {
        name: "RGB",
        transform: ([, token]: TokenTuple): string => hexToRgb(token[1].value),
      },
      {
        name: "Hsla",
        transform: ([, token]: TokenTuple): string => hexToHsla(token[1].value),
      },
      {
        name: "Preview",
        transform: createPreview({
          prefix: cur,
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
      [cur]: arr,
    };
  },
  {},
);

export const TOKEN_COLUMNS = {
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
  [getTokenKey(spaceTokens)]: [
    {
      name: "Name",
      transform: getTokenName(spaceTokens),
    },
    { name: "Pixels", transform: getTokenComment },
    { name: "Rems", transform: getTokenValue },
    {
      name: "Preview",
      transform: createPreview({
        prefix: getTokenKey(spaceTokens),
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
          icon: "HeartIcon",
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
  [getTokenKey(fontSizeTokens)]: [
    {
      name: "Name",
      transform: getTokenName(fontSizeTokens),
    },
    { name: "Pixels", transform: getTokenComment },
    { name: "Rems", transform: getTokenValue },
    {
      name: "Preview",
      transform: createPreview({
        prefix: getTokenKey(fontSizeTokens),
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
  ],
  ...COLORS,
};
