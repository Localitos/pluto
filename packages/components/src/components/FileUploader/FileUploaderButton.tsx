import invoke from "lodash/invoke";
import React, { useRef } from "react";
import { Box } from "../../primitives/Box";
import { Button, ButtonProps } from "../Button";

export interface FileUploaderButtonProps extends Omit<ButtonProps, "onChange"> {
  /** It is called when user selects a file */
  onChange?: React.ChangeEventHandler<HTMLInputElement>;

  /** The acceptable file types/extensions */
  accept?: string;
}

/** An input that handles a file to be uploaded */
const FileUploaderButton = React.forwardRef<
  HTMLButtonElement,
  FileUploaderButtonProps
>(({ id, onChange, accept, disabled, ...props }, ref) => {
  const inputRef = useRef(null);
  const clickInput = () => invoke(inputRef.current, "click") as void;
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
        tabIndex={-1}
        type="file"
      />
    </>
  );
});

FileUploaderButton.displayName = "FileUploaderButton";

export { FileUploaderButton };
