import React from "react";
import type { SystemProp, Theme } from "@xstyled/styled-components";
import { Heading } from "../Heading";

export interface DrawerHeadingProps
  extends Omit<React.HTMLAttributes<HTMLHeadingElement>, "color"> {
  /** The contents of the drawer heading. */
  children: NonNullable<React.ReactNode>;
  marginBottom?: SystemProp<keyof Theme["space"], Theme>;
}

/** The heading of the drawer. */
const DrawerHeading = React.forwardRef<HTMLHeadingElement, DrawerHeadingProps>(
  ({ children, marginBottom = "space0", ...props }, ref) => {
    return (
      <Heading
        as="h2"
        color="colorTextHeadingStronger"
        marginBottom={marginBottom}
        ref={ref}
        size="heading50"
        {...props}
      >
        {children}
      </Heading>
    );
  },
);

DrawerHeading.displayName = "DrawerHeading";

export { DrawerHeading };
