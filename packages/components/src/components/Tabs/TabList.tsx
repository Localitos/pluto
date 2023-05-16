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
  /** Add a divider element on the bottom of the tabs list */
  withDivider?: boolean;
}

const TabList = React.forwardRef<HTMLDivElement, TabListProps>(
  ({ children, withDivider, ...props }, ref) => {
    const tab = React.useContext(TabsContext);

    return (
      <Box.div
        as={TabListPrimitive}
        display={tab.variant === "fitted" ? "flex" : "block"}
        position="relative"
        state={tab}
        {...props}
        ref={ref}
      >
        {withDivider && (
          <Box.div
            backgroundColor="colorBorderWeaker"
            bottom="0"
            h="1px"
            position="absolute"
            w="100%"
            zIndex="zIndex0"
          />
        )}
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
