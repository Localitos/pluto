import React from "react";
import { Box, BoxProps } from "../../primitives/Box";

export interface LabelProps
  extends Omit<React.HTMLAttributes<HTMLLabelElement>, "color">,
    BoxProps {
  /** Adjusts the cursor to be not-allowed. */
  disabled?: boolean;
  /** Use and `id` to tie a label directly to a specific form element. */
  htmlFor: string;
  /** Adds the red dot to the right of the label. */
  required?: boolean;
  /** Label content */
  children?: React.ReactNode;
}

/** A label is text that provides a visible and accessible name to a form element */
const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
  ({ children, disabled, required, ...props }, ref) => {
    return (
      <Box.label
        alignItems="center"
        color="colorTextStrongest"
        cursor={disabled ? "not-allowed" : "default"}
        display="flex"
        fontFamily="fontFamilyNotoSans"
        fontSize="fontSize10"
        fontWeight="fontWeightMedium"
        lineHeight="lineHeight10"
        marginBottom="d1"
        ref={ref}
        {...props}
      >
        {required && (
          <Box.div
            backgroundColor="colorBackgroundDestructive"
            borderRadius="borderRadiusCircle"
            h="4px"
            marginRight="d1"
            w="4px"
          />
        )}
        {children}
      </Box.label>
    );
  },
);

Label.displayName = "Label";

export { Label };
