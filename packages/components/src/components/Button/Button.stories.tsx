import type { Meta, StoryFn } from "@storybook/react";
import map from "lodash/map";
import React, { ReactElement } from "react";
import dropRight from "lodash/dropRight";
import { Link as ReactRouterLink, BrowserRouter } from "react-router-dom";
import Link from "next/link";
import { Box } from "../../primitives/Box";
import { Button, ButtonProps } from "./Button";

export default {
  component: Button,
  title: "Components/Button",
} as Meta<typeof Button>;

const variants = ["primary", "secondary", "destructive", "ghost", "outline"];

const Template: StoryFn<typeof Button> = (args) => (
  <Box.div alignItems="center" display="flex" gap="space30">
    {map(dropRight(variants), (variant: ButtonProps["variant"]) => {
      return (
        <Box.div padding="space60">
          <Button {...args} variant={variant} />
        </Box.div>
      );
    })}
  </Box.div>
);

export const Default = Template.bind({});
Default.args = {
  children: "Default button",
};

export const Outline = (): ReactElement => (
  <Box.div
    alignItems="flex-start"
    backgroundColor="colorBackgroundDecorativeStrong"
    display="flex"
    flexDirection="column"
    gap="space30"
    padding="space60"
  >
    <Button variant="outline">Default button</Button>
    <Button size="large" variant="outline">
      Large button
    </Button>
  </Box.div>
);

export const Large = Template.bind({});
Large.args = {
  children: "Large button",
  size: "large",
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: "Disabled button",
  disabled: true,
};

export const Loading = Template.bind({});
Loading.args = {
  children: "Loading...",
  loading: true,
};

export const WithLeadingIcon = Template.bind({});
WithLeadingIcon.args = {
  children: "Button with icon",
  size: "small",
  leadingIcon: "square-arrow-out-up-right",
};

export const WithTrailingIcon = Template.bind({});
WithTrailingIcon.args = {
  children: "Button with icon",
  size: "large",
  trailingIcon: "square-arrow-out-up-right",
};

export const AsLink = Template.bind({});
AsLink.args = {
  as: "a",
  children: "Link button",
  href: "#",
};

export const WithReactRouter = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Button as={ReactRouterLink} to="/router-page" variant="primary">
        React router link
      </Button>
    </BrowserRouter>
  );
};

export const WithNextJS: StoryFn<typeof Button> = () => {
  return (
    <Link href="/router-page" legacyBehavior passHref>
      <Button as="a" variant="primary">
        NextJS link
      </Button>
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

export const FullWidth: React.FC = () => (
  <Box.div
    alignItems="center"
    display="flex"
    flexDirection="column"
    gap="space60"
  >
    {map(dropRight(variants), (variant: ButtonProps["variant"]) => {
      return (
        <Button
          fullWidth
          leadingIcon="square-arrow-out-up-right"
          variant={variant}
        >
          Full width button
        </Button>
      );
    })}
  </Box.div>
);

export const IconOnly = Template.bind({});
IconOnly.args = {
  leadingIcon: "trash-2",
  iconOnly: true,
  size: "large",
  "aria-label": "Delete",
};
