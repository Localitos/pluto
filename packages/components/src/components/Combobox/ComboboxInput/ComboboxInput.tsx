import {
  Combobox as AriakitCombobox,
  ComboboxProps as AriakitComboboxProps,
} from "@ariakit/react";
import { Box, Input } from "@localyze-pluto/components";
import React, { ComponentProps, forwardRef } from "react";

export type ComboboxInputProps = ComponentProps<typeof Box.input> &
  Pick<AriakitComboboxProps, "onClick" | "store">;

export const ComboboxInput = forwardRef<HTMLInputElement, ComboboxInputProps>(
  (props, ref) => (
    <AriakitCombobox
      autoSelect
      ref={ref}
      render={<Input type="text" />}
      {...props}
    />
  ),
);

ComboboxInput.displayName = "ComboboxInput";
