import React from "react";
import PropTypes from "prop-types";
import { Label } from "../Label";
import { TextArea } from "../Textarea";
import { HelpText } from "../HelpText";
import type { TextAreaProps } from "../Textarea";
import { Box } from "../../primitives/Box";

export interface FormTextAreaProps extends Omit<TextAreaProps, "id"> {
  /** The `id` of the input. */
  id: string;
  /** The text to be used for Label. */
  label: NonNullable<React.ReactNode>;
  /** The text to be used for HelpText. */
  helpText?: React.ReactNode;
}

/** Combined Label, Input, and HelpText used for Textareas in forms. */
const FormTextArea = React.forwardRef<HTMLTextAreaElement, FormTextAreaProps>(
  ({ id, required, label, helpText, disabled, hasError, ...props }, ref) => {
    return (
      <Box.div position="relative">
        <Label disabled={disabled} htmlFor={id} required={required}>
          {label}
        </Label>
        <TextArea
          aria-describedby={helpText ? `${id}-help-text` : undefined}
          disabled={disabled}
          hasError={hasError}
          id={id}
          ref={ref}
          required={required}
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

FormTextArea.displayName = "FormTextArea";

FormTextArea.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.node.isRequired,
  helpText: PropTypes.node,
};

export { FormTextArea };
