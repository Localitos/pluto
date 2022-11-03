import type { ComponentMeta, ComponentStory } from "@storybook/react";
import map from "lodash/map";
import React from "react";
import { Box } from "../../primitives/Box";
import { Button, ButtonProps } from "./Button";

export default {
  component: Button,
  title: "Components/Button",
} as ComponentMeta<typeof Button>;

const variants = ["primary", "secondary", "ghost"];

const Template: ComponentStory<typeof Button> = (args) => (
  <Box.div alignItems="center" display="flex" gap="space30">
    {map(variants, (variant: ButtonProps["variant"]) => {
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
  leadingIcon: "ArrowTopRightOnSquareIcon",
};

export const WithTrailingIcon = Template.bind({});
WithTrailingIcon.args = {
  children: "Button with icon",
  size: "large",
  trailingIcon: "ArrowTopRightOnSquareIcon",
};

export const AsLink = Template.bind({});
AsLink.args = {
  as: "a",
  children: "Link button",
  href: "#",
};

export const AsLabel = Template.bind({});
AsLabel.args = {
  as: "label",
  children: "Label button",
};

export const FullWidth: React.FC = () => (
  <Box.div
    alignItems="center"
    display="flex"
    flexDirection="column"
    gap="space60"
  >
    {map(variants, (variant: ButtonProps["variant"]) => {
      return (
        <Button
          fullWidth
          leadingIcon="ArrowTopRightOnSquareIcon"
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
  leadingIcon: "TrashIcon",
  iconOnly: true,
  size: "large",
  "aria-label": "Delete",
};
