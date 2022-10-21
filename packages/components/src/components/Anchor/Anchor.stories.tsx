import type { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Anchor } from "./Anchor";

export default {
  component: Anchor,
  title: "Components/Anchor",
} as ComponentMeta<typeof Anchor>;

const Template: ComponentStory<typeof Anchor> = (args) => <Anchor {...args} />;

const defaultArgs = {
  children: "I'm an anchor",
  href: "https://www.localyze.com",
};

export const Default = Template.bind({});
Default.args = {
  ...defaultArgs,
};

export const External = Template.bind({});
External.args = {
  ...defaultArgs,
  isExternal: true,
};
