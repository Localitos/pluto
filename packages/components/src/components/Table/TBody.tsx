import React from "react";
import { Box } from "../../primitives/Box";

export interface TBodyProps
  extends Omit<React.TableHTMLAttributes<HTMLTableSectionElement>, "color"> {
  /** The valid HTML contents of the table body. */
  children: NonNullable<React.ReactNode>;
}

/** Used to group the body content in a table */
const TBody = React.forwardRef<HTMLTableSectionElement, TBodyProps>(
  ({ children, ...props }, ref) => {
    return (
      <Box.tbody ref={ref} {...props}>
        {children}
      </Box.tbody>
    );
  }
);

TBody.displayName = "TBody";

export { TBody };
