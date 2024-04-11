import React from "react";
import { DialogDismiss } from "ariakit/dialog";
import type { SystemProp, Theme } from "@xstyled/styled-components";
import { Box } from "../../primitives/Box";
import { Button } from "../Button";

export interface DrawerHeaderProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "color"> {
  /** The contents of the drawer header */
  children: NonNullable<React.ReactNode>;
  marginBottom?: SystemProp<keyof Theme["space"], Theme>;
  padding?: "space0" | "space60";
}

/** The header content area of the drawer. */
const DrawerHeader = React.forwardRef<HTMLDivElement, DrawerHeaderProps>(
  (
    { children, marginBottom = "space0", padding = "space60", ...props },
    ref,
  ) => {
    return (
      <Box.div
        alignItems="center"
        display="flex"
        gap="space30"
        justifyContent="space-between"
        marginBottom={marginBottom}
        padding={padding}
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
  },
);

DrawerHeader.displayName = "DrawerHeader";

export { DrawerHeader };
