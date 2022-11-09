import React from "react";
import { Box } from "../../primitives/Box";
import { Button, ButtonProps } from "../Button";

export interface FileUploaderButtonProps extends Omit<ButtonProps, "onChange"> {
  /** It is called when user selects a file */
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  accept?: string;
}

/** An input that handles a file to be uploaded */
const FileUploaderButton = React.forwardRef<
  HTMLButtonElement,
  FileUploaderButtonProps
>(({ id, onChange, accept, ...props }, ref) => (
  <Button as="label" {...props} ref={ref}>
    Upload
    <Box.input
      accept={accept}
      hidden
      id={id}
      onChange={onChange}
      tabIndex={-1}
      type="file"
    />
  </Button>
));

FileUploaderButton.displayName = "FileUploaderButton";

export { FileUploaderButton };
