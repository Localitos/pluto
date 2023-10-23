import type { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Box } from "../../primitives/Box";
import { Text } from "../../primitives/Text";
import { Anchor } from "../Anchor";
import { ListItem, UnorderedList } from "../List";
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
      <Text.span display="block">This is a default message.</Text.span>
      <Box.div color="colorTextLink">
        <UnorderedList color="currentcolor" marginBottom="space0">
          <ListItem>
            <Anchor href="https://www.localyze.com">localyze.com</Anchor>
          </ListItem>
        </UnorderedList>
      </Box.div>
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

export const WithCustomIcon = Template.bind({});
WithCustomIcon.args = {
  children: "This is an info message with a custom icon.",
  variant: "information",
  icon: "FireIcon",
};
