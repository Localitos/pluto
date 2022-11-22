import React from "react";
import { Dialog } from "ariakit/dialog";
import type { DialogProps } from "ariakit";
import { Box } from "../../primitives/Box";

export interface ModalProps extends Omit<DialogProps, "noonce"> {
  /** The contents of the modal. */
  children: NonNullable<React.ReactNode>;
}

/** A Modal is a page overlay that displays information and blocks interaction with the page until an action is taken or the Modal is dismissed. */
const Modal = React.forwardRef<HTMLDivElement, ModalProps>(
  ({ children, ...props }, ref) => {
    return (
      <Box.div
        as={Dialog}
        backgroundColor="colorBackground"
        borderRadius="borderRadius30"
        display="flex"
        flexDirection="column"
        left="50%"
        maxHeight="90vh"
        maxWidth="47.75rem"
        nonce={undefined}
        position="fixed"
        ref={ref}
        top="50%"
        transform="translate(-50%, -50%)"
        w="90vw"
        zIndex="zIndex30"
        {...props}
      >
        {children}
      </Box.div>
    );
  }
);

Modal.displayName = "Modal";

export { Modal };
