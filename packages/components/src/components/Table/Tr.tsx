import React from "react";
import { Box } from "../../primitives/Box";

export interface TrProps
  extends Omit<React.TableHTMLAttributes<HTMLTableRowElement>, "color"> {
  /** The valid HTML contents of the table row. */
  children?: NonNullable<React.ReactNode>;
}

/** A row in the table */
const Tr = React.forwardRef<HTMLTableRowElement, TrProps>(
  ({ children, ...props }, ref) => {
    return (
      <Box.tr ref={ref} {...props}>
        {children}
      </Box.tr>
    );
  }
);

Tr.displayName = "Tr";

export { Tr };
