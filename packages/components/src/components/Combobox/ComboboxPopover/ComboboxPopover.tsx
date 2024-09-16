import React, { forwardRef } from "react";
import {
  ComboboxPopover as AriakitComboboxPopover,
  ComboboxPopoverProps as AriakitComboboxPopoverProps,
} from "@ariakit/react";
import { Box, BoxProps } from "../../../primitives/Box";

export const ComboboxPopover = forwardRef<
  HTMLDivElement,
  AriakitComboboxPopoverProps & {
    children: React.ReactNode;
    zIndex?: BoxProps["zIndex"];
  }
>(({ children, zIndex = "zIndex50", ...props }, ref) => {
  return (
    <Box.div
      as={AriakitComboboxPopover}
      backgroundColor="bgPrimary"
      borderRadius="borderRadius20"
      boxShadow="shadowStrong"
      display="flex"
      flexDirection="column"
      gutter={3}
      maxHeight="250px"
      overflow="auto"
      overscrollBehavior="contain"
      portal
      ref={ref}
      sameWidth
      unmountOnHide
      zIndex={zIndex}
      {...props}
    >
      {children}
    </Box.div>
  );
});

ComboboxPopover.displayName = "ComboboxPopover";
