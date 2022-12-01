import { useDown } from "@localyze-pluto/theme";
import React, { ReactElement } from "react";
import { Box } from "../../primitives/Box";
import { ButtonProps } from "../Button";
import { HelpText } from "../HelpText";
import { FileUploaderButtonProps } from "./FileUploaderButton";
import { RemoveButton } from "./RemoveButton";
import { CancelUploadButton } from "./CancelUploadButton";
import { getStatus } from "./utils/getStatus";
import { FileUploaderTitle } from "./FileUploaderTitle";
import { FileUploaderDescription } from "./FileUploaderDescription";
import { FileUploaderProgressBar } from "./FileUploaderProgressBar";
import { FileUploaderIcon } from "./FileUploaderIcon";

export interface FileUploaderProps
  extends React.HTMLAttributes<HTMLDivElement> {
  /** The title of the file */
  label: string;

  /** The call to action button */
  children: ReactElement<ButtonProps | FileUploaderButtonProps>;

  /** The max size of a file */
  maxFileSize?: string;

  /** The file name */
  fileName?: string;

  /** The file url when the file is uploaded */
  fileUrl?: string;

  /** The size of the file */
  fileSize?: string;

  /** An error message */
  errorMessage?: string;

  /** The upload progress */
  progress?: number;

  /** Handles cancel upload  */
  onCancel?: () => void;

  /** Handles remove file */
  onRemove?: () => void;

  /** Disables the file uploader */
  disabled?: boolean;
}

/** Visual component to display status of a file upload */
const FileUploader = React.forwardRef<HTMLDivElement, FileUploaderProps>(
  (
    {
      fileName,
      fileUrl,
      fileSize,
      maxFileSize,
      errorMessage,
      label,
      children,
      progress = 0,
      onCancel,
      onRemove,
      disabled = false,
    },
    ref
  ) => {
    const isMobile = useDown("md");
    const status = getStatus({ disabled, progress, fileUrl, errorMessage });
    const isMobileUploading = isMobile && status === "loading";
    const isUploadedWithoutName = status === "success" && !fileName;

    return (
      <Box.div display="flex" flexDirection="column" gap="space25">
        <Box.div
          borderColor={
            status === "error" ? "colorBorderError" : "colorBorderWeaker"
          }
          borderRadius="borderRadius30"
          borderStyle="borderSolid"
          borderWidth="borderWidth10"
          display="flex"
          flexDirection={{ _: "column", md: "row" }}
          gap={isMobileUploading ? "space30" : "space70"}
          padding="space50"
          ref={ref}
        >
          <Box.div
            display="flex"
            flexDirection="row"
            flexGrow={1}
            gap="space40"
            style={{ wordBreak: "break-word" }}
          >
            <FileUploaderIcon status={status} />
            <Box.div
              display="flex"
              flexDirection="column"
              flexGrow={1}
              justifyContent={isMobile ? "top" : "center"}
            >
              <FileUploaderTitle fileUrl={fileUrl} label={label} />
              <Box.div
                alignItems={{ _: "left", md: "center" }}
                display="flex"
                flexDirection={{ _: "column-reverse", md: "row" }}
                gap="space40"
              >
                {!isMobile && status === "loading" && (
                  <FileUploaderProgressBar progress={progress} />
                )}
                {!isMobileUploading && !isUploadedWithoutName && (
                  <FileUploaderDescription
                    fileName={fileName}
                    fileSize={fileSize}
                    maxFileSize={maxFileSize}
                    status={status}
                  />
                )}
              </Box.div>
            </Box.div>
          </Box.div>
          {isMobileUploading && (
            <FileUploaderProgressBar fileName={fileName} progress={progress} />
          )}
          {(status === "waiting" || status === "disabled") &&
            React.cloneElement(children, {
              fullWidth: isMobile,
              disabled,
              style: { alignSelf: "start" },
            })}
          {(status === "error" || status === "success") && (
            <RemoveButton onClick={onRemove} />
          )}
          {status === "loading" && <CancelUploadButton onClick={onCancel} />}
        </Box.div>
        {errorMessage && (
          <HelpText hasError role="alert">
            {errorMessage}
          </HelpText>
        )}
      </Box.div>
    );
  }
);

FileUploader.displayName = "FileUploader";

export { FileUploader };
