import type { ComponentMeta } from "@storybook/react";
import React from "react";
import { Box } from "./Box";

export default {
  component: Box.div,
  title: "Primitives/Box",
} as ComponentMeta<typeof Box.div>;

export const Default = (): JSX.Element => (
  <Box.div
    backgroundColor="colorBackgroundInfo"
    borderColor="colorBorderPrimary"
    borderRadius="borderRadius20"
    borderStyle="borderSolid"
    borderWidth="borderWidth10"
    color="colorTextStronger"
    padding="space40"
  >
    I&apos;m some text in a box.
  </Box.div>
);

export const Responsive = (): JSX.Element => (
  <Box.div
    backgroundColor={{ _: "colorBackgroundWeak", md: "colorBackgroundInfo" }}
    fontSize={{ _: "fontSize30", md: "fontSize60" }}
    padding="space60"
  >
    The background color and text size will change on smaller screens.
  </Box.div>
);

export const AsHeading = (): JSX.Element => (
  <Box.h2>This is an H2 element</Box.h2>
);

export const ProcessesCard = (): JSX.Element => (
  <Box.div>
    <Box.div
      alignItems="center"
      background="linear-gradient(175.85deg, #9FFED5 4.23%, #3767E4 53.02%, #234AE6 70.91%, #102EE9 96.37%)"
      borderRadius="borderRadius40"
      boxShadow={{ hover: "shadowStrong" }}
      color="colorTextInverse"
      cursor={{ hover: "pointer" }}
      display="flex"
      flexDirection="column"
      fontFamily="fontFamilyModerat"
      padding="space70"
    >
      <Box.div
        fontSize="fontSize80"
        fontWeight="fontWeightBold"
        lineHeight="lineHeight90"
      >
        9
      </Box.div>
      <Box.div fontSize="fontSize30">My Processes</Box.div>
    </Box.div>
  </Box.div>
);
