import React from "react";
import { Button } from "../Button";

type ButtonVariantOptions =
  | "destructive"
  | "ghost"
  | "outline"
  | "primary"
  | "secondary";

export interface AlertDialogButtonProps
  extends Omit<React.HTMLAttributes<HTMLButtonElement>, "color"> {
  /** The contents of the alert dialog button. */
  children: NonNullable<React.ReactNode>;
  /** Sets the variant of the alert dialog button. */
  variant: ButtonVariantOptions;
  /** Sets the info of the alert dialog. */
  onClick: () => void;
}

/** The content of the alert dialog button. */
const AlertDialogButton = React.forwardRef<
  HTMLButtonElement,
  AlertDialogButtonProps
>(({ variant = "primary", onClick, children, ...props }, ref) => {
  return (
    <Button variant={variant} onClick={onClick} ref={ref} {...props}>
      {children}
    </Button>
  );
});

AlertDialogButton.displayName = "AlertDialogButton";

export { AlertDialogButton };
