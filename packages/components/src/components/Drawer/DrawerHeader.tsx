import React from "react";
import { DialogDismiss } from "@ariakit/react/dialog";
import { Box } from "../../primitives/Box";
import { Button } from "../Button";

export interface DrawerHeaderProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "color"> {
  /** The contents of the drawer header */
  children: NonNullable<React.ReactNode>;
  padding?: "p0" | "p5" | "space0" | "space60";
}

/** The header content area of the drawer. */
const DrawerHeader = React.forwardRef<HTMLDivElement, DrawerHeaderProps>(
  ({ children, padding = "space60", ...props }, ref) => {
    return (
      <Box.div
        alignItems="center"
        display="flex"
        gap="space30"
        justifyContent="space-between"
        padding={padding}
        ref={ref}
        {...props}
      >
        <Box.div>{children}</Box.div>
        <Box.div>
          <DialogDismiss
            render={
              <Button
                aria-label="Close drawer"
                iconOnly
                leadingIcon="x"
                variant="ghost"
              />
            }
          />
        </Box.div>
      </Box.div>
    );
  },
);

DrawerHeader.displayName = "DrawerHeader";

export { DrawerHeader };
