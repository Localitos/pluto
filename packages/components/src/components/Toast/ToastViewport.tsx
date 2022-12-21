import React from "react";
import * as ToastPrimitive from "@radix-ui/react-toast";
import { Box } from "../../primitives/Box";
import type { ToastViewportProps } from "./types";

/** The fixed area where toasts appear. */
const ToastViewport = React.forwardRef<HTMLOListElement, ToastViewportProps>(
  ({ ...props }, ref) => {
    return (
      <Box.ol
        as={ToastPrimitive.Viewport}
        display="flex"
        flexDirection="column"
        gap="space30"
        listStyleType="none"
        margin="space0"
        maxWidth="100vw"
        padding="space40"
        position="fixed"
        ref={ref}
        right="0"
        top="0"
        w="32.75rem" // 524px
        zIndex="zIndex40"
        {...props}
      />
    );
  }
);

ToastViewport.displayName = "ToastViewport";

export { ToastViewport };
