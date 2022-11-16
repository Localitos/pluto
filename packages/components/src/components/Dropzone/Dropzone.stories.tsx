import type { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Dropzone } from "./Dropzone";

export default {
  component: Dropzone,
  title: "Components/Dropzone",
} as ComponentMeta<typeof Dropzone>;

const Template: ComponentStory<typeof Dropzone> = (args) => (
  <Dropzone {...args} />
);
{
  /* <Dropzone fileType="foo" onSuccess={() => console.log('yay')} /> */
}

export const Simple = Template.bind({});
Simple.args = {};

// User

/* Potential props */
/* FileTypes */
/* OnSuccess */
// This is the function that will send the file to an endpoint

// Notes on Dropzone

// Question about the icons? How do I Type them?

// How do we get a loading state?

// How do I combine the getBackgroundColors and getBorderColors functions?

// How do I get the progress bar displaying?

// What exactly is the focus and what do I need from the input?
