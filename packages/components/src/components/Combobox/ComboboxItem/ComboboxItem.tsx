import React, { forwardRef } from "react";
import {
  ComboboxItem as AriakitComboboxItem,
  ComboboxItemProps as AriakitComboboxItemProps,
} from "@ariakit/react";
import { Box } from "@localyze-pluto/components";

export const ComboboxItem = forwardRef<
  HTMLDivElement,
  AriakitComboboxItemProps & {
    children: React.ReactNode;
  }
>(({ children, ...props }, ref) => {
  return (
    <Box.div
      as={AriakitComboboxItem}
      backgroundColor={{
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
      color="colorTextStrongest"
      cursor="default"
      focusOnHover
      fontSize="fontSize20"
      fontWeight="fontWeightMedium"
      px="d4"
      py="d2"
      ref={ref}
      {...props}
    >
      {children}
    </Box.div>
  );
});

ComboboxItem.displayName = "ComboboxItem";
