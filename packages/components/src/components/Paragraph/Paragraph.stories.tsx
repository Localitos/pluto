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
    "This is primarily used for longer paragraphs on the website and instructional information within the app. Lorem ipsum dolor sit, consectetur, sed do ut labore et dolore.",
};
