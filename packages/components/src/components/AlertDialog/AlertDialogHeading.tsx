import React from "react";
import { Heading } from "../Heading";

export interface AlertDialogHeadingProps
  extends Omit<React.HTMLAttributes<HTMLHeadingElement>, "color"> {
  /** The contents of the modal heading. */
  children: NonNullable<React.ReactNode>;
}

/** The heading of the modal. */
const AlertDialogHeading = React.forwardRef<
  HTMLHeadingElement,
  AlertDialogHeadingProps
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

AlertDialogHeading.displayName = "AlertDialogHeading";

export { AlertDialogHeading };
