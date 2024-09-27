import React from "react";
import { Heading } from "../Heading";

export interface ModalHeadingProps
  extends Omit<React.HTMLAttributes<HTMLHeadingElement>, "color"> {
  /** The contents of the modal heading. */
  children: NonNullable<React.ReactNode>;
}

/** The heading of the modal. */
const ModalHeading = React.forwardRef<HTMLHeadingElement, ModalHeadingProps>(
  ({ children, ...props }, ref) => {
    return (
      <Heading as="h2" marginBottom="m0" ref={ref} size="heading60" {...props}>
        {children}
      </Heading>
    );
  },
);

ModalHeading.displayName = "ModalHeading";

export { ModalHeading };
