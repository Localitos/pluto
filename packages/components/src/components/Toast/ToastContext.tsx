import noop from "lodash/noop";
import { createContext } from "react";
import type { ToastContextProps } from "./types";

export const ToastContext = createContext<ToastContextProps>({
  toast: noop,
});
