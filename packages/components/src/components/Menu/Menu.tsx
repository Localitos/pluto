import React, { ReactNode } from "react";
import {
  Menu as AriakitMenu,
  MenuButton,
  MenuItem,
  useMenuStore,
} from "@ariakit/react";
import map from "lodash/map";
import { Button } from "../Button";
import { Box } from "../../primitives/Box";

export type MenuItemProps = {
  label: ReactNode | string;
  onClick: () => void;
  disabled?: boolean;
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
    leadingIcon="ellipsis-vertical"
    type="button"
    variant="ghost"
  />
);

const FullWidthButton = ({ ...props }) => (
  <Button fullWidth variant="ghost" {...props} />
);

/** A menu is a button element that opens a menu with items. */
const Menu = React.forwardRef<HTMLButtonElement, MenuProps>(
  ({ menuButton, items }, ref) => {
    const store = useMenuStore();

    const button = menuButton || VerticalEllipsisButton;

    return (
      <Box.div>
        <MenuButton
          render={(props) =>
            React.cloneElement(button, {
              ...props,
              ref,
            })
          }
          store={store}
        />

        <AriakitMenu store={store}>
          <Box.div
            backgroundColor="colorBackground"
            borderRadius="borderRadius20"
            display="flex"
            flexDirection="column"
            maxWidth="280px"
            minWidth="160px"
            outlineColor="colorBorderPrimary"
            outlineStyle="borderStyleSolid"
            outlineWidth="borderWidth10"
          >
            {map(items, ({ label, onClick, disabled }, i) => (
              <MenuItem key={i}>
                <Box.div
                  backgroundColor={{
                    _: "colorBackground",
                    hover: disabled
                      ? "colorBackground"
                      : "colorBackgroundWeakest",
                  }}
                >
                  <Box.button
                    alignItems="center"
                    as={FullWidthButton}
                    disabled={disabled}
                    justifyContent="flex-start"
                    onClick={onClick}
                    padding="space0"
                    px="space50"
                    py="space30"
                    variant="ghost"
                    w="100%"
                  >
                    <Box.span
                      color={disabled ? "colorText" : "colorTextStrongest"}
                      textAlign="left"
                      w="100%"
                    >
                      {label}
                    </Box.span>
                  </Box.button>
                </Box.div>
              </MenuItem>
            ))}
          </Box.div>
        </AriakitMenu>
      </Box.div>
    );
  },
);

Menu.displayName = "Menu";

export { Menu };
