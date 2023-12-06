import React from "react";
import PropTypes from "prop-types";
import { Box } from "../../primitives/Box";
import { TableContext } from "./TableContext";

export interface ThProps
  extends Omit<React.ThHTMLAttributes<HTMLTableCellElement>, "color"> {
  /** The valid HTML contents of the table header cell. */
  children?: React.ReactNode;
  /** Used to make a cell span over multiple columns. */
  colSpan?: number;
  /** Used to make a cell span over multiple rows. */
  rowSpan?: number;
  /** Used to control the alignment of text. */
  textAlign?: "center" | "left" | "right";
}

/** A header cell in the table, use within a <THead>. */
const Th = React.forwardRef<HTMLTableCellElement, ThProps>(
  ({ children, colSpan, rowSpan, textAlign = "left", ...props }, ref) => {
    const { bordered } = React.useContext(TableContext);
    return (
      <Box.th
        borderBottomColor="colorBorderWeakest"
        borderBottomStyle="borderStyleSolid"
        borderBottomWidth="borderWidth20"
        borderLeftColor={{
          _: bordered ? "colorBorderWeakest" : "transparent",
          first: "transparent",
        }}
        borderLeftStyle="borderStyleSolid"
        borderLeftWidth="borderWidth10"
        colSpan={colSpan}
        color="colorTextStronger"
        fontFamily="fontFamilyModerat"
        fontSize="fontSize20"
        fontWeight="fontWeightBold"
        paddingBottom="space50"
        paddingLeft="space50"
        paddingRight="space50"
        paddingTop="space50"
        ref={ref}
        rowSpan={rowSpan}
        textAlign={textAlign}
        {...props}
      >
        {children}
      </Box.th>
    );
  },
);

Th.displayName = "Th";

Th.propTypes = {
  children: PropTypes.node,
  colSpan: PropTypes.number,
  rowSpan: PropTypes.number,
  textAlign: PropTypes.oneOf(["center", "left", "right"]),
};

export { Th };
