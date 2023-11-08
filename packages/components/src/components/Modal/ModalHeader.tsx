import React from "react";
import { DialogDismiss } from "ariakit/dialog";
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
        alignItems="center"
        borderBottomColor="colorBorderWeakest"
        borderBottomStyle="borderStyleSolid"
        borderBottomWidth="borderWidth10"
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
            aria-label="Close modal"
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

ModalHeader.displayName = "ModalHeader";

export { ModalHeader };
