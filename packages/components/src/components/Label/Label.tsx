import React from "react";
import { Box } from "../../primitives/Box";

type LabelMarginBottom = "space0" | "space20";

export interface LabelProps
  extends Omit<React.LabelHTMLAttributes<HTMLLabelElement>, "color"> {
  /** Use and `id` to tie a label directly to a specific form element. */
  htmlFor: string;
  /** Sets the bottom margin of the label. */
  marginBottom?: LabelMarginBottom;
  /** Adds the red dot to the right of the label. */
  required?: boolean;
}

/** A label is text that provides a visible and accessible name to a form element */
const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
  ({ children, marginBottom = "space20", required, ...props }, ref) => {
    return (
      <Box.label
        alignItems="center"
        color="colorTextStrongest"
        display="flex"
        fontFamily="fontFamilyModerat"
        fontSize="fontSize10"
        fontWeight="fontWeightMedium"
        lineHeight="lineHeight10"
        marginBottom={marginBottom}
        ref={ref}
        {...props}
      >
        {required && (
          <Box.div
            backgroundColor="colorBackgroundDestructive"
            borderRadius="borderRadiusCircle"
            h="4px"
            marginRight="space20"
            w="4px"
          />
        )}
        {children}
      </Box.label>
    );
  }
);

Label.displayName = "Label";

export { Label };
