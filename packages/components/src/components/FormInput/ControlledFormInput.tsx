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
}

const ControlledFormInput = ({
  control,
  disabled,
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
          helpText={helpText}
          id={id}
          label={label}
          placeholder={placeholder}
          readOnly={readOnly}
          required={(props.rules?.required as boolean) || required}
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
  helpText: PropTypes.node,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  readOnly: PropTypes.bool,
  required: PropTypes.bool,
};

export { ControlledFormInput };
