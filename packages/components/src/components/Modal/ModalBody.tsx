import React from "react";
import { Box } from "../../primitives/Box";

export interface ModalBodyProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "color"> {
  /** The contents of the modal body. */
  children: NonNullable<React.ReactNode>;
  /** Sets the padding of the modal body. */
  padding?: "space0" | "space60";
  /** Disables the overflowY for situations where the modal includes a dropdown. */
  disableOverflow?: boolean;
}

/** The body content area of the modal. */
const ModalBody = React.forwardRef<HTMLDivElement, ModalBodyProps>(
  ({ children, disableOverflow, padding = "space60", ...props }, ref) => {
    return (
      <Box.div
        overflowY={disableOverflow ? undefined : "auto"}
        padding={padding}
        ref={ref}
        {...props}
      >
        {children}
      </Box.div>
    );
  }
);

ModalBody.displayName = "ModalBody";

export { ModalBody };
