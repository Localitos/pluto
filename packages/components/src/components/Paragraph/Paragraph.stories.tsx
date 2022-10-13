import type { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Paragraph } from "./Paragraph";

export default {
  component: Paragraph,
  title: "Components/Paragraph",
} as ComponentMeta<typeof Paragraph>;

const Template: ComponentStory<typeof Paragraph> = (args) => (
  <Paragraph {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children:
    "This is primarily used for longer paragraphs on the website and instructional information within the app.",
};

export const Small = Template.bind({});
Small.args = {
  children: "This is primarily for legal copy and error messages.",
  size: "small",
};

export const Large = Template.bind({});
Large.args = {
  children:
    "This is primarily used for shorter paragraphs on the website i.e. “snippets” and instructional information within the app that require more attention.",
  size: "large",
};

export const NoMargin = Template.bind({});
NoMargin.args = {
  children:
    "Paragraphs have a default bottom margin. Use “space0” to override the bottom margin to zero.",
  marginBottom: "space0",
};
