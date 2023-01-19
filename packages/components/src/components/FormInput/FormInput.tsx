import React from "react";
import PropTypes from "prop-types";
import { Label } from "../Label";
import { Input } from "../Input";
import { HelpText } from "../HelpText";
import type { InputProps } from "../Input";
import { Box } from "../../primitives/Box";

export interface FormInputProps extends Omit<InputProps, "id"> {
  /** The `id` of the input. */
  id: string;
  /** The text to be used for Label. */
  label: string;
  /** The text to be used for HelpText. */
  helpText?: string;
}

/** Combined Label, Input, and HelpText used in forms. */
const FormInput = React.forwardRef<HTMLInputElement, FormInputProps>(
  (
    {
      id,
      type = "text",
      required,
      label,
      helpText,
      disabled,
      hasError,
      value,
      ...props
    },
    ref
  ) => {
    return (
      <Box.div position="relative">
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
          <Box.div position="absolute">
            <HelpText hasError={hasError} id={`${id}-help-text`}>
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
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  helpText: PropTypes.string,
};

export { FormInput };
