import React, { forwardRef } from "react";
import {
  ComboboxItem as AriakitComboboxItem,
  ComboboxItemProps as AriakitComboboxItemProps,
} from "@ariakit/react";
import { Box } from "../../../primitives/Box";

const DefaultItem = (
  <Box.div
    backgroundColor={{
      _: "colorBackground",
      activeItem: "colorBackgroundWeak",
      selected: "colorBackgroundInfo",
    }}
    borderLeftColor={{
      _: "colorBackground",
      activeItem: "colorBackgroundWeak",
      selected: "colorBorderPrimary",
    }}
    borderLeftStyle="borderStyleSolid"
    borderLeftWidth="borderWidth20"
    color={{
      _: "colorTextStrongest",
      disabled: "colorText",
    }}
    cursor="default"
    fontSize="fontSize20"
    fontWeight="fontWeightMedium"
    px="d4"
    py="d2"
  />
);
export const ComboboxItem = forwardRef<
  HTMLDivElement,
  AriakitComboboxItemProps & {
    children: React.ReactNode;
  }
>(({ children, render, store, ...props }, ref) => {
  const selectedValue = store?.getState().selectedValue;

  return (
    <AriakitComboboxItem
      aria-selected={selectedValue === props.value}
      focusOnHover
      ref={ref}
      render={render || DefaultItem}
      {...props}
    >
      {children}
    </AriakitComboboxItem>
  );
});

ComboboxItem.displayName = "ComboboxItem";
