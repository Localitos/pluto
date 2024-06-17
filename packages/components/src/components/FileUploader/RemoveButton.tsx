import React, { ReactElement } from "react";
import { useDown } from "@localyze-pluto/theme";
import { Button, ButtonProps } from "../Button";

export const RemoveButton = (props: Partial<ButtonProps>): ReactElement => {
  const isMobile = useDown("md");

  if (isMobile) {
    return (
      <Button
        {...props}
        aria-label="Remove file"
        type="button"
        variant="secondary"
      >
        Remove
      </Button>
    );
  }

  return (
    <Button
      {...props}
      aria-label="Remove file"
      iconOnly
      trailingIcon="trash-2"
      type="button"
      variant="ghost"
    />
  );
};
