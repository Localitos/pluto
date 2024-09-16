import React, { forwardRef } from "react";
import {
  ComboboxPopover as AriakitComboboxPopover,
  ComboboxPopoverProps as AriakitComboboxPopoverProps,
} from "@ariakit/react";
import { Box } from "@localyze-pluto/components";

export const ComboboxPopover = forwardRef<
  HTMLDivElement,
  AriakitComboboxPopoverProps & {
    children: React.ReactNode;
  }
>(({ children, ...props }, ref) => {
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
      outlineColor={{ focus: "colorBorderPrimary" }}
      outlineStyle={{ focus: "solid" }}
      outlineWidth={{ focus: "borderWidth10" }}
      overflow="auto"
      overscrollBehavior="contain"
      portal
      ref={ref}
      sameWidth
      zIndex="zIndex50"
      {...props}
    >
      {children}
    </Box.div>
  );
});

ComboboxPopover.displayName = "ComboboxPopover";
