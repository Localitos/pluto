import type { Meta, StoryFn } from "@storybook/react";
import React from "react";
import { HelpText } from "./HelpText";

export default {
  component: HelpText,
  title: "Components/HelpText",
} as Meta<typeof HelpText>;

const Template: StoryFn<typeof HelpText> = (args) => <HelpText {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "This is help text.",
};

export const Error = Template.bind({});
Error.args = {
  children: "This is an error message.",
  hasError: true,
};
