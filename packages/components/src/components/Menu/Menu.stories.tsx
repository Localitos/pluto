import type { Meta } from "@storybook/react";
import React from "react";
import noop from "lodash/noop";
import { Button } from "../Button";
import { Box } from "../../primitives/Box";
import { Menu, MenuItemProps } from "./Menu";

export default {
  component: Menu,
  title: "Components/Menu",
} as Meta<typeof Menu>;

export const Default = (): JSX.Element => {
  const items: MenuItemProps[] = [
    {
      onClick: noop,
      label: "Option 1",
    },
    {
      onClick: noop,
      label: "Option 2",
    },
  ];

  return (
    <Box.div minHeight="100px">
      <Menu items={items} />
    </Box.div>
  );
};

export const WithCustomMenuButton = (): JSX.Element => {
  const items: MenuItemProps[] = [
    {
      onClick: noop,
      label: "Option 1",
    },
    {
      onClick: noop,
      label: "Option 2",
    },
  ];

  const menuButton = <Button variant="primary">Open Menu</Button>;

  return (
    <Box.div minHeight="100px">
      <Menu items={items} menuButton={menuButton} />
    </Box.div>
  );
};
