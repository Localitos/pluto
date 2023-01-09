import React from "react";
import PropTypes from "prop-types";
import { Box } from "../../primitives/Box";

export interface TabPanelsProps {
  /** The child elements of the TabPanels. */
  children: NonNullable<React.ReactNode>;
}

const TabPanels = React.forwardRef<HTMLDivElement, TabPanelsProps>(
  ({ children, ...props }, ref) => {
    return (
      <Box.div ref={ref} w="100%" {...props}>
        {children}
      </Box.div>
    );
  }
);

TabPanels.displayName = "TabPanels";

TabPanels.propTypes = {
  children: PropTypes.node.isRequired,
};

export { TabPanels };
