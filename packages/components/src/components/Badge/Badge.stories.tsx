import type { Meta, StoryFn } from "@storybook/react";
import React from "react";
import { Badge } from "./Badge";

export default {
  component: Badge,
  title: "Components/Badge",
} as Meta<typeof Badge>;

const Template: StoryFn<typeof Badge> = (args) => <Badge {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "Primary badge",
};

export const DefaultBadgeWithIcon = Template.bind({});
DefaultBadgeWithIcon.args = {
  children: "Blue badge",
  icon: "EyeIcon",
};

export const Gray = Template.bind({});
Gray.args = {
  children: "Gray badge",
  color: "gray",
};

export const Green = Template.bind({});
Green.args = {
  children: "Green badge",
  color: "green",
};

export const Purple = Template.bind({});
Purple.args = {
  children: "Purple badge",
  color: "purple",
};

export const Yellow = Template.bind({});
Yellow.args = {
  children: "Yellow badge",
  color: "yellow",
};

export const Large = Template.bind({});
Large.args = {
  children: "Large badge",
  size: "large",
};

export const LargeBadgeWithIcon = Template.bind({});
LargeBadgeWithIcon.args = {
  children: "Large badge with Icon",
  size: "large",
  icon: "CheckCircleIcon",
};

export const LargeYellowBadgeWithIcon = Template.bind({});
LargeYellowBadgeWithIcon.args = {
  children: "Large badge with icon",
  icon: "ArrowDownCircleIcon",
  size: "large",
  color: "yellow",
};
