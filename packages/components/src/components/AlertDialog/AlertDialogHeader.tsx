import React from "react";
import { Heading } from "../Heading";

export interface AlertDialogHeaderProps
  extends Omit<React.HTMLAttributes<HTMLHeadingElement>, "color"> {
  /** The contents of the modal header. */
  children: NonNullable<React.ReactNode>;
}

/** The header of the modal. */
const AlertDialogHeader = React.forwardRef<
  HTMLHeadingElement,
  AlertDialogHeaderProps
>(({ children, ...props }, ref) => {
  return (
    <Heading
      as="h2"
      color="colorTextHeadingStronger"
      marginBottom="space0"
      ref={ref}
      size="heading60"
      {...props}
    >
      {children}
    </Heading>
  );
});

AlertDialogHeader.displayName = "AlertDialogHeader";

export { AlertDialogHeader };
