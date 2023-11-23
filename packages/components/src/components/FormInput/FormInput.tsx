import React from "react";
import PropTypes from "prop-types";
import { Label } from "../Label";
import type { InputProps } from "../Input";
import { Input } from "../Input";
import { HelpText } from "../HelpText";
import { Box } from "../../primitives/Box";

export interface FormInputProps
  extends Omit<
    InputProps,
    "aria-describedby" | "aria-label" | "aria-labelledby" | "id"
  > {
  /** The `id` of the input. */
  id: string;
  /** The text to be used for Label. */
  label: NonNullable<React.ReactNode>;
  /** The text to be used for HelpText. */
  helpText?: React.ReactNode;
}

/** Combined Label, Input, and HelpText used for Inputs in forms. */
const FormInput = React.forwardRef<HTMLInputElement, FormInputProps>(
  (
    {
      disabled,
      hasError,
      helpText,
      id,
      label,
      required,
      type = "text",
      value,
      ...props
    },
    ref
  ) => {
    return (
      <Box.div>
        <Label disabled={disabled} htmlFor={id} required={required}>
          {label}
        </Label>
        <Input
          aria-describedby={helpText ? `${id}-help-text` : undefined}
          disabled={disabled}
          hasError={hasError}
          id={id}
          ref={ref}
          required={required}
          type={type}
          value={value}
          {...props}
        />
        {helpText && (
          <HelpText hasError={hasError} id={`${id}-help-text`}>
            {helpText}
          </HelpText>
        )}
      </Box.div>
    );
  }
);

FormInput.displayName = "FormInput";

FormInput.propTypes = {
  disabled: PropTypes.bool,
  helpText: PropTypes.node,
  id: PropTypes.string.isRequired,
  label: PropTypes.node.isRequired,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  readOnly: PropTypes.bool,
  required: PropTypes.bool,
};

export { FormInput };
