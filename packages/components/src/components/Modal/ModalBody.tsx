import React from "react";
import { Box } from "../../primitives/Box";

export interface ModalBodyProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "color"> {
  /** The contents of the modal body. */
  children: NonNullable<React.ReactNode>;
  /** Sets the padding of the modal body. */
  padding?: "space0" | "space60";
}

/** The body content area of the modal. */
const ModalBody = React.forwardRef<HTMLDivElement, ModalBodyProps>(
  ({ children, padding = "space60", ...props }, ref) => {
    return (
      <Box.div overflowY="auto" padding={padding} ref={ref} {...props}>
        {children}
      </Box.div>
    );
  }
);

ModalBody.displayName = "ModalBody";

export { ModalBody };
