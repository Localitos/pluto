import React from "react";
import {
  DisclosureProps,
  Menu as AriakitMenu,
  MenuButton,
  MenuItem,
  useMenuState,
} from "ariakit";
import map from "lodash/map";
import { Button } from "../Button";
import { Box } from "../../primitives/Box";

export type MenuItemProps = {
  label: string;
  onClick: () => void;
};

export type MenuProps = {
  /** The button element to open the menu and display the list of menu items. */
  menuButton?: JSX.Element;
  /** The list of menu items. */
  items: MenuItemProps[];
};

const VerticalEllipsisButton = (
  <Button
    aria-label="Open menu"
    iconOnly
    leadingIcon="EllipsisVerticalIcon"
    type="button"
    variant="ghost"
  />
);

/** A menu is a button element that opens a menu with items. */
const Menu = React.forwardRef<HTMLButtonElement, MenuProps>(
  ({ menuButton, items }, ref) => {
    const state = useMenuState();

    const button = menuButton || VerticalEllipsisButton;

    return (
      <div>
        <MenuButton ref={ref} state={state} {...button.props}>
          {(buttonProps: DisclosureProps) =>
            React.cloneElement(button, buttonProps)
          }
        </MenuButton>

        <AriakitMenu state={state}>
          <Box.div
            borderColor="colorBorderPrimary"
            borderRadius="borderRadius20"
            borderStyle="borderStyleSolid"
            borderWidth="borderWidth10"
            display="flex"
            flexDirection="column"
            paddingBottom="space20"
            paddingTop="space20"
          >
            {map(items, ({ label, onClick }, i) => (
              <MenuItem key={i}>
                <Box.div
                  backgroundColor={{
                    _: "colorBackground",
                    hover: "colorBackgroundWeakest",
                  }}
                >
                  <Button onClick={onClick} variant="ghost">
                    <Box.span color="colorTextStrongest">{label}</Box.span>
                  </Button>
                </Box.div>
              </MenuItem>
            ))}
          </Box.div>
        </AriakitMenu>
      </div>
    );
  }
);

Menu.displayName = "Menu";

export { Menu };
