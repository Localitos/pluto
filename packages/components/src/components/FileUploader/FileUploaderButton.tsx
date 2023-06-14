import invoke from "lodash/invoke";
import React, { useRef } from "react";
import { Box } from "../../primitives/Box";
import { Button, ButtonProps } from "../Button";

export interface FileUploaderButtonProps
  extends Omit<ButtonProps, "onChange" | "onClick"> {
  /** It is called when user selects a file */
  onChange?: React.ChangeEventHandler<HTMLInputElement>;

  /** It is called when user clicks on the button */
  onClick?: React.MouseEventHandler<HTMLButtonElement>;

  /** The acceptable file types/extensions */
  accept?: string;

  /** Sets the button state to required and must have a value to be valid */
  required?: boolean;
}

/** An input that handles a file to be uploaded */
const FileUploaderButton = React.forwardRef<
  HTMLButtonElement,
  FileUploaderButtonProps
>(({ id, onChange, onClick, accept, disabled, required, ...props }, ref) => {
  const inputRef = useRef(null);
  const clickInput = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    invoke(inputRef.current, "click") as void;
    if (onClick) onClick(event);
  };
  return (
    <>
      <Button
        {...props}
        disabled={disabled}
        id={`${id}-upload-button`}
        onClick={clickInput}
        ref={ref}
      >
        Upload
      </Button>
      <Box.input
        accept={accept}
        aria-labelledby={`${id}-upload-button`}
        disabled={disabled}
        hidden
        id={id}
        onChange={onChange}
        ref={inputRef}
        required={required}
        tabIndex={-1}
        type="file"
      />
    </>
  );
});

FileUploaderButton.displayName = "FileUploaderButton";

export { FileUploaderButton };
