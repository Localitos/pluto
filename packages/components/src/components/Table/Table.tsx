import React from "react";
import { Box } from "../../primitives/Box";

export interface TableProps
  extends Omit<React.TableHTMLAttributes<HTMLTableElement>, "color"> {
  /** The valid HTML contents of the table. */
  children?: NonNullable<React.ReactNode>;
  /** Determines how to layout the cells, rows, and columns. */
  tableLayout?: "auto" | "fixed";
}

/** Represent your data in rows and columns */
const Table = React.forwardRef<HTMLTableElement, TableProps>(
  ({ children, tableLayout = "auto", ...props }, ref) => {
    return (
      <Box.table ref={ref} tableLayout={tableLayout} {...props}>
        {children}
      </Box.table>
    );
  }
);

Table.displayName = "Table";

export { Table };
