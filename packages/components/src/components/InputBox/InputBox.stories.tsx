import type { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { InputBox } from "./InputBox";

export default {
  component: InputBox,
  title: "Components/InputBox",
} as ComponentMeta<typeof InputBox>;

const Template: ComponentStory<typeof InputBox> = (args) => (
  <InputBox {...args}>Input Box</InputBox>
);

export const Default = Template.bind({});
Default.args = {};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const ReadOnly = Template.bind({});
ReadOnly.args = {
  readOnly: true,
};

export const Error = Template.bind({});
Error.args = {
  hasError: true,
};

export const Hidden = Template.bind({});
Hidden.args = {
  type: "hidden",
};
