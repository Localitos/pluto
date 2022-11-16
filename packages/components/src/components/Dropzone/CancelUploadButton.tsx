import React, { ReactElement } from "react";
import { Button, ButtonProps } from "../Button";

export const CancelUploadButton = (
  props: Partial<ButtonProps>
): ReactElement => {
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
