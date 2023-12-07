import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Box } from "../../primitives/Box";
import { TableContext } from "./TableContext";

export interface TrProps
  extends Omit<React.TableHTMLAttributes<HTMLTableRowElement>, "color"> {
  /** The valid HTML contents of the table row. */
  children: NonNullable<React.ReactNode>;
  /** The vertical alignment of the text within each cell in the row. */
  verticalAlign?: "bottom" | "middle" | "top";
  /** Determines whether to add a hover background color to the row if it's clickable. */
  isClickable?: boolean;
}

/** A row in the table */
const Tr = React.forwardRef<HTMLTableRowElement, TrProps>(
  ({ children, isClickable, verticalAlign = "middle", ...props }, ref) => {
    const { striped } = useContext(TableContext);
    return (
      <Box.tr
        backgroundColor={{
          _: "transparent",
          even: striped ? "colorBackgroundWeakest" : "transparent",
          hover: isClickable ? "colorBackgroundWeak" : "transparent",
        }}
        cursor={isClickable ? "pointer" : "default"}
        ref={ref}
        verticalAlign={verticalAlign}
        {...props}
      >
        {children}
      </Box.tr>
    );
  },
);

Tr.displayName = "Tr";

Tr.propTypes = {
  children: PropTypes.node.isRequired,
  verticalAlign: PropTypes.oneOf(["bottom", "middle", "top"]),
};
export { Tr };
