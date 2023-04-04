import React from "react";
import PropTypes from "prop-types";
import { Control, Controller } from "react-hook-form";
import type { ControllerProps } from "react-hook-form";
import { CheckedState } from "@radix-ui/react-checkbox";
import { Checkbox } from "../Checkbox";
import type { CheckboxProps } from "../Checkbox";

export interface ControlledCheckboxProps
  extends Pick<ControllerProps, "name" | "rules">,
    Omit<CheckboxProps, "checked" | "error" | "name" | "onBlur" | "value"> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control?: Control<any>;
}

const ControlledCheckbox = ({
  control,
  disabled,
  id,
  name,
  ...props
}: ControlledCheckboxProps): JSX.Element => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState }) => (
        <Checkbox
          checked={field.value as CheckedState}
          disabled={disabled}
          error={fieldState.invalid}
          id={id}
          onBlur={field.onBlur}
          onCheckedChange={(checkState) => {
            field.onChange(checkState);
          }}
          ref={field.ref}
          {...props}
        />
      )}
      rules={props.rules}
    />
  );
};

ControlledCheckbox.displayName = "ControlledCheckbox";

ControlledCheckbox.propTypes = {
  control: PropTypes.any,
  disabled: PropTypes.bool,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export { ControlledCheckbox };
