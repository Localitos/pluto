import React from "react";
import {
  Root as SwitchRootPrimitive,
  Thumb as SwitchThumbPrimitive,
} from "@radix-ui/react-switch";
import type { SwitchProps as SwitchPrimitiveProps } from "@radix-ui/react-switch";
import { useUID } from "react-uid";
import PropTypes from "prop-types";
import { Label } from "../Label";
import { Box } from "../../primitives/Box";
import { HelpText } from "../HelpText";
import { Icon } from "../Icon";

export interface SwitchProps extends SwitchPrimitiveProps {
  /** The controlled state of the switch. Must be used in conjunction with onCheckedChange. */
  checked?: boolean;
  /** The accessible text label for the switch. */
  children: string;
  /** The state of the switch when it is initially rendered. Use when you do not need to control its state. */
  defaultChecked?: boolean;
  /** When true, prevents the user from interacting with the switch. */
  disabled?: boolean;
  /** Help text for additional guidance. */
  helpText?: React.ReactNode;
  /** Event handler called when the state of the switch changes. */
  onCheckedChange?: (checked: boolean) => void;
}

/** A control that allows the user to toggle between checked and not checked. */
const Switch = React.forwardRef<HTMLButtonElement, SwitchProps>(
  (
    {
      checked,
      children,
      defaultChecked,
      disabled,
      helpText,
      onCheckedChange,
      ...props
    },
    ref,
  ) => {
    const switchId = useUID();
    const helpTextId = useUID();
    return (
      <Box.div display="flex" gap="space40">
        <Box.button
          appearance="none"
          aria-describedby={helpTextId}
          as={SwitchRootPrimitive}
          background="none"
          backgroundColor={{
            _: "colorBackgroundStrongest",
            hover: "colorBackgroundPrimaryStrong",
            focus: "colorBackgroundPrimaryStrong",
            checked: {
              _: "colorBackgroundPrimary",
              hover: "colorBackgroundPrimaryStrong",
              focus: "colorBackgroundPrimaryStrong",
            },
            disabled: {
              _: "colorBackgroundStrong",
              checked: "colorBackgroundPrimaryWeakest",
            },
          }}
          border="none"
          borderRadius="borderRadiusPill"
          checked={checked}
          cursor={{
            disabled: "not-allowed",
            hover: "pointer",
          }}
          defaultChecked={defaultChecked}
          disabled={disabled}
          h="1.5rem"
          id={switchId}
          margin="space0"
          onCheckedChange={onCheckedChange}
          outlineColor={{ focus: "colorBorderPrimary" }}
          outlineOffset={{ focus: "borderWidth20" }}
          outlineStyle={{ focus: "borderStyleSolid" }}
          outlineWidth={{ focus: "borderWidth20" }}
          padding="space0"
          position="relative"
          ref={ref}
          w="2.75rem"
          {...props}
        >
          <Box.span
            display="block"
            h="1rem"
            left="4px"
            position="absolute"
            top="50%"
            transform="translate(0, -50%)"
            w="1rem"
          >
            <Icon
              color="colorTextInverse"
              decorative
              icon="check"
              size="sizeIcon20"
            />
          </Box.span>
          <Box.span
            as={SwitchThumbPrimitive}
            backgroundColor="colorBackground"
            borderRadius="borderRadiusCircle"
            display="block"
            h="1.25rem"
            transform={{
              _: "translateX(0.188rem)",
              checked: "translateX(1.313rem)",
            }}
            transition="transform 100ms"
            w="1.25rem"
          />
          <Box.span
            display="block"
            h="1rem"
            position="absolute"
            right="4px"
            top="50%"
            transform="translate(0, -50%)"
            w="1rem"
          >
            <Icon
              color="colorTextInverse"
              decorative
              icon="x"
              size="sizeIcon20"
            />
          </Box.span>
        </Box.button>
        <Box.div marginTop="space20">
          <Label disabled={disabled} htmlFor={switchId} marginBottom="space0">
            {children}
          </Label>
          {helpText && <HelpText id={helpTextId}>{helpText}</HelpText>}
        </Box.div>
      </Box.div>
    );
  },
);

Switch.displayName = "Switch";

Switch.propTypes = {
  checked: PropTypes.bool,
  children: PropTypes.string.isRequired,
  defaultChecked: PropTypes.bool,
  disabled: PropTypes.bool,
  helpText: PropTypes.node,
  onCheckedChange: PropTypes.func,
};

export { Switch };
