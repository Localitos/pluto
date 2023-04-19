import React from "react";
import { Control, Controller } from "react-hook-form";
import { RadioGroup, RadioGroupProps } from "../RadioGroup";

export interface ControlledRadioGroupProps
  extends Omit<RadioGroupProps, "onValueChange" | "value"> {
  /** The name of the group. Submitted with its owning form as part of a name/value pair. */
  name: string;
  /** Invoked with `useForm`. Set to any to allow `any` number of form inputs. */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control?: Control<any>;
}

const ControlledRadioGroup = React.forwardRef<
  HTMLDivElement,
  ControlledRadioGroupProps
>(({ children, name, control, ...props }) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value } }) => (
        <RadioGroup
          name={name}
          onValueChange={onChange}
          value={value as string}
          {...props}
        >
          {children}
        </RadioGroup>
      )}
    />
  );
});

ControlledRadioGroup.displayName = "ControlledRadioGroup";

export { ControlledRadioGroup };
