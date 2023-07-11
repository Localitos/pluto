import React from "react";
import { useTabStore as useTabPrimitiveState } from "@ariakit/react/tab";
import PropTypes from "prop-types";
import { Box } from "../../primitives/Box";
import { TabsContext } from "./TabsContext";
import type { TabsVariants } from "./types";

export interface TabsProps {
  /** Tells the Tabs which panel to load when it mounts. */
  initialTabId?: string;
  /** Changes the Tabs' to either fit the width of the containing element or not. */
  variant?: TabsVariants;
  /** Use flex column, growing to 1 for the div wrapping the tabs. */
  flexed?: boolean;
  /** The child elements. */
  children: NonNullable<React.ReactNode>;
}

/** Tabs are labeled controls that allow users to switch between multiple views within a page */
const Tabs = React.forwardRef<HTMLDivElement, TabsProps>(
  ({ children, initialTabId, variant, flexed }, ref) => {
    const tab = useTabPrimitiveState({
      defaultSelectedId: initialTabId,
    });

    const value = React.useMemo(() => ({ ...tab, variant }), [tab, variant]);
    const returnValue = (
      <TabsContext.Provider value={value}>{children}</TabsContext.Provider>
    );

    return (
      <Box.div
        display={flexed ? "flex" : "block"}
        flexDirection={flexed ? "column" : undefined}
        flexGrow={flexed ? "1" : undefined}
        ref={ref}
      >
        {returnValue}
      </Box.div>
    );
  },
);

Tabs.displayName = "Tabs";

Tabs.propTypes = {
  initialTabId: PropTypes.string,
  variant: PropTypes.oneOf(["fitted"]),
  children: PropTypes.node.isRequired,
};

export { Tabs };
