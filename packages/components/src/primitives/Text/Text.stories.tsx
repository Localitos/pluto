import type { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Text } from "./Text";

export default {
  component: Text,
  title: "Primitives/Text",
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "This is the text component.",
};

export const Heading = Template.bind({});
Heading.args = {
  as: "h2",
  children: "This is the text component as a heading.",
  fontWeight: "fontWeightMedium",
  fontSize: "fontSize50",
  lineHeight: "lineHeight60",
};

export const Paragraph = Template.bind({});
Paragraph.args = {
  as: "p",
  children: "This is the text component as a paragraph.",
};

export const ErrorText = Template.bind({});
ErrorText.args = {
  children: "This is the text component as an error message.",
  color: "colorTextError",
};

export const Underlined = Template.bind({});
Underlined.args = {
  children: "This is underlined text.",
  textDecoration: "underline",
};

export const Uppercase = Template.bind({});
Uppercase.args = {
  children: "This is uppercase text.",
  textTransform: "uppercase",
};
