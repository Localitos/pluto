import React from "react";
import { Dialog } from "@ariakit/react/dialog";
import type { DialogProps } from "@ariakit/react/dialog";
import { Box } from "../../primitives/Box";

export interface ModalProps extends Omit<DialogProps, "nonce"> {
  /** The contents of the modal. */
  children: NonNullable<React.ReactNode>;
  maxWidth?: string;
}

/** A Modal is a page overlay that displays information and blocks interaction with the page until an action is taken or the Modal is dismissed. */
const Modal = React.forwardRef<HTMLDivElement, ModalProps>(
  ({ children, maxWidth = "47.75rem", ...props }, ref) => {
    return (
      <Box.div
        as={Dialog}
        backgroundColor="colorBackground"
        borderRadius="borderRadius30"
        display="flex"
        flexDirection="column"
        left="50%"
        maxHeight="90vh"
        maxWidth={maxWidth}
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
  },
);

Modal.displayName = "Modal";

export { Modal };
