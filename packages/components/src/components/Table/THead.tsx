import React from "react";
import { Box } from "../../primitives/Box";

export interface THeadProps
  extends Omit<React.TableHTMLAttributes<HTMLTableSectionElement>, "color"> {
  /** The valid HTML contents of the table header. */
  children: NonNullable<React.ReactNode>;
  /** Allows manual control of the left offset, used in conjunction with `stickyHeader`. */
  left?: number | string;
  /** Makes the table head stick to the top of the window as the user scrolls a long table. */
  stickyHeader?: boolean;
  /** Allows manual control of the top offset, used in conjunction with `stickyHeader`. */
  top?: number | string;
}

/** Used to group header content in a table */
const THead = React.forwardRef<HTMLTableSectionElement, THeadProps>(
  (
    {
      children,
      stickyHeader,
      left = stickyHeader ? "-1px" : undefined,
      top = stickyHeader ? "-1px" : undefined,
      ...props
    },
    ref
  ) => {
    return (
      <Box.thead
        left={left}
        position={stickyHeader ? "sticky" : undefined}
        ref={ref}
        top={top}
        {...props}
      >
        {children}
      </Box.thead>
    );
  }
);

THead.displayName = "THead";

export { THead };
