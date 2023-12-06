import React from "react";
import PropTypes from "prop-types";
import { Box } from "../../primitives/Box";

export interface THeadProps
  extends Omit<React.TableHTMLAttributes<HTMLTableSectionElement>, "color"> {
  /** The valid HTML contents of the table header. */
  children: NonNullable<React.ReactNode>;
  /** Makes the table head stick to the top of the window as the user scrolls a long table. */
  isSticky?: boolean;
  /** Allows manual control of the top offset, used in conjunction with `stickyHeader`. */
  stickyTopOffset?: number | string;
}

/** Used to group header content in a table */
const THead = React.forwardRef<HTMLTableSectionElement, THeadProps>(
  (
    {
      children,
      isSticky,
      stickyTopOffset = isSticky ? "-1px" : undefined,
      ...props
    },
    ref,
  ) => {
    return (
      <Box.thead
        backgroundColor="colorBackgroundWeakest"
        position={isSticky ? "sticky" : undefined}
        ref={ref}
        top={stickyTopOffset}
        {...props}
      >
        {children}
      </Box.thead>
    );
  },
);

THead.displayName = "THead";

THead.propTypes = {
  children: PropTypes.node.isRequired,
  isSticky: PropTypes.bool,
  stickyTopOffset: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export { THead };
