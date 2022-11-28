import React from "react";
import { Box } from "../../primitives/Box";

export interface DrawerBodyProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "color"> {
  /** The contents of the drawer body. */
  children: NonNullable<React.ReactNode>;
  /** Sets the padding of the drawer body. */
  padding?: "space0" | "space60";
}

/** The body content area of the drawer. */
const DrawerBody = React.forwardRef<HTMLDivElement, DrawerBodyProps>(
  ({ children, padding = "space60", ...props }, ref) => {
    return (
      <Box.div
        overflowY="auto"
        paddingBottom={padding}
        paddingLeft={padding}
        paddingRight={padding}
        ref={ref}
        {...props}
        background="
        linear-gradient(
          white 30%,
          rgba(255, 255, 255, 0)
        ) center top,
        radial-gradient(
          farthest-side at 50% 0,
          rgba(0, 0, 0, 0.2),
          rgba(0, 0, 0, 0)
        ) center top"
        backgroundAttachment="local,scroll"
        backgroundRepeat="no-repeat"
        backgroundSize="100% 40px,100% 14px"
      >
        {children}
      </Box.div>
    );
  }
);

DrawerBody.displayName = "DrawerBody";

export { DrawerBody };
