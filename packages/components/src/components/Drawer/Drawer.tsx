import React from "react";
import { Dialog } from "ariakit/dialog";
import type { DialogProps } from "ariakit";
import { styled } from "@localyze-pluto/theme";
import { Box } from "../../primitives/Box";

export interface DrawerProps extends DialogProps {
  /** The contents of the drawer. */
  children: NonNullable<React.ReactNode>;
}

const StyledBackdrop = styled(Box.div)`
  background-color: rgba(39, 49, 63, 0.5);
  backdrop-filter: blur(3px);
`;

/** A Drawer is a page overlay that displays information and blocks interaction with the page until an action is taken or the Drawer is dismissed. */
const Drawer = React.forwardRef<HTMLDivElement, DrawerProps>(
  ({ children, initialFocusRef, ...props }, ref) => {
    return (
      <Box.div
        as={Dialog}
        autoFocusOnShow={initialFocusRef ?? false}
        backdrop={StyledBackdrop}
        backgroundColor="colorBackground"
        bottom={0}
        boxShadow="shadowStrong"
        display="flex"
        flexDirection="column"
        initialFocusRef={initialFocusRef}
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
