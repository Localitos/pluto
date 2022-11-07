import React from "react";
import { Box } from "../../primitives/Box";

export interface ModalFooterProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "color"> {
  /** The contents of the modal footer. */
  children: NonNullable<React.ReactNode>;
}

/** The footer content area of the modal. */
const ModalFooter = React.forwardRef<HTMLDivElement, ModalFooterProps>(
  ({ children, ...props }, ref) => {
    return (
      <Box.div
        alignItems="center"
        borderTopColor="colorBorderWeakest"
        borderTopStyle="borderSolid"
        borderTopWidth="borderWidth10"
        display="flex"
        gap="space30"
        justifyContent="flex-end"
        padding="space60"
        ref={ref}
        {...props}
      >
        {children}
      </Box.div>
    );
  }
);

ModalFooter.displayName = "ModalFooter";

export { ModalFooter };
