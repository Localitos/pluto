import React, { ReactNode } from "react";
import {
  Menu as AriakitMenu,
  MenuButton,
  MenuItem,
  useMenuStore,
  MenuProps as AriakitMenuProps,
} from "@ariakit/react";
import map from "lodash/map";
import { Button } from "../Button";
import { Box, BoxProps } from "../../primitives/Box";

export type MenuItemProps = {
  label: ReactNode | string;
  onClick: () => void;
  disabled?: boolean;
};

export type MenuProps = Omit<AriakitMenuProps, "store"> & {
  /** The button element to open the menu and display the list of menu items. */
  menuButton?: React.JSX.Element;
  /** The list of menu items. */
  items: MenuItemProps[];
  /** The expanded menu z-index. */
  menuZIndex?: HTMLDivElement["style"]["zIndex"];
  /** Custom store for the menu. */
  customStore?: ReturnType<typeof useMenuStore>;
  /** Props for the default menu button. */
  menuButtonProps?: BoxProps;
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
const Menu = React.forwardRef<HTMLButtonElement, BoxProps & MenuProps>(
  (
    {
      menuButton,
      items,
      menuZIndex = "auto",
      customStore,
      menuButtonProps,
      ...props
    },
    ref,
  ) => {
    const store = useMenuStore({
      store: customStore,
    });

    const button = menuButton || VerticalEllipsisButton;

    return (
      <>
        <MenuButton
          render={(props) =>
            React.cloneElement(button, {
              ...props,
              ...menuButtonProps,
              ref,
            })
          }
          store={store}
        />

        <AriakitMenu
          gutter={3}
          store={store}
          style={{ zIndex: menuZIndex }}
          {...props}
        >
          <Box.div
            backgroundColor="colorBackground"
            borderRadius="borderRadius20"
            display="flex"
            flexDirection="column"
            maxWidth="280px"
            minWidth="160px"
            outlineColor="colorBorderWeaker"
            outlineStyle="borderStyleSolid"
            outlineWidth="borderWidth10"
            overflow="hidden"
          >
            {map(items, ({ label, onClick, disabled }, i) => (
              <MenuItem
                key={i}
                render={
                  <Box.div
                    backgroundColor={{
                      _: "colorBackground",
                      focusVisible: "colorBackgroundWeakest",
                      hover: disabled
                        ? "colorBackground"
                        : "colorBackgroundWeakest",
                    }}
                    outline={{
                      focusVisible: "none",
                    }}
                  >
                    <Box.button
                      alignItems="center"
                      as={FullWidthButton}
                      disabled={disabled}
                      justifyContent="flex-start"
                      onClick={onClick}
                      padding="d0"
                      px="d4"
                      py="d2"
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
                }
              />
            ))}
          </Box.div>
        </AriakitMenu>
      </>
    );
  },
);

Menu.displayName = "Menu";

export { Menu };
