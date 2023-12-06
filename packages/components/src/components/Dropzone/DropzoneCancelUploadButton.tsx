import React from "react";
import { Button, ButtonProps } from "../Button";

export const DropzoneCancelUploadButton = (
  props: Partial<ButtonProps>,
): JSX.Element => {
  return (
    <Button
      {...props}
      aria-label="Cancel upload"
      iconOnly
      trailingIcon="XMarkIcon"
      variant="ghost"
    />
  );
};
