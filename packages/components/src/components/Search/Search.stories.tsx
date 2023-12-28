import type { Meta, StoryFn } from "@storybook/react";
import React from "react";
import { Search } from "./Search";

export default {
  component: Search,
  title: "Components/Search",
} as Meta<typeof Search>;

const Template: StoryFn<typeof Search> = (args) => <Search {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: "Search...",
};

export const Large = Template.bind({});
Large.args = {
  placeholder: "Search...",
  size: "large",
};
