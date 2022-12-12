import React from "react";
import { SelectItem as SelectItemPrimitive } from "ariakit/select";
import type { SelectItemProps as SelectItemPrimitiveProps } from "ariakit/select";
import { Box } from "../../primitives/Box";

export interface SelectItemProps
  extends Omit<SelectItemPrimitiveProps, "nonce"> {
  /** Sets the state of the select item to disabled. */
  disabled?: boolean;
  /** The first item in the set. Can be used as a reset option. */
  initial?: boolean;
  /** The text value of the select item. */
  value: string;
}

/** A select item is a styled element that can be selected within a select. */
const SelectItem = React.forwardRef<HTMLDivElement, SelectItemProps>(
  ({ disabled, initial, value, ...props }, ref) => {
    return (
      <Box.div
        as={SelectItemPrimitive}
        backgroundColor={{
          activeItem: "colorBackgroundWeak",
          selected: {
            _: initial ? "colorBackground" : "colorBackgroundInfo",
            activeItem: "colorBackgroundWeak",
          },
        }}
        borderLeftColor={{
          _: "colorBackground",
          activeItem: "colorBackgroundWeak",
          selected: initial ? "colorBackground" : "colorBorderPrimary",
        }}
        borderLeftStyle="borderStyleSolid"
        borderLeftWidth="borderWidth20"
        color={disabled || initial ? "colorText" : "colorTextStrongest"}
        cursor="default"
        disabled={disabled}
        fontFamily="fontFamilyModerat"
        fontSize="fontSize20"
        fontWeight="fontWeightMedium"
        paddingBottom="space30"
        paddingLeft="space50"
        paddingRight="space50"
        paddingTop="space30"
        ref={ref}
        value={value}
        {...props}
      />
    );
  }
);

SelectItem.displayName = "SelectItem";

export { SelectItem };
