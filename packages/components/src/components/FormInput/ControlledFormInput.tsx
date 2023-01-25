import React from "react";
import PropTypes from "prop-types";
import { Controller } from "react-hook-form";
import type { ControllerProps, Control } from "react-hook-form";
import { FormInput } from "./FormInput";
import type { FormInputProps } from "./FormInput";

export interface ControlledFormInputProps
  extends Omit<ControllerProps, "control" | "render">,
    Omit<FormInputProps, "defaultValue" | "name"> {
  /** Invoked with `useForm`. Set to any to allow `any` number of form inputs. */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control?: Control<any>;
  /** The text to be used for HelpText errors. */
  errorText?: React.ReactNode;
}

const ControlledFormInput = ({
  control,
  disabled,
  errorText,
  helpText,
  id,
  label,
  name,
  placeholder,
  readOnly,
  required,
  type,
  ...props
}: ControlledFormInputProps): JSX.Element => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState }) => (
        <FormInput
          {...field}
          disabled={disabled}
          hasError={fieldState.invalid}
          helpText={fieldState.invalid ? errorText : helpText}
          id={id}
          label={label}
          placeholder={placeholder}
          readOnly={readOnly}
          required={required}
          type={type}
          {...props}
        />
      )}
      rules={props.rules}
    />
  );
};

ControlledFormInput.displayName = "ControlledFormInput";

ControlledFormInput.propTypes = {
  control: PropTypes.any,
  disabled: PropTypes.bool,
  errorText: PropTypes.node,
  helpText: PropTypes.node,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  readOnly: PropTypes.bool,
  required: PropTypes.bool,
};

export { ControlledFormInput };
