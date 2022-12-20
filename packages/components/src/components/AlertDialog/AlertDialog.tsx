import React from "react";
import { Dialog } from "ariakit/dialog";
import type { DialogProps } from "ariakit";
import { Box } from "../../primitives/Box";

export interface AlertDialogProps extends Omit<DialogProps, "noonce"> {
  /** The contents of the alert dialog. */
  children: NonNullable<React.ReactNode>;
  /** Centers the content of the alert dialog. */
  centered?: boolean;
}

/** A dialog component that forces the user to acknowledge and make a choice */
const AlertDialog = React.forwardRef<HTMLDivElement, AlertDialogProps>(
  ({ centered = false, children, ...props }, ref) => {
    return (
      <Box.div
        alignItems={centered ? "center" : undefined}
        as={Dialog}
        backgroundColor="colorBackground"
        borderRadius="borderRadius10"
        boxShadow="shadow"
        display="flex"
        flexDirection="column"
        gap="space50"
        hideOnEscape={false}
        hideOnInteractOutside={false}
        justifyContent={centered ? "center" : undefined}
        left="50%"
        maxWidth="25rem"
        padding="space60"
        position="fixed"
        ref={ref}
        role="alertdialog"
        textAlign={centered ? "center" : undefined}
        top="50%"
        transform="translate(-50%, -50%)"
        w="400px"
        zIndex="zIndex30"
        {...props}
      >
        {children}
      </Box.div>
    );
  }
);

AlertDialog.displayName = "AlertDialog";

export { AlertDialog };
