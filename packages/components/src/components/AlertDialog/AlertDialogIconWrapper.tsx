import React from "react";
import { Box } from "../../primitives/Box";

export interface AlertDialogIconWrapperProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "color"> {
  /** The contents of the modal heading. */
  children: NonNullable<React.ReactNode>;
}

/** The heading of the modal. */
const AlertDialogIconWrapper = React.forwardRef<
  HTMLDivElement,
  AlertDialogIconWrapperProps
>(({ children, ...props }, ref) => {
  return (
    <Box.div
      alignItems="center"
      backgroundColor="colorBackgroundError"
      borderRadius="borderRadius30"
      boxSizing="border-box"
      display="flex"
      gap="space25"
      h="40px"
      justifyContent="center"
      overflow="hidden"
      padding="space20"
      ref={ref}
      w="40px"
      {...props}
    >
      {children}
    </Box.div>
  );
});

AlertDialogIconWrapper.displayName = "AlertDialogIconWrapper";

export { AlertDialogIconWrapper };
