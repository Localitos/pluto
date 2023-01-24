import React from "react";
import PropTypes from "prop-types";
import { Box } from "../../primitives/Box";
import { TableContext } from "./TableContext";

export interface TdProps
  extends Omit<React.TdHTMLAttributes<HTMLTableCellElement>, "color"> {
  /** The valid HTML contents of the table cell. */
  children?: React.ReactNode;
  /** Used to make a cell span over multiple columns. */
  colSpan?: number;
  /** Used to make a cell span over multiple rows. */
  rowSpan?: number;
  /** Used to control the alignment of text. */
  textAlign?: "center" | "left" | "right";
}

/** A standard cell in the table, use within a <Tr>. */
const Td = React.forwardRef<HTMLTableCellElement, TdProps>(
  ({ children, colSpan, rowSpan, textAlign = "left", ...props }, ref) => {
    const { bordered } = React.useContext(TableContext);
    return (
      <Box.td
        borderBottomColor="colorBorderWeakest"
        borderBottomStyle="borderStyleSolid"
        borderBottomWidth="borderWidth10"
        borderLeftColor={{
          _: bordered ? "colorBorderWeakest" : "transparent",
          first: "transparent",
        }}
        borderLeftStyle="borderStyleSolid"
        borderLeftWidth="borderWidth10"
        colSpan={colSpan}
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
      </Box.td>
    );
  }
);

Td.displayName = "Td";

Td.propTypes = {
  children: PropTypes.node,
  colSpan: PropTypes.number,
  rowSpan: PropTypes.number,
  textAlign: PropTypes.oneOf(["center", "left", "right"]),
};

export { Td };
