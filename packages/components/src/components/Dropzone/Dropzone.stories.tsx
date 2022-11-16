import type { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Dropzone } from "./Dropzone";

export default {
  component: Dropzone,
  title: "Components/Dropzone",
} as ComponentMeta<typeof Dropzone>;

const Template: ComponentStory<typeof Dropzone> = (args) => (
  <Dropzone {...args} onCancel={() => {}} onDrop={() => {}} />
);

export const Default = Template.bind({});

export const Error = Template.bind({});
Error.args = {
  error: "The document failed to upload",
};

export const Loading = Template.bind({});
Loading.args = {
  progress: 50,
};
export const Success = Template.bind({});
Success.args = {
  progress: 100,
};
