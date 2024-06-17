import React from "react";
import { Box } from "../../primitives/Box";
import { Icon } from "../Icon";

export interface HelpTextProps
  extends Omit<React.HTMLAttributes<HTMLSpanElement>, "color"> {
  /** The text to be displayed. */
  children: React.ReactNode;
  /** Changes the help text to its error state. The color changes to the theme red color. */
  hasError?: boolean;
}

/** Help text is paired with a form element to give users information to prevent or correct formatting errors */
const HelpText = React.forwardRef<HTMLSpanElement, HelpTextProps>(
  ({ children, hasError, ...props }, ref) => {
    return (
      <Box.span
        color={hasError ? "colorTextError" : "colorTextStronger"}
        display="flex"
        fontFamily="fontFamilyNotoSans"
        fontSize="fontSize10"
        fontWeight="fontWeightMedium"
        gap="space20"
        lineHeight="lineHeight10"
        marginTop="space20"
        ref={ref}
        {...props}
      >
        {hasError && (
          <Icon
            color="colorIconError"
            decorative
            icon="circle-x"
            size="sizeIcon20"
          />
        )}
        {children}
      </Box.span>
    );
  },
);

HelpText.displayName = "HelpText";

export { HelpText };
