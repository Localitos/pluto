import React from "react";
import PropTypes from "prop-types";
import { Box } from "../../primitives/Box";

export interface ThButtonProps
  extends Omit<React.ThHTMLAttributes<HTMLButtonElement>, "color"> {
  /** The valid HTML contents of the table header cell. */
  children: React.ReactNode;
}

/** A button that inherits the styles of Th. Should only be used inside a Th. */
const ThButton = React.forwardRef<HTMLButtonElement, ThButtonProps>(
  ({ children, ...props }, ref) => {
    return (
      <Box.button
        appearance="none"
        background="none"
        border="none"
        borderRadius="borderRadius0"
        cursor="pointer"
        fontFamily="inherit"
        fontSize="inherit"
        fontWeight="inherit"
        lineHeight="inherit"
        margin="space0"
        outlineColor={{ focus: "colorBorderPrimary" }}
        outlineOffset={{ focus: "borderWidth20" }}
        outlineStyle={{ focus: "borderStyleSolid" }}
        outlineWidth={{ active: "borderWidth0", focus: "borderWidth20" }}
        padding="space0"
        ref={ref}
        {...props}
      >
        {children}
      </Box.button>
    );
  }
);

ThButton.displayName = "ThButton";

ThButton.propTypes = {
  children: PropTypes.node,
};

export { ThButton };
