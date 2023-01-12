import type { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Link as ReactRouterLink, BrowserRouter } from "react-router-dom";
import Link from "next/link";
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
      <Anchor as={ReactRouterLink} to="/router-page">
        React router link
      </Anchor>
    </BrowserRouter>
  );
};

export const WithNextJS: ComponentStory<typeof Anchor> = () => {
  return (
    <Link href="/router-page" legacyBehavior passHref>
      <Anchor>NextJS link</Anchor>
    </Link>
  );
};
WithNextJS.parameters = {
  nextjs: {
    router: {
      basePath: "/router-page",
    },
  },
};
