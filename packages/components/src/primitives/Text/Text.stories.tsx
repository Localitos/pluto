import type { Meta } from "@storybook/react";
import React from "react";
import { Text } from "./Text";

export default {
  component: Text.span,
  title: "Primitives/Text",
} as Meta<typeof Text.span>;

export const Default = (): JSX.Element => (
  <Text.span>This is the text component.</Text.span>
);

export const Heading = (): JSX.Element => (
  <Text.h2
    fontSize="fontSize50"
    fontWeight="fontWeightMedium"
    lineHeight="lineHeight60"
  >
    This is the text component as a heading.
  </Text.h2>
);

export const Paragraph = (): JSX.Element => (
  <Text.p>This is the text component as a paragraph.</Text.p>
);

export const ErrorText = (): JSX.Element => (
  <Text.span color="colorTextError">
    This is the text component as an error message.
  </Text.span>
);

export const Underlined = (): JSX.Element => (
  <Text.span textDecoration="underline">This is underlined text.</Text.span>
);

export const Uppercase = (): JSX.Element => (
  <Text.span textTransform="uppercase">This is uppercase text.</Text.span>
);
