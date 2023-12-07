import uniqueId from "lodash/uniqueId";
import map from "lodash/map";
import React from "react";
import { ToastViewport } from "./ToastViewport";
import type {
  ToastContainerProps,
  ToastStateProps,
  ToastVariants,
  ToastCtaProps,
} from "./types";
import { Toast } from "./Toast";
import { ToastContext } from "./ToastContext";
import { ToastProvider } from "./index";

const ToastContainer = ({
  children,
}: ToastContainerProps): React.ReactElement => {
  const [toasts, setToasts] = React.useState<ToastStateProps[]>([]);

  return (
    <ToastContext.Provider
      value={{
        toast: (
          message: string,
          variant: ToastVariants = "success",
          id,
          cta?: ToastCtaProps,
        ) =>
          setToasts([
            ...toasts,
            { message, variant, id: uniqueId(`pluto-toast-${id}-`), cta },
          ]),
      }}
    >
      <ToastProvider>
        {children}

        {map(toasts, (toast) => (
          <Toast cta={toast.cta} key={toast.id} variant={toast.variant}>
            {toast.message}
          </Toast>
        ))}
        <ToastViewport />
      </ToastProvider>
    </ToastContext.Provider>
  );
};

ToastContainer.displayName = "ToastContainer";

export { ToastContainer };
