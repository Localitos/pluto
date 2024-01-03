import type { Meta, StoryFn } from "@storybook/react";
import React from "react";
import { Label } from "./Label";

export default {
  component: Label,
  title: "Components/Label",
} as Meta<typeof Label>;

const Template: StoryFn<typeof Label> = (args) => <Label {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "Label",
};

export const Required = Template.bind({});
Required.args = {
  children: "Label",
  required: true,
};
