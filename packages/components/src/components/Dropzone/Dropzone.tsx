import React, { useState, useEffect } from "react";
import type { SystemProp, Theme } from "@xstyled/styled-components";
import map from "lodash/map";
import { FileWithPath, useDropzone } from "react-dropzone";
import forEach from "lodash/forEach";
import { Text } from "../../primitives/Text";
import { ProgressBar } from "../ProgressBar";
import { Box } from "../../primitives/Box";
import { Icon, IconProps } from "../Icon";
import {
  fileSizeInMb,
  getFileExtensions,
  getFileRestrictionText,
} from "./getFileRestrictionText";
import { DropzoneCancelUploadButton } from "./DropzoneCancelUploadButton";

export type FileTypes = Record<string, string[]>;

export type DropzoneProps = {
  /** This is the function that gets triggered when a file is dropped */
  onDrop: (files: FileWithPath[]) => void;
  /** This is the function that gets triggered when the cancel button is clicked */
  onCancel: (files: FileWithPath[]) => void;
  /** This is an error if there is one. string */
  error?: string;
  /** The file types allowed. In the format of an object.{ "application/pdf": [".pdf"] } */
  fileTypes?: FileTypes;
  /** The max number of files allowed to be dropped. Default is 1. Number.*/
  maxNumFiles?: number;
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
  isDragAccept: boolean
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
  if (errorState) {
    return {
      backgroundColor: "colorBackgroundError",
      borderColor: "colorBorderError",
    };
  }
  if (isFocused) {
    return {
      backgroundColor: "colorBackgroundWeakest",
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
  isLoading: boolean,
  successState: boolean,
  isDragAccept: boolean,
  isDragActive: boolean
) => {
  let icon: IconProps["icon"] = "CloudArrowUpIcon";
  let iconColor: IconProps["color"] = "colorIconInfo";
  if (isLoading || isDragAccept) {
    icon = "CloudArrowUpIcon";
    iconColor = "colorIconInfo";
  }
  if (successState && !isDragActive) {
    icon = "CheckCircleIcon";
    iconColor = "colorIconSuccess";
  }
  if (errorState && !isDragActive) {
    icon = "ExclamationTriangleIcon";
    iconColor = "colorIconError";
  }

  return (
    <Box.div paddingBottom="space20">
      <Icon color={iconColor} decorative icon={icon} size={"sizeIcon40"} />
    </Box.div>
  );
};

const getFileTypeErrorMessage = (fileTypes: FileTypes) =>
  `Wrong file type. ${getFileExtensions(fileTypes)} format only.`;

const Dropzone = React.forwardRef<HTMLDivElement, DropzoneProps>(
  (
    {
      error,
      fileTypes = {},
      maxNumFiles = 1,
      maxFileSize = undefined,
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
    const fileRestrictionText = getFileRestrictionText(
      fileTypes,
      maxNumFiles,
      maxFileSize
    );
    const tooManyFilesError = `You can upload only ${maxNumFiles} file${
      maxNumFiles > 1 ? `s.` : `.`
    }`;

    const {
      acceptedFiles,
      fileRejections,
      getRootProps,
      getInputProps,
      isDragActive,
      isDragAccept,
      isFocused,
    } = useDropzone({
      maxFiles: maxNumFiles,
      maxSize: maxFileSize,
      multiple: maxNumFiles > 1 ? true : false,
      accept: {
        ...fileTypes,
      },
      onDropAccepted: (acceptedFiles) => {
        if (fileRejections.length === 0) {
          onDrop(acceptedFiles);
        }
      },
      onDropRejected: (fileRejections) => {
        forEach(fileRejections, (file) => {
          forEach(file.errors, (err) => {
            if (err.code === "too-many-files") {
              setDropZoneErrors(tooManyFilesError);
            }
            if (err.code === "file-too-large" && maxFileSize) {
              setDropZoneErrors(
                `File must be less than ${fileSizeInMb(maxFileSize)}MB.`
              );
            }
            if (err.code === "file-invalid-type") {
              setDropZoneErrors(getFileTypeErrorMessage(fileTypes));
            }
          });
        });
      },
    });

    useEffect(() => {
      if (isDragActive) {
        setDropZoneErrors(undefined);
      }
    }, [isDragActive]);

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
            isDragAccept
          )}
          alignItems="center"
          borderRadius="borderRadius30"
          borderStyle="borderStyleDashed"
          borderWidth="borderWidth10"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          minHeight="142.5px"
          padding="space70"
          {...getRootProps()}
          ref={ref}
        >
          {/* //react-dropzone is overwriting the aria-role and we need to add it back in to be accessible. */}
          {/* eslint-disable-next-line jsx-a11y/no-redundant-roles */}
          <input
            {...getInputProps()}
            aria-label="upload-file-input"
            role="textbox"
          />
          {getIcon(
            errorState,
            isLoading,
            successState,
            isDragAccept,
            isDragActive
          )}
          {isLoading && (
            <>
              <Text.span color="colorTextStronger" fontSize="fontSize20">
                {map(acceptedFiles, ({ name }) => name).join(", ")}
              </Text.span>
              <Box.div
                alignItems="center"
                display="flex"
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
          {successState && !isDragAccept && (
            <Text.span color="colorTextStronger" fontSize="fontSize20">
              {map(acceptedFiles, ({ name }) => name).join(", ")}
            </Text.span>
          )}
          {errorState && (
            <Text.span
              color="colorTextStronger"
              fontSize="fontSize30"
              fontWeight="fontWeightRegular"
            >
              {dropZoneErrors}
            </Text.span>
          )}
          {(defaultState || (isDragAccept && progress === 100)) && (
            <>
              <Text.span
                color="colorTextStronger"
                fontSize="fontSize30"
                fontWeight="fontWeightRegular"
              >
                Drag and drop or click to select a file
              </Text.span>
              {fileRestrictionText && (
                <Text.span color="colorText" fontSize="fontSize20">
                  {fileRestrictionText}
                </Text.span>
              )}
            </>
          )}
        </Box.div>
      </>
    );
  }
);

Dropzone.displayName = "Dropzone";

export { Dropzone };
