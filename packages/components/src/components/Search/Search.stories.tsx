import type { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Search } from "./Search";

export default {
  component: Search,
  title: "Components/Search",
} as ComponentMeta<typeof Search>;

const Template: ComponentStory<typeof Search> = (args) => <Search {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: "Search...",
};

export const Large = Template.bind({});
Large.args = {
  placeholder: "Search...",
  size: "large",
};
