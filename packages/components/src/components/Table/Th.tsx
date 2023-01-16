import React from "react";
import PropTypes from "prop-types";
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
      <Box.th
        borderBottomColor="colorBorderWeakest"
        borderBottomStyle="borderStyleSolid"
        borderBottomWidth="borderWidth20"
        colSpan={colSpan}
        color="colorTextStronger"
        fontFamily="fontFamilyModerat"
        fontSize="fontSize20"
        fontWeight="fontWeightBold"
        paddingBottom="space50"
        paddingLeft={{
          first: "space50",
        }}
        paddingTop="space50"
        ref={ref}
        rowSpan={rowSpan}
        textAlign="left"
        {...props}
      >
        {children}
      </Box.th>
    );
  }
);

Th.displayName = "Th";

Th.propTypes = {
  children: PropTypes.node,
  colSpan: PropTypes.number,
  rowSpan: PropTypes.number,
};

export { Th };
