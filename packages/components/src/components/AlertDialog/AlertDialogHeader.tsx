import React from "react";
import { Box } from "../../primitives/Box";

export interface AlertDialogHeaderProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "color"> {
  /** The contents of the modal header */
  children: NonNullable<React.ReactNode>;
}

/** The header content area of the modal. */
const AlertDialogHeader = React.forwardRef<
  HTMLDivElement,
  AlertDialogHeaderProps
>(({ children, ...props }, ref) => {
  return (
    <Box.div ref={ref} {...props}>
      {children}
    </Box.div>
  );
});

AlertDialogHeader.displayName = "AlertDialogHeader";

export { AlertDialogHeader };
