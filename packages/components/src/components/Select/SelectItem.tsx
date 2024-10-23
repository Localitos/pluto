import React from "react";
import { SelectItem as SelectItemPrimitive } from "@ariakit/react/select";
import type { SelectItemProps as SelectItemPrimitiveProps } from "@ariakit/react/select";
import { Box } from "../../primitives/Box";

export interface SelectItemProps
  extends Omit<SelectItemPrimitiveProps, "nonce"> {
  /** Sets the state of the select item to disabled. */
  disabled?: boolean;
  /** The text label of the select item. */
  label: string;
  /** The text value of the select item. */
  value: string;
}

/** A select item is a styled element that can be selected within a select. */
const SelectItem = React.forwardRef<HTMLDivElement, SelectItemProps>(
  ({ disabled, label, value, ...props }, ref) => {
    return (
      <Box.div
        as={SelectItemPrimitive}
        backgroundColor={{
          activeItem: "colorBackgroundWeak",
          selected: "colorBackgroundInfo",
        }}
        borderLeftColor={{
          _: "colorBackground",
          activeItem: "colorBackgroundWeak",
          selected: "colorBorderPrimary",
        }}
        borderLeftStyle="borderStyleSolid"
        borderLeftWidth="borderWidth20"
        color={disabled ? "colorText" : "colorTextStrongest"}
        cursor="default"
        disabled={disabled}
        fontFamily="fontFamilyNotoSans"
        fontSize="fontSize20"
        fontWeight="fontWeightMedium"
        marginBottom="d0_5"
        marginTop="d0_5"
        paddingBottom="d2"
        paddingLeft="d4"
        paddingRight="d4"
        paddingTop="d2"
        ref={ref}
        value={value}
        {...props}
      >
        {label}
      </Box.div>
    );
  },
);

SelectItem.displayName = "SelectItem";

const MemoizedSelectItem = React.memo(SelectItem);

export { MemoizedSelectItem as SelectItem };
