import React from "react";
import { Tab as TabPrimitive } from "@ariakit/react/tab";
import type { TabProps as TabPrimitiveProps } from "@ariakit/react/tab";
import PropTypes from "prop-types";
import { Box } from "../../primitives/Box";

export interface TabProps extends TabPrimitiveProps {
  /** The tab contents. */
  children: NonNullable<React.ReactNode>;
  /** Disables the tab. Same as the HTML attribute. */
  disabled?: boolean;
  /** The id of the tab. Same as the HTML attribute. */
  id?: string;
}

const Tab = React.forwardRef<HTMLButtonElement, TabProps>(
  ({ children, disabled, ...props }, ref) => {
    return (
      <Box.button
        appearance="none"
        as={TabPrimitive}
        background="none"
        border="none"
        borderBottomColor={{
          _: "transparent",
          disabled: "transparent",
          hover: "tabBorderHover",
          selected: "tabLabelActive",
        }}
        borderBottomStyle="borderStyleSolid"
        borderBottomWidth="borderWidth20"
        boxShadow={{
          focusVisible: "shadowFocus",
        }}
        // There's a conflict with TabPrimitiveProps from Ariakit. We have to convert color to string here because Ariakit doesn't like our responsive/state-based colors.
        color={
          {
            _: "tabLabelDefault",
            disabled: "colorText",
            hover: "tabLabelHover",
            selected: "tabBorderActive",
          } as unknown as string
        }
        cursor={{
          _: "auto",
          disabled: "not-allowed",
          hover: "pointer",
        }}
        disabled={disabled}
        flexGrow={1}
        fontFamily="fontFamilyNotoSans"
        fontSize="fontSize20"
        fontWeight="fontWeightMedium"
        lineHeight="lineHeight30"
        outline={{ focus: "none" }}
        paddingBottom="d2"
        paddingTop="d0"
        position="relative"
        px="d1"
        textDecoration="none"
        zIndex="zIndex10"
        {...props}
        ref={ref}
      >
        {children}
      </Box.button>
    );
  },
);

Tab.displayName = "Tab";

Tab.propTypes = {
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  id: PropTypes.string,
};

export { Tab };
