import React from "react";
import { useUID } from "react-uid";
import {
  Item as RadioItem,
  RadioGroupItemProps,
  Indicator as RadioIndicator,
} from "@radix-ui/react-radio-group";
import { Box } from "../../primitives/Box";
import { Text } from "../../primitives/Text";

export interface RadioProps extends RadioGroupItemProps {
  /** The label of the radio. */
  label: string;
  /** The value of the radio. */
  value: string;
  /** Sets the disabled state of the radio. */
  disabled?: boolean;
  /** Sets the error state of the radio. */
  hasError?: boolean;
}

/** A Radio is one button of a set of checkable buttons—known as radio buttons—where no more than one of the buttons can be checked at a time. */
const Radio = React.forwardRef<HTMLButtonElement, RadioProps>(
  ({ disabled = false, hasError = false, label, value, ...props }, ref) => {
    const radioID = useUID();
    return (
      <Box.div alignItems="center" display="flex" gap="d2">
        <Box.button
          appearance="none"
          aria-invalid={hasError}
          as={RadioItem}
          backgroundColor={{
            _: "colorBackground",
            hover: "colorBackgroundWeak",
            checked: {
              _: hasError
                ? "colorBackgroundDestructiveStrong"
                : "colorBackgroundPrimary",
              hover: hasError
                ? "colorBackgroundDestructiveStrong"
                : "colorBackgroundPrimaryStrong",
              disabled: {
                _: "colorBackgroundStrong",
                hover: "colorBackgroundStrong",
              },
            },
            disabled: {
              _: "colorBackground",
              hover: "colorBackground",
            },
          }}
          borderColor={{
            _: hasError ? "colorBorderError" : "colorBorder",
            checked: hasError ? "colorBorderError" : "colorBorderPrimary",
            disabled: "colorBorderWeaker",
          }}
          borderRadius="borderRadiusCircle"
          borderStyle="borderStyleSolid"
          borderWidth="borderWidth10"
          disabled={disabled}
          h="1rem"
          id={radioID}
          margin="m0"
          outlineColor={{ focus: "colorBorderPrimary" }}
          outlineOffset={{ focus: "borderWidth20" }}
          outlineStyle={{ focus: "solid" }}
          outlineWidth={{ focus: "borderWidth20" }}
          padding="d0"
          ref={ref}
          value={value}
          w="1rem"
          {...props}
        >
          <Box.span
            alignItems="center"
            as={RadioIndicator}
            borderRadius="borderRadiusCircle"
            display="flex"
            h="100%"
            justifyContent="center"
            w="100%"
          >
            <Box.span
              backgroundColor="colorBackground"
              borderRadius="borderRadiusCircle"
              h="0.375rem"
              w="0.375rem"
            />
          </Box.span>
        </Box.button>
        <Text.label
          color="colorTextStrongest"
          fontFamily="fontFamilyNotoSans"
          fontSize="fontSize20"
          fontWeight="fontWeightRegular"
          htmlFor={radioID}
          lineHeight="lineHeight20"
          margin="m0"
        >
          {label}
        </Text.label>
      </Box.div>
    );
  },
);

Radio.displayName = "Radio";

export { Radio };
