import React from "react";
import { Box } from "../../primitives/Box";

export interface THeadProps
  extends Omit<React.TableHTMLAttributes<HTMLTableSectionElement>, "color"> {
  /** The valid HTML contents of the table header. */
  children: NonNullable<React.ReactNode>;
}

/** Used to group header content in a table */
const THead = React.forwardRef<HTMLTableSectionElement, THeadProps>(
  ({ children, ...props }, ref) => {
    return (
      <Box.thead ref={ref} {...props}>
        {children}
      </Box.thead>
    );
  }
);

THead.displayName = "THead";

export { THead };
