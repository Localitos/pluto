import React from "react";
import {
  ComboboxProvider as AriakitComboboxProvider,
  ComboboxProviderProps,
} from "@ariakit/react";

export const ComboboxProvider = (
  props: ComboboxProviderProps,
): React.ReactElement => {
  return <AriakitComboboxProvider {...props} />;
};
