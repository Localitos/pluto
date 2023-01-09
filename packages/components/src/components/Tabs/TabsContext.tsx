import React from "react";
import type { TabState as TabStatePrimitiveProps } from "ariakit/tab";
import type { TabsVariants } from "./types";

export interface TabStateProps extends TabStatePrimitiveProps {
  /** Tells the Tabs which panel to load when it mounts. */
  initialTabId?: string;
  /** Changes the Tabs' to either fit the width of the containing element or not. */
  variant?: TabsVariants;
}

const TabsContext = React.createContext<TabStateProps>({} as TabStateProps);

export { TabsContext };
