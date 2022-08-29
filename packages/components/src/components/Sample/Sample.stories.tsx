import type { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Sample } from "./Sample";

export default {
  component: Sample,
  title: "Sample",
} as ComponentMeta<typeof Sample>;

const Template: ComponentStory<typeof Sample> = (args) => <Sample {...args} />;

export const Simple = Template.bind({});
Simple.args = {
  label: "This is a sample component",
};
