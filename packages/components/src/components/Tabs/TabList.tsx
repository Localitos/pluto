import React from "react";
import { TabList as TabListPrimitive } from "ariakit/tab";
import type { TabListProps as TabListPrimitiveProps } from "ariakit/tab";
import PropTypes from "prop-types";
import { Box } from "../../primitives/Box";
import { TabsContext } from "./TabsContext";

export interface TabListProps extends Omit<TabListPrimitiveProps, "state"> {
  /** Required label for this Tabs component. Titles the entire Tabbing context for screen readers. */
  "aria-label": string;
  /** The child elements of the TabList. */
  children: NonNullable<React.ReactNode>;
}

const TabList = React.forwardRef<HTMLDivElement, TabListProps>(
  ({ children, ...props }, ref) => {
    const tab = React.useContext(TabsContext);

    return (
      <Box.div
        as={TabListPrimitive}
        display={tab.variant === "fitted" ? "flex" : "block"}
        state={tab}
        {...props}
        ref={ref}
      >
        {children}
      </Box.div>
    );
  }
);

TabList.displayName = "TabList";

TabList.propTypes = {
  "aria-label": PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export { TabList };
