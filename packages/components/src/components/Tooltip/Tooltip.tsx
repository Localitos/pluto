import React from "react";
import { Tooltip as TooltipPrimitive, TooltipArrow } from "@ariakit/react";
import type { TooltipProps as TooltipPrimitiveProps } from "@ariakit/react";
import { Box } from "../../primitives/Box";

export interface TooltipProps extends Omit<TooltipPrimitiveProps, "nonce"> {
  /** The contents of the tooltip. */
  children: NonNullable<React.ReactNode>;
}

/** A tooltip is a page overlay that displays non interactive clarifying text related to an element that's in a focused or hovered state. */
const Tooltip = React.forwardRef<HTMLDivElement, TooltipProps>(
  ({ children, ...props }, ref) => {
    return (
      <Box.div
        as={TooltipPrimitive}
        backgroundColor="colorBackgroundBodyStrong"
        borderRadius="borderRadius30"
        color="colorTextInverse"
        fontSize="fontSize20"
        lineHeight="lineHeight20"
        maxWidth="200px"
        padding="space40"
        ref={ref}
        {...props}
      >
        <TooltipArrow />
        {children}
      </Box.div>
    );
  },
);

Tooltip.displayName = "Tooltip";

export { Tooltip };
