import React from "react";
import { SelectPopover as SelectPopoverPrimitive } from "@ariakit/react/select";
import type { SelectPopoverProps as SelectPopoverPrimitiveProps } from "@ariakit/react/select";
import { Box, BoxProps } from "../../primitives/Box";

export interface SelectPopoverProps
  extends Omit<SelectPopoverPrimitiveProps, "nonce"> {
  /** The valid contents of the listbox, i.e. SelectItem. */
  children: NonNullable<React.ReactNode>;
  w?: BoxProps["w"];
  maxW?: BoxProps["maxW"];
}

/** A select popover is a styled dropdown element that contains a list of select options. */
const SelectPopover = React.forwardRef<HTMLDivElement, SelectPopoverProps>(
  ({ children, store, gutter, sameWidth, w, maxW, ...props }, ref) => {
    return (
      <Box.div
        as={SelectPopoverPrimitive}
        backgroundColor="colorBackground"
        borderRadius="borderRadius20"
        boxShadow="shadowStrong"
        display="flex"
        flexDirection="column"
        gutter={gutter}
        maxHeight="250px"
        maxW={maxW}
        outlineColor={{ focus: "colorBorderPrimary" }}
        outlineStyle={{ focus: "solid" }}
        outlineWidth={{ focus: "borderWidth10" }}
        overflow="auto"
        overscrollBehavior="contain"
        paddingBottom="space20"
        paddingTop="space20"
        position="absolute"
        ref={ref}
        sameWidth={sameWidth}
        store={store}
        w={w}
        zIndex="zIndex50"
        {...props}
      >
        {children}
      </Box.div>
    );
  },
);

SelectPopover.displayName = "SelectPopover";

export { SelectPopover };
