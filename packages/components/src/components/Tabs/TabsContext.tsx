import React from "react";
import type { TabStore as TabStorePrimitiveProps } from "@ariakit/react/tab";
import type { TabsVariants } from "./types";

export interface TabStoreProps extends TabStorePrimitiveProps {
  /** Tells the Tabs which panel to load when it mounts. */
  initialTabId?: string;
  /** Changes the Tabs' to either fit the width of the containing element or not. */
  variant?: TabsVariants;
}

const TabsContext = React.createContext<TabStoreProps>({} as TabStoreProps);

export { TabsContext };
