import React from "react";
import { Dialog, useDialogState } from "ariakit/dialog";
import type { DialogProps } from "ariakit";
import { styled, theme } from "@localyze-pluto/theme";
import { Box } from "../../primitives/Box";

export interface DrawerProps extends DialogProps {
  /** The contents of the drawer. */
  children: NonNullable<React.ReactNode>;
}

const StyledBackdrop = styled(Box.div)`
  background-color: rgba(39, 49, 63, 0.5);
  backdrop-filter: blur(3px);
  opacity: 0;
  transition:
    opacity 0.5s,
    backdrop-filter 0.5s;

  &[data-enter] {
    backdrop-filter: blur(3px);
    opacity: 1;
  }
`;

const StyledDrawer = styled(Box.div)`
  background-color: ${theme.colors.colorBackground};
  box-shadow: ${theme.shadows.shadowStrong};
  display: flex;
  flex-direction: column;
  max-width: 34.375rem;
  position: fixed;
  right: -100%;
  top: 0;
  bottom: 0;
  transition: right 0.4s;
  z-index: ${theme.zIndices.zIndex30};

  &[data-enter] {
    right: 0;
  }
`;

/** A Drawer is a page overlay that displays information and blocks interaction with the page until an action is taken or the Drawer is dismissed. */
const Drawer = React.forwardRef<HTMLDivElement, DrawerProps>(
  ({ children, state, initialFocusRef, ...props }, ref) => {
    const internalState = useDialogState({
      ...state,
      animated: true,
    });

    return (
      <StyledDrawer
        as={Dialog}
        autoFocusOnShow={initialFocusRef ?? false}
        backdrop={StyledBackdrop}
        initialFocusRef={initialFocusRef}
        ref={ref}
        state={internalState}
        {...props}
      >
        {children}
      </StyledDrawer>
    );
  },
);

Drawer.displayName = "Drawer";

export { Drawer };
