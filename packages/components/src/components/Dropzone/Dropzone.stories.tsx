import type { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Dropzone } from "./Dropzone";

// Disabling the overzealous rules.
// eslint-disable-next-line lodash/prefer-noop, @typescript-eslint/no-empty-function
const NOOP = (): void => {};

export default {
  component: Dropzone,
  title: "Components/Dropzone",
} as ComponentMeta<typeof Dropzone>;

const Template: ComponentStory<typeof Dropzone> = (args) => (
  <Dropzone {...args} onCancel={NOOP} onDrop={NOOP} />
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
