import React, { useState } from "react";
import type { SystemProp, Theme } from "@xstyled/styled-components";
import { FileWithPath, useDropzone } from "react-dropzone";
import forEach from "lodash/forEach";
import { Text } from "../../primitives/Text";
import { ProgressBar } from "../ProgressBar";
import { Box } from "../../primitives/Box";
import { Icon, IconProps } from "../Icon";
import { DropzoneCancelUploadButton } from "./DropzoneCancelUploadButton";

const MAX_FILE_SIZE = 52_428_800;
const FileTypeErrorMessage = "Wrong file type. PDF format only.";

export type DropzoneProps = {
  /** This is the function that gets triggered when a file is dropped */
  onDrop: (files: FileWithPath[]) => void;
  /** This is the function that gets triggered when the cancel button is clicked */
  onCancel: (files: FileWithPath[]) => void;
  /** This is an error if there is one. string */
  error?: string;
  /** The file types allowed. In the format of an object.{ "application/pdf": [".pdf"] } */
  fileTypes?: Record<string, string[]>;
  /** The max file size allowed. Default is 50mb. Number of bytes*/
  maxFileSize?: number;
  /** This is the progress of the file upload. */
  progress?: number;
};

const getColors = (
  errorState: string | undefined,
  isLoading: boolean,
  successState: boolean,
  isFocused: boolean,
  isDragAccept: boolean,
  isDragReject: boolean
): {
  backgroundColor?: SystemProp<keyof Theme["colors"], Theme>;
  borderColor?: SystemProp<keyof Theme["colors"], Theme>;
} => {
  if (isLoading || isDragAccept) {
    return {
      backgroundColor: "colorBackgroundInfo",
      borderColor: "colorBorderPrimary",
    };
  }
  if (successState) {
    return {
      backgroundColor: "colorBackgroundSuccess",
      borderColor: "colorBorderSuccess",
    };
  }
  if (errorState || isDragReject) {
    return {
      backgroundColor: "colorBackgroundError",
      borderColor: "colorBorderError",
    };
  }
  if (isFocused) {
    return {
      backgroundColor: "colorBackground",
      borderColor: "colorBorderPrimary",
    };
  }
  return {
    backgroundColor: "colorBackgroundWeakest",
    borderColor: "colorBorder",
  };
};

const getIcon = (
  errorState: string | undefined,
  successState: boolean,
  isDragAccept: boolean,
  isDragReject: boolean,
  isDragActive: boolean
) => {
  let icon: IconProps["icon"] = "CloudArrowUpIcon";
  let iconColor: IconProps["color"] = "colorIconInfo";
  if (isDragAccept) {
    icon = "CloudArrowUpIcon";
    iconColor = "colorIconInfo";
  }
  if (successState && !isDragActive) {
    icon = "CheckCircleIcon";
    iconColor = "colorIconSuccess";
  }
  if (isDragReject || (errorState && !isDragActive)) {
    icon = "ExclamationTriangleIcon";
    iconColor = "colorIconError";
  }

  return <Icon color={iconColor} decorative icon={icon} size={"sizeIcon40"} />;
};

const Dropzone = React.forwardRef<HTMLDivElement, DropzoneProps>(
  (
    {
      error,
      fileTypes = { "application/pdf": [".pdf"] },
      maxFileSize = MAX_FILE_SIZE,
      onCancel,
      onDrop,
      progress,
    },
    ref
  ) => {
    const [dropZoneErrors, setDropZoneErrors] = useState(error);
    const defaultState = !dropZoneErrors && !progress;
    const errorState = dropZoneErrors;
    const isLoading = !!progress && progress > 0 && progress < 100;
    const successState = progress === 100 && !dropZoneErrors;

    const {
      acceptedFiles,
      getRootProps,
      getInputProps,
      isDragActive,
      isDragAccept,
      isDragReject,
      isFocused,
    } = useDropzone({
      maxFiles: 1,
      maxSize: maxFileSize,
      multiple: false,
      accept: {
        ...fileTypes,
      },
      onDropAccepted: () => {
        onDrop(acceptedFiles);
      },
      onDropRejected: (fileRejections) => {
        forEach(fileRejections, (file) => {
          forEach(file.errors, (err) => {
            if (err.code === "file-too-large") {
              setDropZoneErrors("File must be less than 50mb.");
            }
            if (err.code === "file-invalid-type") {
              setDropZoneErrors(FileTypeErrorMessage);
            }
          });
        });
      },
    });

    return (
      <>
        {/*  // Ignoring this ts-error because getRootProps is typed as
        // DropzoneRootProps which has a conflicting color prop. DropzoneRootProps
        // comes directly from React-Dropzone so we have no control over it.
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        @ts-ignore */}
        <Box.div
          {...getColors(
            errorState,
            isLoading,
            successState,
            isFocused,
            isDragAccept,
            isDragReject
          )}
          alignItems="center"
          borderRadius="borderRadius30"
          borderStyle="borderDashed"
          borderWidth="borderWidth10"
          display="flex"
          flexDirection="column"
          padding="space70"
          {...getRootProps()}
          ref={ref}
        >
          {/* eslint-disable-next-line jsx-a11y/no-redundant-roles */}
          <input
            {...getInputProps()}
            aria-label="upload-file-input"
            role="textbox"
          />
          {getIcon(
            errorState,
            successState,
            isDragAccept,
            isDragReject,
            isDragActive
          )}
          {isLoading && (
            <>
              {acceptedFiles.join(", ")}
              <Box.div
                alignItems="center"
                display="flex"
                marginTop="space40"
                maxWidth="300px"
                w="100%"
              >
                <Box.div maxWidth="280px" w="100%">
                  <ProgressBar value={progress} />
                </Box.div>
                <DropzoneCancelUploadButton
                  onClick={(event) => {
                    event.stopPropagation();
                    onCancel(acceptedFiles);
                  }}
                />
              </Box.div>
            </>
          )}
          {successState && (
            <Text.span color="colorTextStronger" fontSize="fontSize20">
              {acceptedFiles.join(", ")}
            </Text.span>
          )}
          {(isDragReject || errorState) && (
            <Text.span
              color="colorTextStronger"
              fontSize="fontSize30"
              fontWeight="fontWeightRegular"
            >
              {!isDragReject && dropZoneErrors}
              {isDragReject && FileTypeErrorMessage}
            </Text.span>
          )}
          {!isDragReject && defaultState && (
            <>
              <Text.span
                color="colorTextStronger"
                fontSize="fontSize30"
                fontWeight="fontWeightRegular"
              >
                Drag and drop or browse
              </Text.span>
              <Text.span color="colorText" fontSize="fontSize20">
                File must be PDF format and no larger than 50MB
              </Text.span>
            </>
          )}
        </Box.div>
      </>
    );
  }
);

Dropzone.displayName = "Dropzone";

export { Dropzone };
