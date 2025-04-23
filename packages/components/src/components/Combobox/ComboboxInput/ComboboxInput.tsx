import {
  Combobox as AriakitCombobox,
  ComboboxProps as AriakitComboboxProps,
} from "@ariakit/react";
import React, { ComponentProps, forwardRef, ReactElement } from "react";
import { Box } from "../../../primitives/Box";
import { Input } from "../../Input";

export type ComboboxInputProps = Omit<
  ComponentProps<typeof Input>,
  "color" | "size" | "type" | "value"
> &
  Pick<AriakitComboboxProps, "onClick" | "store" | "value"> & {
    as?: ReactElement<typeof Input>;
  };

export const ComboboxInput = forwardRef<HTMLInputElement, ComboboxInputProps>(
  ({ as = <Input type="text" />, ...props }, ref) => {
    return (
      <AriakitCombobox
        autoSelect
        ref={ref}
        render={as as ReactElement<typeof Box.input>}
        {...props}
      />
    );
  },
);

ComboboxInput.displayName = "ComboboxInput";
