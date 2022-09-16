import type { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Box } from "./Box";

export default {
  component: Box,
  title: "Primitives/Box",
} as ComponentMeta<typeof Box>;

const Template: ComponentStory<typeof Box> = (args) => <Box {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "I'm some text in a box.",
  backgroundColor: "colorBackgroundInfo",
  color: "colorTextStronger",
  padding: "space30",
  borderStyle: "borderSolid",
  borderWidth: "borderWidth10",
  borderColor: "colorBorderPrimary",
  borderRadius: "borderRadius20",
};

export const Responsive = Template.bind({});
Responsive.args = {
  children:
    "The background color and text size will change on smaller screens.",
  backgroundColor: {
    "@initial": "colorBackgroundWeak",
    "@media (min-width: 800px)": "colorBackgroundInfo",
  },
  fontSize: {
    "@initial": "fontSize30",
    "@media (min-width: 800px)": "fontSize60",
  },
  padding: "space60",
};

export const AsHeading = Template.bind({});
AsHeading.args = {
  as: "h2",
  children: "This is an H2 element",
};

export const ProcessesCard = (): JSX.Element => (
  <Box css={{ maxWidth: "450px" }}>
    <Box
      background="colorBackgroundGradientProcesses"
      borderRadius="borderRadius40"
      color="colorTextInverse"
      css={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        "&:hover": {
          cursor: "pointer",
          boxShadow: "$shadowStrong",
        },
      }}
      fontFamily="moderat"
      padding="space70"
    >
      <Box fontSize="fontSize80" fontWeight="fontWeightBold">
        9
      </Box>
      <Box fontSize="fontSize30">My Processes</Box>
    </Box>
  </Box>
);
