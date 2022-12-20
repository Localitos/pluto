import React from "react";
import { Box } from "../../primitives/Box";

export interface AlertDialogBodyProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "color"> {
  /** The contents of the alert dialog body. */
  children: NonNullable<React.ReactNode>;
  /** Disables the overflowY for situations where the alert dialog includes a dropdown. */
  disableOverflow?: boolean;
}

/** The body content area of the alert dialog. */
const AlertDialogBody = React.forwardRef<HTMLDivElement, AlertDialogBodyProps>(
  ({ children, disableOverflow, ...props }, ref) => {
    return (
      <Box.div
        overflowY={disableOverflow ? undefined : "auto"}
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
