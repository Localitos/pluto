import React from "react";
import PropTypes from "prop-types";
import { Controller } from "react-hook-form";
import type { ControllerProps, Control } from "react-hook-form";
import { FormSelect } from "./FormSelect";
import type { FormSelectProps } from "./FormSelect";

export interface ControlledFormSelectProps
  extends Omit<ControllerProps, "control" | "defaultValue" | "render">,
    Omit<FormSelectProps, "defaultValue" | "hasError" | "name" | "value"> {
  /** Invoked with `useForm`. Set to any to allow `any` number of form inputs. */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any>;
}

const ControlledFormSelect = ({
  control,
  disabled,
  helpText,
  id,
  items,
  label,
  name,
  placeholder,
  required,
  ...props
}: ControlledFormSelectProps): JSX.Element => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState }) => (
        <FormSelect
          {...field}
          disabled={disabled}
          hasError={fieldState.invalid}
          helpText={fieldState.error?.message || helpText}
          id={id}
          items={items}
          label={label}
          placeholder={placeholder}
          required={(props.rules?.required as boolean) || required}
          setValue={field.onChange}
          {...props}
        />
      )}
      rules={props.rules}
    />
  );
};

ControlledFormSelect.displayName = "ControlledFormSelect";

ControlledFormSelect.propTypes = {
  control: PropTypes.any,
  disabled: PropTypes.bool,
  helpText: PropTypes.node,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
};

export { ControlledFormSelect };
