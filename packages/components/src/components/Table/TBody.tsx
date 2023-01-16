import React from "react";
import { styled } from "@localyze-pluto/theme";
import PropTypes from "prop-types";
import { Box } from "../../primitives/Box";

export interface TBodyProps
  extends Omit<React.TableHTMLAttributes<HTMLTableSectionElement>, "color"> {
  /** The valid HTML contents of the table body. */
  children: NonNullable<React.ReactNode>;
}

const StyledTBody = styled(Box.tbody)<TBodyProps>`
  & > tr:last-of-type > td {
    border-bottom-width: borderWidth0;
  }
`;

/** Used to group the body content in a table */
const TBody = React.forwardRef<HTMLTableSectionElement, TBodyProps>(
  ({ children, ...props }, ref) => {
    return (
      <StyledTBody ref={ref} {...props}>
        {children}
      </StyledTBody>
    );
  }
);

TBody.displayName = "TBody";

TBody.propTypes = {
  children: PropTypes.node.isRequired,
};

export { TBody };
