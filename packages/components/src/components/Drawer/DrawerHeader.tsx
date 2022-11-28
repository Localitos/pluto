import React from "react";
import { DialogDismiss } from "ariakit/dialog";
import { Box } from "../../primitives/Box";
import { Button } from "../Button";

export interface DrawerHeaderProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "color"> {
  /** The contents of the drawer header */
  children: NonNullable<React.ReactNode>;
}

/** The header content area of the drawer. */
const DrawerHeader = React.forwardRef<HTMLDivElement, DrawerHeaderProps>(
  ({ children, ...props }, ref) => {
    return (
      <Box.div
        display="flex"
        gap="space30"
        justifyContent="space-between"
        padding="space60"
        ref={ref}
        {...props}
      >
        <Box.div>{children}</Box.div>
        <Box.div>
          <DialogDismiss
            aria-label="Close drawer"
            as={Button}
            iconOnly
            leadingIcon="XMarkIcon"
            variant="ghost"
          />
        </Box.div>
      </Box.div>
    );
  }
);

DrawerHeader.displayName = "DrawerHeader";

export { DrawerHeader };
