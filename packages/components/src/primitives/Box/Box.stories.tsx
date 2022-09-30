import type { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Box } from "./Box";

export default {
  component: Box,
  title: "Primitives/Box",
} as ComponentMeta<typeof Box>;

const Template: ComponentStory<typeof Box> = (args) => (
  <Box
    _hover={{
      backgroundColor: ["colorBackground", "colorBackgroundBody"],
      borderColor: ["colorBorder", "colorBorderError"],
      color: ["colorText", "colorTextStronger"],
    }}
    {...args}
  />
);

export const Default = Template.bind({});
Default.args = {
  children: "I'm some text in a box.",
  // BackgroundColor: "colorBackgroundInfo",
  // Color: "colorTextIconStronger",
  padding: "space30",
  borderStyle: "solid",
  borderWidth: "borderWidth10",
  // BorderColor: "colorBorderPrimary",
  borderRadius: "borderRadius20",
};

export const Responsive = Template.bind({});
Responsive.args = {
  children:
    "The background color and text size will change on smaller screens.",
  backgroundColor: ["colorBackgroundWeak", "colorBackgroundInfo"],
  borderStyle: "solid",
  borderWidth: "borderWidth10",
  borderColor: ["colorBorderPrimary", "colorBorderError"],
  fontSize: ["fontSize30", "fontSize60"],
  lineHeight: ["lineHeight40", "lineHeight70"],
  padding: "space60",
};

export const AsHeading = Template.bind({});
AsHeading.args = {
  as: "h2",
  children: "This is an H2 element",
};

export const ProcessesCard = (): JSX.Element => (
  <Box maxWidth="450px">
    <Box
      _hover={{
        cursor: "pointer",
        boxShadow: "shadowFocus",
      }}
      alignItems="center"
      backgroundImage="linear-gradient(175.85deg, #9FFED5 4.23%, #3767E4 53.02%, #234AE6 70.91%, #102EE9 96.37%)"
      borderRadius="borderRadius40"
      color="colorTextInverse"
      display="flex"
      flexDirection="column"
      fontFamily="fontFamilyModerat"
      padding="space70"
    >
      <Box
        fontSize="fontSize80"
        fontWeight="fontWeightBold"
        lineHeight="lineHeight90"
      >
        9
      </Box>
      <Box fontSize="fontSize30">My Processes</Box>
    </Box>
  </Box>
);
