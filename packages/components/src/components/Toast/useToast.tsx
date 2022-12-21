import React from "react";
import { ToastContext } from "./ToastContext";
import type { ToastContextProps } from "./types";

export const useToast = (): ToastContextProps["toast"] => {
  const { toast } = React.useContext(ToastContext);
  return toast;
};
