import React from "react";
import { Dialog } from "ariakit/dialog";
import type { DialogProps } from "ariakit";
import { Box } from "../../primitives/Box";

export interface AlertDialogProps extends Omit<DialogProps, "noonce"> {
  /** The contents of the modal. */
  children: NonNullable<React.ReactNode>;
  /** Add a description comment for each prop. */
  isContentCentered?: boolean;
}

/** A dialog component that forces the user to acknowledge and make a choice */
const AlertDialog = React.forwardRef<HTMLDivElement, AlertDialogProps>(
  ({ isContentCentered = false, children, ...props }, ref) => {
    return (
      <Box.div
        as={Dialog}
        backgroundColor="colorBackground"
        borderRadius="borderRadius10"
        display="flex"
        flexDirection="column"
        alignItems={isContentCentered ? "center" : undefined}
        left="50%"
        padding="space60"
        gap="space50"
        maxWidth="25rem"
        position="fixed"
        ref={ref}
        top="50%"
        transform="translate(-50%, -50%)"
        zIndex="zIndex30"
        hideOnEscape={false}
        hideOnInteractOutside={false}
        {...props}
      >
        {children}
      </Box.div>
    );
  }
);

AlertDialog.displayName = "AlertDialog";

export { AlertDialog };
