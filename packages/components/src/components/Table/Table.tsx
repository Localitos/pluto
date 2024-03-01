import React from "react";
import { SystemProp, Theme, styled } from "@localyze-pluto/theme";
import PropTypes from "prop-types";
import { Box } from "../../primitives/Box";
import { TableContext } from "./TableContext";

export interface TableProps
  extends Omit<React.TableHTMLAttributes<HTMLTableElement>, "color"> {
  /** Adds vertical borders to the table THs and Tds. */
  bordered?: boolean;
  /** The valid HTML contents of the table. */
  children: NonNullable<React.ReactNode>;
  /** Stripes the rows with alternating colors. */
  striped?: boolean;
  /** Determines how to layout the cells, rows, and columns. */
  tableLayout?: "auto" | "fixed";
  /** The background color of the table wrapper. */
  backgroundColor?: SystemProp<keyof Theme["colors"], Theme>;
}

const StyledTable = styled(Box.table)<TableProps>`
  border-spacing: 0px;
`;

/** Represent your data in rows and columns */
const Table = React.forwardRef<HTMLTableElement, TableProps>(
  (
    {
      bordered = false,
      children,
      striped = false,
      tableLayout = "auto",
      backgroundColor = "bgPrimary",
      ...props
    },
    ref,
  ) => {
    const tableContext = { bordered, striped };

    return (
      <TableContext.Provider value={tableContext}>
        <Box.div
          backgroundColor={backgroundColor}
          borderColor="colorBorderWeaker"
          borderRadius="borderRadius20"
          borderStyle="borderStyleSolid"
          borderWidth="borderWidth10"
          h="100%"
          overflow="auto"
        >
          <StyledTable
            borderCollapse="separate"
            ref={ref}
            tableLayout={tableLayout}
            w="100%"
            {...props}
          >
            {children}
          </StyledTable>
        </Box.div>
      </TableContext.Provider>
    );
  },
);

Table.displayName = "Table";

Table.propTypes = {
  bordered: PropTypes.bool,
  children: PropTypes.node.isRequired,
  striped: PropTypes.bool,
  tableLayout: PropTypes.oneOf(["auto", "fixed"]),
};

export { Table };
