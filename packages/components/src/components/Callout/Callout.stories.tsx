import type { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Box } from "../../primitives/Box";
import { Text } from "../../primitives/Text";
import { Callout } from "./Callout";

export default {
  component: Callout,
  title: "Components/Callout",
} as ComponentMeta<typeof Callout>;

const Template: ComponentStory<typeof Callout> = ({ children, ...args }) => (
  <Callout {...args}>{children}</Callout>
);

export const Default = Template.bind({});
Default.args = {
  children: (
    <Box.div>
      <Text.p>This is a default message.</Text.p>
      <Text.a color="colorTextInfo" href="#">
        Text Link
      </Text.a>
    </Box.div>
  ),
};

export const Information = Template.bind({});
Information.args = {
  children: "This is an info message.",
  variant: "information",
};

export const Warning = Template.bind({});
Warning.args = {
  children: "This is a warning.",
  variant: "warning",
};

export const Success = Template.bind({});
Success.args = {
  children: "This is a success message.",
  variant: "success",
};

export const Error = Template.bind({});
Error.args = {
  children: "This is an error.",
  variant: "error",
};

export const WithoutBackground = Template.bind({});
WithoutBackground.args = {
  children: "This is an callout without background.",
  withoutBackground: true,
};
