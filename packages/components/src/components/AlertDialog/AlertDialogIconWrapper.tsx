import { SystemProp, Theme } from "@xstyled/styled-components";
import React from "react";
import { Box } from "../../primitives/Box";

type AlertDialogIconWrapperVariantOptions = "error" | "information" | "warning";

export interface AlertDialogIconWrapperProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "color"> {
  /** The contents of the alert dialog icon wrapper. */
  children: NonNullable<React.ReactNode>;
  /** The type of icon wrapper. */
  variant?: AlertDialogIconWrapperVariantOptions;
}

const getVariantProps = (
  variant: AlertDialogIconWrapperVariantOptions
): {
  backgroundColor: SystemProp<keyof Theme["colors"], Theme>;
} => {
  switch (variant) {
    case "error": {
      return {
        backgroundColor: "colorBackgroundError",
      };
    }
    case "warning": {
      return {
        backgroundColor: "colorBackgroundWarning",
      };
    }
    default: {
      return {
        backgroundColor: "colorBackgroundInfo",
      };
    }
  }
};

/** The ircon wrapper of the alert dialog icon. */
const AlertDialogIconWrapper = React.forwardRef<
  HTMLDivElement,
  AlertDialogIconWrapperProps
>(({ children, variant = "error", ...props }, ref) => {
  return (
    <Box.div
      alignItems="center"
      borderRadius="borderRadius30"
      boxSizing="border-box"
      display="flex"
      gap="space25"
      h="40px"
      justifyContent="center"
      overflow="hidden"
      padding="space20"
      ref={ref}
      w="40px"
      {...getVariantProps(variant)}
      {...props}
    >
      {children}
    </Box.div>
  );
});

AlertDialogIconWrapper.displayName = "AlertDialogIconWrapper";

export { AlertDialogIconWrapper };
