import React from "react";
import PropTypes from "prop-types";
import { Controller } from "react-hook-form";
import type { ControllerProps, Control } from "react-hook-form";
import { FormTextArea } from "./FormTextArea";
import type { FormTextAreaProps } from "./FormTextArea";

export interface ControlledFormTextAreaProps
  extends Omit<ControllerProps, "control" | "defaultValue" | "render">,
    Omit<FormTextAreaProps, "defaultValue" | "name" | "value"> {
  /** Invoked with `useForm`. Set to any to allow `any` number of form inputs. */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control?: Control<any>;
}

const ControlledFormTextArea = ({
  control,
  disabled,
  helpText,
  id,
  label,
  name,
  placeholder,
  readOnly,
  required,
  ...props
}: ControlledFormTextAreaProps): JSX.Element => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState }) => (
        <FormTextArea
          {...field}
          disabled={disabled}
          hasError={fieldState.invalid}
          helpText={helpText}
          id={id}
          label={label}
          placeholder={placeholder}
          readOnly={readOnly}
          required={(props.rules?.required as boolean) || required}
          {...props}
        />
      )}
      rules={props.rules}
    />
  );
};

ControlledFormTextArea.displayName = "ControlledFormTextArea";

ControlledFormTextArea.propTypes = {
  control: PropTypes.any,
  disabled: PropTypes.bool,
  helpText: PropTypes.node,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  readOnly: PropTypes.bool,
  required: PropTypes.bool,
};

export { ControlledFormTextArea };
