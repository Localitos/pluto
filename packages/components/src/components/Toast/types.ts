import * as ToastPrimitive from "@radix-ui/react-toast";

export type ToastVariants = "error" | "success";

export interface ToastCtaProps {
  /** The content of the action. */
  content: React.ReactNode;
  /** The accessible alt text used if an action is used in the toast. */
  altText: string;
}

export interface ToastProps
  extends Omit<React.ComponentProps<typeof ToastPrimitive.Root>, "asChild"> {
  /** The text content of the toast. */
  children: NonNullable<React.ReactNode>;
  /** The type and style of the toast. */
  variant: ToastVariants;
  /** An action that users can take, but also may be safely ignored. */
  cta?: ToastCtaProps;
}

export interface ToastStateProps {
  /** The text content of the toast. */
  message: string;
  /** The type and style of the toast. */
  variant: ToastVariants;
  /** A unique id passed to the toast. */
  id?: string;
  /** An action that users can take, but also may be safely ignored. */
  cta?: ToastCtaProps;
}

export interface ToastContainerProps {
  /** The valid contents of the ToastContainer */
  children: NonNullable<React.ReactNode>;
}

export interface ToastContextProps {
  /** ToastStateProps */
  toast: (
    message: string,
    variant: ToastVariants,
    id?: string,
    cta?: ToastCtaProps
  ) => void;
}

export type ToastViewportProps = ToastPrimitive.ToastViewportProps;
