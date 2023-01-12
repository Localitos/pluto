import type { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Link, BrowserRouter } from "react-router-dom";
import { Anchor } from "./Anchor";

export default {
  component: Anchor,
  title: "Components/Anchor",
} as ComponentMeta<typeof Anchor>;

const Template: ComponentStory<typeof Anchor> = (args) => <Anchor {...args} />;

const defaultArgs = {
  children: "I'm an anchor",
  href: "#",
};

export const Default = Template.bind({});
Default.args = {
  ...defaultArgs,
};

export const External = Template.bind({});
External.args = {
  ...defaultArgs,
  isExternal: true,
};

export const WithReactRouter = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Anchor as={Link} to="/router-page">
        Testing
      </Anchor>
    </BrowserRouter>
  );
};
