// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable react/no-unescaped-entities */
import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Link as ReactRouterLink, BrowserRouter } from "react-router-dom";
import Link from "next/link";
import { Anchor } from "./Anchor";

const meta: Meta<typeof Anchor> = {
  title: "Components/Anchor",
  component: Anchor,
};

export default meta;
type Story = StoryObj<typeof Anchor>;

export const Default: Story = {
  render: () => <Anchor href="#">I'm an anchor</Anchor>,
};

export const External: Story = {
  render: () => (
    <Anchor href="#" isExternal>
      I'm an anchor
    </Anchor>
  ),
};

export const WithReactRouter: Story = {
  render: () => (
    <BrowserRouter>
      <Anchor as={ReactRouterLink} to="/router-page">
        React router link
      </Anchor>
    </BrowserRouter>
  ),
};

export const WithNextJS: Story = {
  render: () => (
    <Link href="/router-page" legacyBehavior passHref>
      <Anchor>NextJS link</Anchor>
    </Link>
  ),
};
WithNextJS.parameters = {
  nextjs: {
    router: {
      basePath: "/router-page",
    },
  },
};
