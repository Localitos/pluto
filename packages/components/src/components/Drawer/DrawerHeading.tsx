import React from "react";
import { Heading } from "../Heading";

export interface DrawerHeadingProps
  extends Omit<React.HTMLAttributes<HTMLHeadingElement>, "color"> {
  /** The contents of the drawer heading. */
  children: NonNullable<React.ReactNode>;
}

/** The heading of the drawer. */
const DrawerHeading = React.forwardRef<HTMLHeadingElement, DrawerHeadingProps>(
  ({ children, ...props }, ref) => {
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
  },
);

DrawerHeading.displayName = "DrawerHeading";

export { DrawerHeading };
