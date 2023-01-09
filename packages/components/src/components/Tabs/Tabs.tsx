import React from "react";
import { useTabState as useTabPrimitiveState } from "ariakit/tab";
import PropTypes from "prop-types";
import { Box } from "../../primitives/Box";
import { TabsContext } from "./TabsContext";
import type { TabsVariants } from "./types";

export interface TabsProps {
  /** Tells the Tabs which panel to load when it mounts. */
  initialTabId?: string;
  /** Changes the Tabs' to either fit the width of the containing element or not. */
  variant?: TabsVariants;
  /** The child elements. */
  children: NonNullable<React.ReactNode>;
}

/** Tabs are labeled controls that allow users to switch between multiple views within a page */
const Tabs = React.forwardRef<HTMLDivElement, TabsProps>(
  ({ children, initialTabId, variant }, ref) => {
    const tab = useTabPrimitiveState({
      defaultSelectedId: initialTabId,
    });

    const value = React.useMemo(() => ({ ...tab, variant }), [tab, variant]);
    const returnValue = (
      <TabsContext.Provider value={value}>{children}</TabsContext.Provider>
    );

    return <Box.div ref={ref}>{returnValue}</Box.div>;
  }
);

Tabs.displayName = "Tabs";

Tabs.propTypes = {
  initialTabId: PropTypes.string,
  variant: PropTypes.oneOf(["fitted"]),
  children: PropTypes.node.isRequired,
};

export { Tabs };
