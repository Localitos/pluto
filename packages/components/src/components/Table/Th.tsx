import React from "react";
import { Box } from "../../primitives/Box";

export interface ThProps
  extends Omit<React.ThHTMLAttributes<HTMLTableCellElement>, "color"> {
  /** The valid HTML contents of the table header cell. */
  children?: React.ReactNode;
  /** Used to make a cell span over multiple columns. */
  colSpan?: number;
  /** Allows manual control of the left offset, used in conjunction with `stickyColumn`. */
  left?: number | string;
  /** Used to make a cell span over multiple rows. */
  rowSpan?: number;
  /** Makes the left table column stick to the left of the window as the user scrolls a wide table. */
  stickyColumn?: boolean;
}

/** A header cell in the table, use within a <THead>. */
const Th = React.forwardRef<HTMLTableCellElement, ThProps>(
  (
    {
      children,
      colSpan,
      stickyColumn,
      left = stickyColumn ? "-1px" : undefined,
      rowSpan,
      ...props
    },
    ref
  ) => {
    return (
      <Box.th
        colSpan={colSpan}
        left={left}
        position={stickyColumn ? "sticky" : undefined}
        ref={ref}
        rowSpan={rowSpan}
        {...props}
      >
        {children}
      </Box.th>
    );
  }
);

Th.displayName = "Th";

export { Th };
