import React from "react";
import PropTypes from "prop-types";
import { Label } from "../Label";
import { Input } from "../Input";
import { HelpText } from "../HelpText";
import type { InputTypes } from "../Input";
import { Box } from "../../primitives/Box";

export interface FormInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "color" | "size"> {
  /** The `id` of the input. */
  inputId: string;
  /** Changes the input type. */
  type?: InputTypes;
  /** Sets the input state to required, so a user has to provide a value in order to be valid. */
  required?: boolean;
  /** Sets the state of the input to an error state. */
  hasError?: boolean;
  /** The value of the input. */
  value?: string;
  /** The text to be used for Label. */
  label: string;
  /** The text to be used for HelpText. */
  helpText?: string;
}

/** Combined Label, Input, and HelpText used in forms. */
const FormInput = React.forwardRef<HTMLInputElement, FormInputProps>(
  (
    {
      inputId,
      type = "text",
      required,
      label,
      helpText,
      hasError,
      value,
      ...props
    },
    ref
  ) => {
    return (
      <Box.div position="relative">
        <Label htmlFor={inputId} required={required}>
          {label}
        </Label>
        <Input
          aria-describedby={helpText ? `${inputId}-help-text` : undefined}
          hasError={hasError}
          id={inputId}
          ref={ref}
          required={required}
          type={type}
          value={value}
          {...props}
        />
        {helpText && (
          <Box.div position="absolute">
            <HelpText hasError={hasError} id={`${inputId}-help-text`}>
              {helpText}
            </HelpText>
          </Box.div>
        )}
      </Box.div>
    );
  }
);

FormInput.displayName = "FormInput";

FormInput.propTypes = {
  inputId: PropTypes.string.isRequired,
  type: PropTypes.oneOf([
    "date",
    "datetime-local",
    "email",
    "hidden",
    "number",
    "password",
    "search",
    "tel",
    "text",
    "time",
  ]),
  required: PropTypes.bool,
  hasError: PropTypes.bool,
  value: PropTypes.string,
  label: PropTypes.string.isRequired,
  helpText: PropTypes.string,
};

export { FormInput };
