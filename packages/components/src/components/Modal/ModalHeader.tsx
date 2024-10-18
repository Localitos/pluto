import React from "react";
import { DialogDismiss } from "@ariakit/react/dialog";
import { Box } from "../../primitives/Box";
import { Button } from "../Button";

export interface ModalHeaderProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "color"> {
  /** The contents of the modal header */
  children: NonNullable<React.ReactNode>;
}

/** The header content area of the modal. */
const ModalHeader = React.forwardRef<HTMLDivElement, ModalHeaderProps>(
  ({ children, ...props }, ref) => {
    return (
      <Box.div
        borderBottomColor="colorBorderWeakest"
        borderBottomStyle="borderStyleSolid"
        borderBottomWidth="borderWidth10"
        display="flex"
        gap="d2"
        justifyContent="space-between"
        padding="d5"
        ref={ref}
        {...props}
      >
        <Box.div>{children}</Box.div>
        <Box.div>
          <DialogDismiss
            render={
              <Button
                aria-label="Close modal"
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

ModalHeader.displayName = "ModalHeader";

export { ModalHeader };
