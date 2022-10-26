import type { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { HelpText } from "./HelpText";

export default {
  component: HelpText,
  title: "Components/HelpText",
} as ComponentMeta<typeof HelpText>;

const Template: ComponentStory<typeof HelpText> = (args) => (
  <HelpText {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: "This is help text.",
};

export const Error = Template.bind({});
Error.args = {
  children: "This is an error message.",
  hasError: true,
};
