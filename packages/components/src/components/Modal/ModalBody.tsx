import React from "react";
import { Box, BoxProps } from "../../primitives/Box";

export interface ModalBodyProps extends BoxProps {
  /** The contents of the modal body. */
  children: NonNullable<React.ReactNode>;
  /** Disables the overflowY for situations where the modal includes a dropdown. */
  disableOverflow?: boolean;
}

/** The body content area of the modal. */
const ModalBody = React.forwardRef<HTMLDivElement, ModalBodyProps>(
  ({ children, disableOverflow, ...props }, ref) => {
    return (
      <Box.div
        overflowY={disableOverflow ? undefined : "auto"}
        padding="space60"
        ref={ref}
        {...props}
      >
        {children}
      </Box.div>
    );
  },
);

ModalBody.displayName = "ModalBody";

export { ModalBody };
