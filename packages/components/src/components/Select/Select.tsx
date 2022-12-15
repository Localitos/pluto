import React from "react";
import map from "lodash/map";
import startsWith from "lodash/startsWith";
import {
  Select as SelectPrimitive,
  SelectArrow,
  useSelectState,
  SelectStateProps,
} from "ariakit/select";
import type { SelectProps as SelectPrimitiveProps } from "ariakit/select";
import type { SystemProp, Theme } from "@xstyled/styled-components";
import { Box } from "../../primitives/Box";
import { Icon } from "../Icon";
import { SelectItem } from "./SelectItem";
import type { SelectItemProps } from "./SelectItem";
import { SelectPopover } from "./SelectPopover";

export interface SelectProps
  extends Omit<
    SelectPrimitiveProps,
    | "accessibleWhenDisabled"
    | "autoFocus"
    | "clickOnEnter"
    | "clickOnSpace"
    | "focusable"
    | "moveOnKeyDown"
    | "nonce"
    | "onFocusVisible"
    | "showOnKeyDown"
    | "state"
    | "toggleOnClick"
    | "toggleOnPress"
    | "typeahead"
    | "wrapElement"
  > {
  /** The default selected option of the select. */
  defaultValue?: string;
  /** Sets the state of the select to disabled, so a user is not able to interact with it. */
  disabled?: boolean;
  /** Sets the state of the select to an error state. */
  hasError?: boolean;
  /** The `id` of the select. */
  id?: string;
  /** The options for the select. */
  items: SelectItemProps[];
  /** The `name` of the select. */
  name?: string;
  /** Sets the select state to required, so a user has to provide a value in order to be valid. */
  required?: boolean;
  /** Function that will be called when setting the select value state. */
  setValue?: SelectStateProps["setValue"];
  /** Changes the size of the select. */
  size?: "large" | "small";
  /** The selected option of the select. */
  value?: string;
}

const getSelectStyles = (
  disabled?: boolean,
  hasError?: boolean
): {
  backgroundColor: SystemProp<keyof Theme["colors"], Theme> | "transparent";
  borderColor: SystemProp<keyof Theme["colors"], Theme>;
} => {
  if (disabled) {
    return {
      backgroundColor: "colorBackgroundWeak",
      borderColor: "colorBorderWeaker",
    };
  }
  if (hasError) {
    return {
      backgroundColor: {
        _: "colorBackground",
        hover: "colorBackgroundWeakest",
      },
      borderColor: "colorBorderError",
    };
  }
  return {
    backgroundColor: {
      _: "colorBackground",
      hover: "colorBackgroundWeakest",
    },
    borderColor: "colorBorderWeaker",
  };
};

/** A select is an styled form element that allows users to select a value from a list. */
const Select = React.forwardRef<HTMLButtonElement, SelectProps>(
  (
    {
      defaultValue,
      disabled,
      hasError,
      id,
      items,
      name,
      required,
      setValue,
      size = "small",
      value,
      ...props
    },
    ref
  ) => {
    const select = useSelectState({
      defaultValue,
      value,
      sameWidth: true,
      gutter: 4,
      setValue,
    });

    // eslint-disable-next-line lodash/prefer-lodash-method
    const selectedItem = items.find((item) => item.value === select.value);

    return (
      <>
        <Box.button
          alignItems="center"
          appearance="none"
          aria-required={required}
          as={SelectPrimitive}
          background="none"
          borderRadius="borderRadius20"
          borderStyle="borderStyleSolid"
          borderWidth="borderWidth10"
          color={
            disabled || startsWith(select.value, "select-")
              ? "colorText"
              : "colorTextStronger"
          }
          cursor={disabled ? "not-allowed" : "auto"}
          data-has-error={hasError}
          disabled={disabled}
          display="flex"
          fontFamily="fontFamilyModerat"
          fontSize={size === "large" ? "fontSize30" : "fontSize20"}
          fontWeight="fontWeightMedium"
          id={id}
          lineHeight="lineHeight30"
          margin="space0"
          name={name}
          outlineColor={{ focus: "colorBorderPrimary" }}
          outlineStyle={{ focus: "solid" }}
          outlineWidth={{ focus: "borderWidth20" }}
          paddingBottom={size === "large" ? "space40" : "space30"}
          paddingLeft="space40"
          paddingRight="space40"
          paddingTop={size === "large" ? "space40" : "space30"}
          position="relative"
          ref={ref}
          required={required}
          textAlign="left"
          w="100%"
          {...getSelectStyles(disabled, hasError)}
          {...props}
          state={select}
        >
          <Box.div
            overflow="hidden"
            textOverflow="ellipsis"
            w="100%"
            whiteSpace="nowrap"
          >
            {selectedItem?.label}
          </Box.div>
          <Box.div
            display="inline-flex"
            justifyContent="center"
            marginLeft="auto"
          >
            <SelectArrow
              as={Icon}
              decorative
              icon="ChevronDownIcon"
              size={size === "large" ? "sizeIcon30" : "sizeIcon20"}
            />
          </Box.div>
        </Box.button>
        <SelectPopover state={select}>
          {map(items, (item) => (
            <SelectItem
              disabled={item.disabled}
              initial={item.initial}
              key={item.value}
              label={item.label}
              value={item.value}
            />
          ))}
        </SelectPopover>
      </>
    );
  }
);

Select.displayName = "Select";

export { Select };
