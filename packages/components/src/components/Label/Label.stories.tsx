import type { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Label } from "./Label";

export default {
  component: Label,
  title: "Components/Label",
} as ComponentMeta<typeof Label>;

const Template: ComponentStory<typeof Label> = (args) => <Label {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "Label",
};

export const Required = Template.bind({});
Required.args = {
  children: "Label",
  required: true,
};
