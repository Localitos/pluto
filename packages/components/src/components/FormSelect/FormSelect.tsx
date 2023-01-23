import React from "react";
import PropTypes from "prop-types";
import { Label } from "../Label";
import { Select } from "../Select";
import { HelpText } from "../HelpText";
import type { SelectProps } from "../Select";
import { Box } from "../../primitives/Box";

export interface FormSelectProps
  extends Omit<
    SelectProps,
    "aria-describedby" | "aria-label" | "aria-labelledby" | "id"
  > {
  /** The `id` of the select. */
  id: string;
  /** The text to be used for Label. */
  label: NonNullable<React.ReactNode>;
  /** The text to be used for HelpText. */
  helpText?: React.ReactNode;
}

/** Combined Label, Select, and HelpText used for Selects in forms. */
const FormSelect = React.forwardRef<HTMLButtonElement, FormSelectProps>(
  ({ id, required, label, helpText, hasError, disabled, ...props }, ref) => {
    return (
      <Box.div>
        <Label disabled={disabled} htmlFor={id} required={required}>
          {label}
        </Label>
        <Select
          aria-describedby={helpText ? `${id}-help-text` : undefined}
          disabled={disabled}
          hasError={hasError}
          id={id}
          ref={ref}
          required={required}
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

FormSelect.displayName = "FormSelect";

FormSelect.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.node.isRequired,
  helpText: PropTypes.node,
};

export { FormSelect };
