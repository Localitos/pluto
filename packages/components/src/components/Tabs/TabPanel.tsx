import React from "react";
import { TabPanel as TabPanelPrimitive } from "ariakit/tab";
import type { TabPanelProps as TabPanelPrimitiveProps } from "ariakit/tab";
import PropTypes from "prop-types";
import { Box } from "../../primitives/Box";
import { TabsContext } from "./TabsContext";

export interface TabPanelProps extends Omit<TabPanelPrimitiveProps, "state"> {
  /** The child elements of the TabPanel. */
  children: NonNullable<React.ReactNode>;
  /** The id of the tab panel. Same as the HTML attribute. */
  id?: string;
}

const TabPanel = React.forwardRef<HTMLDivElement, TabPanelProps>(
  ({ children, id, ...props }, ref) => {
    const tab = React.useContext(TabsContext);

    return (
      <Box.div
        as={TabPanelPrimitive}
        id={id}
        outline="none"
        state={tab}
        {...props}
        ref={ref}
      >
        {children}
      </Box.div>
    );
  },
);

TabPanel.displayName = "TabPanel";

TabPanel.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string,
};

export { TabPanel };
