import React from "react";
import { useTabStore as useTabPrimitiveState } from "@ariakit/react/tab";
import PropTypes from "prop-types";
import { Box } from "../../primitives/Box";
import { TabsContext } from "./TabsContext";

export interface TabsProps {
  /** Tells the Tabs which panel to load when it mounts. */
  initialTabId?: string;
  /** The child elements. */
  children: NonNullable<React.ReactNode>;
}

/** Tabs are labeled controls that allow users to switch between multiple views within a page */
const Tabs = React.forwardRef<HTMLDivElement, TabsProps>(
  ({ children, initialTabId }, ref) => {
    const tab = useTabPrimitiveState({
      defaultSelectedId: initialTabId,
    });

    const value = React.useMemo(() => ({ ...tab }), [tab]);
    const returnValue = (
      <TabsContext.Provider value={value}>{children}</TabsContext.Provider>
    );

    return (
      <Box.div display="flex" flexDirection="column" flexGrow={1} ref={ref}>
        {returnValue}
      </Box.div>
    );
  },
);

Tabs.displayName = "Tabs";

Tabs.propTypes = {
  initialTabId: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export { Tabs };
