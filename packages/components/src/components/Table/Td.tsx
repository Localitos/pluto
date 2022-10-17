import React from "react";
import { Box } from "../../primitives/Box";

export interface TdProps
  extends Omit<React.TdHTMLAttributes<HTMLTableCellElement>, "color"> {
  /** The valid HTML contents of the table cell. */
  children?: React.ReactNode;
  /** Used to make a cell span over multiple columns. */
  colSpan?: number;
  /** Used to make a cell span over multiple rows. */
  rowSpan?: number;
}

/** A standard cell in the table, use within a <Tr>. */
const Td = React.forwardRef<HTMLTableCellElement, TdProps>(
  ({ children, colSpan, rowSpan, ...props }, ref) => {
    return (
      <Box.td colSpan={colSpan} ref={ref} rowSpan={rowSpan} {...props}>
        {children}
      </Box.td>
    );
  }
);

Td.displayName = "Td";

export { Td };
