import React from "react";
import { Box } from "../../primitives/Box";

export interface AlertDialogBodyProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "color"> {
  /** The contents of the modal body. */
  children: NonNullable<React.ReactNode>;
  /** Disables the overflowY for situations where the modal includes a dropdown. */
  disableOverflow?: boolean;
  /** The centering of the contents of the modal header */
  isContentCentered?: boolean;
}

/** The body content area of the modal. */
const AlertDialogBody = React.forwardRef<HTMLDivElement, AlertDialogBodyProps>(
  ({ children, disableOverflow, isContentCentered = false, ...props }, ref) => {
    return (
      <Box.div
        /* overflowY={!disableOverflow ? "auto" : undefined} */
        display="flex"
        justifyContent={isContentCentered ? "center" : "flex-start"}
        ref={ref}
        {...props}
      >
        {children}
      </Box.div>
    );
  }
);

AlertDialogBody.displayName = "AlertDialogBody";

export { AlertDialogBody };
