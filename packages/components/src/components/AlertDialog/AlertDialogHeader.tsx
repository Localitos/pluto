import React from "react";
import { Box } from "../../primitives/Box";

export interface AlertDialogHeaderProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "color"> {
  /** The contents of the modal header */
  children: NonNullable<React.ReactNode>;
  /** The centering of the contents of the modal header */
  isContentCentered?: boolean;
}

/** The header content area of the modal. */
const AlertDialogHeader = React.forwardRef<
  HTMLDivElement,
  AlertDialogHeaderProps
>(({ children, isContentCentered = false, ...props }, ref) => {
  return (
    <Box.div
      display="flex"
      justifyContent={isContentCentered ? "center" : "flex-start"}
      ref={ref}
      {...props}
    >
      <Box.div>{children}</Box.div>
    </Box.div>
  );
});

AlertDialogHeader.displayName = "AlertDialogHeader";

export { AlertDialogHeader };
