import React from "react";
import map from "lodash/map";
import startsWith from "lodash/startsWith";
import {
  Select as SelectPrimitive,
  SelectArrow,
  useSelectStore,
  SelectStoreProps,
} from "@ariakit/react/select";
import type { SelectProps as SelectPrimitiveProps } from "@ariakit/react/select";
import type { SystemProp, Theme } from "@xstyled/styled-components";
import isArray from "lodash/isArray";
import { Box, BoxProps } from "../../primitives/Box";
import { Text } from "../../primitives/Text";
import { Icon } from "../Icon";
import { SelectItem } from "./SelectItem";
import type { SelectItemProps } from "./SelectItem";
import { SelectPopover } from "./SelectPopover";

const NO_SELECTION_STRING = "Select one";

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
  defaultValue?: string[] | string;
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
  /** The text to be used for the select placeholder. */
  placeholder?: string;
  /** Sets the select state to required, so a user has to provide a value in order to be valid. */
  required?: boolean;
  /** Function that will be called when setting the select value state. */
  setValue?: SelectStoreProps["setValue"];
  /** Changes the size of the select. */
  size?: "large" | "small";
  /** The selected option of the select. */
  value?: string[] | string;
  /** The width of the select popover. */
  popoverWidth?: BoxProps["w"];
  /** The max width of the select popover. */
  popoverMaxWidth?: BoxProps["maxW"];
  /** Sets the select popover to be the same width as the select. */
  sameWidth?: boolean;
}

const getSelectStyles = (
  disabled?: boolean,
  hasError?: boolean,
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

const getSelectedLabel = (
  items: SelectItemProps[],
  value: string[] | string,
  placeholder?: string,
) => {
  if (value === "") {
    return (
      <Text.span color="colorText">
        {placeholder || NO_SELECTION_STRING}
      </Text.span>
    );
  }

  if (isArray(value)) {
    if (value.length === 0)
      return (
        <Text.span color="colorText">
          {placeholder || NO_SELECTION_STRING}
        </Text.span>
      );
    if (value.length === 1)
      // eslint-disable-next-line lodash/prefer-lodash-method
      return items.find((item) => item.value === value[0])?.label;
    return map(value, (val) => {
      // eslint-disable-next-line lodash/prefer-lodash-method
      return items.find((item) => item.value === val)?.label;
    }).join(", ") as string;
  }

  // eslint-disable-next-line lodash/prefer-lodash-method
  return items.find((item) => item.value === value)?.label;
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
      placeholder,
      required,
      setValue,
      size = "small",
      value,
      sameWidth = true,
      popoverWidth,
      popoverMaxWidth,
      ...props
    },
    ref,
  ) => {
    const store = useSelectStore({
      defaultValue,
      value,
      setValue,
    });

    const selectValue = store.useState("value");

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
            disabled ||
            (!isArray(selectValue) &&
              startsWith(selectValue as string, "select-"))
              ? "colorText"
              : "colorTextStronger"
          }
          cursor={disabled ? "not-allowed" : "auto"}
          data-has-error={hasError}
          disabled={disabled}
          display="flex"
          fontFamily="fontFamilyNotoSans"
          fontSize={size === "large" ? "fontSize30" : "fontSize20"}
          fontWeight="fontWeightMedium"
          id={id}
          lineHeight="lineHeight30"
          margin="m0"
          name={name}
          outlineColor={{ focus: "colorBorderPrimary" }}
          outlineStyle={{ focus: "solid" }}
          outlineWidth={{ focus: "borderWidth20" }}
          paddingBottom={size === "large" ? "d3" : "d2"}
          paddingLeft="d3"
          paddingRight="d3"
          paddingTop={size === "large" ? "d3" : "d2"}
          position="relative"
          ref={ref}
          required={required}
          textAlign="left"
          w="100%"
          {...getSelectStyles(disabled, hasError)}
          {...props}
          onBlur={(event) => {
            if (event.defaultPrevented) {
              return;
            }
            const popover = store.getState().popoverElement;
            if (popover?.contains(event.relatedTarget)) {
              return;
            }
            props.onBlur?.(event);
          }}
          store={store}
        >
          <Box.div
            overflow="hidden"
            textOverflow="ellipsis"
            w="100%"
            whiteSpace="nowrap"
          >
            {getSelectedLabel(items, selectValue, placeholder)}
          </Box.div>
          <Box.div
            display="inline-flex"
            justifyContent="center"
            marginLeft="auto"
          >
            <SelectArrow
              render={
                <Icon
                  decorative
                  icon="chevron-down"
                  size={size === "large" ? "sizeIcon30" : "sizeIcon20"}
                />
              }
            />
          </Box.div>
        </Box.button>
        <SelectPopover
          gutter={4}
          hideOnInteractOutside
          maxW={popoverMaxWidth}
          sameWidth={sameWidth}
          store={store}
          w={popoverWidth}
        >
          {map(items, (item) => (
            <SelectItem
              disabled={item.disabled}
              key={item.value}
              label={item.label}
              value={item.value}
            />
          ))}
        </SelectPopover>
      </>
    );
  },
);

Select.displayName = "Select";

export { Select };
