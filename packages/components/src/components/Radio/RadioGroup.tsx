import React from "react";
import {
  Root as RadioGroupPrimitiveRoot,
  RadioGroupProps as RadioGroupPrimitiveProps,
} from "@radix-ui/react-radio-group";
import { Box } from "../../primitives/Box";

export interface RadioGroupProps extends RadioGroupPrimitiveProps {
  /** The individual Radio components within the group. */
  children: React.ReactNode;
  /** The value of the radio item that should be checked when initially rendered. Use when you do not need to control the state of the radio items. */
  defaultValue?: string;
  /** The reading direction of the radio group. If omitted, assumes LTR (left-to-right) reading mode. */
  dir?: "ltr" | "rtl";
  /** The label for the radio group. */
  label?: string;
  /** The name of the group. Submitted with its owning form as part of a name/value pair. */
  name?: string;
  /** Event handler called when the value changes. */
  onValueChange?: (value: string) => void;
  /** The orientation of the RadioGroup */
  orientation?: "horizontal" | "vertical";
  /** When `true`, indicates that the user must check a radio item before the owning form can be submitted. */
  required?: boolean;
  /** The controlled value of the radio item to check. Should be used in conjunction with `onValueChange`. */
  value?: string;
}

/** A RadioGroup is a set of checkable buttons—known as radio buttons—where no more than one of the buttons can be checked at a time. */
const RadioGroup = React.forwardRef<HTMLDivElement, RadioGroupProps>(
  (
    {
      children,
      defaultValue,
      dir = "ltr",
      label,
      name,
      onValueChange,
      orientation = "vertical",
      required,
      value,
      ...props
    },
    ref,
  ) => {
    return (
      <Box.div
        aria-label={label}
        as={RadioGroupPrimitiveRoot}
        defaultValue={defaultValue}
        dir={dir}
        display="flex"
        flexDirection={orientation === "vertical" ? "column" : "row"}
        gap="d2"
        name={name}
        onValueChange={onValueChange}
        ref={ref}
        required={required}
        value={value}
        {...props}
      >
        {children}
      </Box.div>
    );
  },
);

RadioGroup.displayName = "Radio";

export { RadioGroup };
