import type { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Button } from "./Button";

export default {
  component: Button,
  title: "Components/Button",
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "Primary button",
};

export const Large = Template.bind({});
Large.args = {
  children: "Large primary button",
  size: "large",
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: "Primary disabled button",
  disabled: true,
};

export const Loading = Template.bind({});
Loading.args = {
  children: "Loading...",
  loading: true,
};

export const AsLink = Template.bind({});
AsLink.args = {
  as: "a",
  children: "Link button",
  href: "#",
};
