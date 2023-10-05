import type { Meta } from "@storybook/react";
import { StoryObj } from "@storybook/react";
import React from "react";
import noop from "lodash/noop";
import { Button } from "../Button";
import { Box } from "../../primitives/Box";
import { Menu, MenuItemProps } from "./Menu";

const meta: Meta<typeof Menu> = {
  title: "Components/Menu",
  component: Menu,
};

export default meta;
type Story = StoryObj<typeof Menu>;

const DefaultMenu = (): JSX.Element => {
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

export const Default: Story = {
  render: (): JSX.Element => <DefaultMenu />,
};

Default.parameters = {
  docs: {
    storyDescription:
      "A menu is a button element that opens a menu with items.",
  },
};

const CustomButtonMenu = (): JSX.Element => {
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

export const WithCustomMenuButton: Story = {
  render: (): JSX.Element => <CustomButtonMenu />,
};

const ManyItemsMenu = (): JSX.Element => {
  const items: MenuItemProps[] = [
    {
      onClick: noop,
      label: "Option 1",
    },
    {
      onClick: noop,
      label: "Option 2",
    },
    {
      onClick: noop,
      label: "Option 3",
    },
    {
      onClick: noop,
      label: "Option 4",
    },
    {
      onClick: noop,
      label: "Option 5",
    },
    {
      onClick: noop,
      label: "Option 6",
    },
    {
      onClick: noop,
      label: "Option 7",
    },
    {
      onClick: noop,
      label: "Option 8",
    },
    {
      onClick: noop,
      label: "Option 9",
    },
    {
      onClick: noop,
      label: "Option 10",
    },
  ];

  return (
    <Box.div minHeight="400px">
      <Menu items={items} />
    </Box.div>
  );
};

export const WithManyItems: Story = {
  render: (): JSX.Element => <ManyItemsMenu />,
};
