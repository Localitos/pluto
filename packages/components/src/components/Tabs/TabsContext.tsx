import React from "react";
import type { TabStore as TabStorePrimitiveProps } from "@ariakit/react/tab";

export interface TabStoreProps extends TabStorePrimitiveProps {
  /** Tells the Tabs which panel to load when it mounts. */
  initialTabId?: string;
}

const TabsContext = React.createContext<TabStoreProps>({} as TabStoreProps);

export { TabsContext };
