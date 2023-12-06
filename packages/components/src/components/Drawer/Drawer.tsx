import React from "react";
import { Dialog } from "ariakit/dialog";
import type { DialogProps } from "ariakit";
import { Box } from "../../primitives/Box";

export interface DrawerProps extends DialogProps {
  /** The contents of the drawer. */
  children: NonNullable<React.ReactNode>;
}

/** A Drawer is a page overlay that displays information and blocks interaction with the page until an action is taken or the Drawer is dismissed. */
const Drawer = React.forwardRef<HTMLDivElement, DrawerProps>(
  ({ children, ...props }, ref) => {
    return (
      <Box.div
        as={Dialog}
        backdrop={false}
        backgroundColor="colorBackground"
        bottom={0}
        boxShadow="shadowStrong"
        display="flex"
        flexDirection="column"
        maxWidth="34.375rem"
        position="fixed"
        ref={ref}
        right={0}
        top={0}
        zIndex="zIndex30"
        {...props}
      >
        {children}
      </Box.div>
    );
  },
);

Drawer.displayName = "Drawer";

export { Drawer };
