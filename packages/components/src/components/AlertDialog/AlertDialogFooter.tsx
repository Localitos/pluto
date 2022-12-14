import React from "react";
import { Box } from "../../primitives/Box";

export interface AlertDialogFooterProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "color"> {
  /** The contents of the modal footer. */
  children: NonNullable<React.ReactNode>;
}

/** The footer content area of the modal. */
const AlertDialogFooter = React.forwardRef<
  HTMLDivElement,
  AlertDialogFooterProps
>(({ children, ...props }, ref) => {
  return (
    <Box.div
      alignItems="center"
      display="flex"
      gap="space30"
      justifyContent="flex-end"
      /* padding="space60" */
      ref={ref}
      {...props}
    >
      {children}
    </Box.div>
  );
});

AlertDialogFooter.displayName = "AlertDialogFooter";

export { AlertDialogFooter };
