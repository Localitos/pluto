import React, { ReactElement } from "react";
import { useDown } from "@localyze-pluto/theme";
import { Button, ButtonProps } from "../Button";

export const CancelUploadButton = (
  props: Partial<ButtonProps>,
): ReactElement => {
  const isMobile = useDown("md");

  if (isMobile) {
    return (
      <Button {...props} variant="secondary">
        Cancel upload
      </Button>
    );
  }

  return (
    <Button
      {...props}
      aria-label="Cancel upload"
      iconOnly
      trailingIcon="x"
      variant="ghost"
    />
  );
};
