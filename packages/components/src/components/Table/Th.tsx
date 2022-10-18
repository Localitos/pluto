import React from "react";
import { Box } from "../../primitives/Box";

export interface ThProps
  extends Omit<React.ThHTMLAttributes<HTMLTableCellElement>, "color"> {
  /** The valid HTML contents of the table header cell. */
  children?: React.ReactNode;
  /** Used to make a cell span over multiple columns. */
  colSpan?: number;
  /** Used to make a cell span over multiple rows. */
  rowSpan?: number;
}

/** A header cell in the table, use within a <THead>. */
const Th = React.forwardRef<HTMLTableCellElement, ThProps>(
  ({ children, colSpan, rowSpan, ...props }, ref) => {
    return (
      <Box.th colSpan={colSpan} ref={ref} rowSpan={rowSpan} {...props}>
        {children}
      </Box.th>
    );
  }
);

Th.displayName = "Th";

export { Th };
