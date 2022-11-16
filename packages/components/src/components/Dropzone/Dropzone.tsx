import React, { useState } from "react";
import type { SystemProp, Theme } from "@xstyled/styled-components";
import { FileWithPath, useDropzone } from "react-dropzone";
import forEach from "lodash/forEach";
import { Text } from "../../primitives/Text";
import { ProgressBar } from "../ProgressBar";
import { Box } from "../../primitives/Box";
import { Icon, IconProps } from "../Icon";
import { CancelUploadButton } from "./CancelUploadButton";

const MAX_FILE_SIZE = 50 * 1024 * 1024;

type DropzoneProps = {
  /* These props are being saved for V2 */
  /** The maximum amount allowed for file size. In the format of number?. */
  // MaxFileSize: number;
  /** Are multiple file uploads allowed? Boolean */
  // MultipleFiles: boolean;
  /** This is the function that gets triggered when a file is dropped */
  sendDocument: (
    file: FileWithPath,
    onProgress?: (progressPercentage: number) => void
  ) => Promise<unknown>;
  /** This is the function that gets triggered when a file is dropped */
  cancelDocumentUpload: (name: string) => Promise<unknown>;
  /** The file types allowed. In the format of an object. */
  fileTypes?: Record<string, string[]>;
};
/**/

const getVariants = (
  status: string,
  isDragAccept: boolean,
  isDragReject: boolean,
  isFocused: boolean
): {
  backgroundColor?: SystemProp<keyof Theme["colors"], Theme>;
  borderColor?: SystemProp<keyof Theme["colors"], Theme>;
} => {
  if (status === "loading") {
    return {
      backgroundColor: "colorBackgroundInfo",
      borderColor: "colorBorderPrimary",
    };
  }
  if (status === "success") {
    return {
      backgroundColor: "colorBackgroundSuccess",
      borderColor: "colorBorderSuccess",
    };
  }
  if (isDragAccept) {
    return {
      backgroundColor: "colorBackgroundInfo",
      borderColor: "colorBorderPrimary",
    };
  }
  if (isDragReject || status === "error" || status === "uploadError") {
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
  status: string,
  isDragActive: boolean,
  isDragAccept: boolean,
  isDragReject: boolean
) => {
  let icon: IconProps["icon"] = "CloudArrowUpIcon";
  let iconColor: IconProps["color"] = "colorIconInfo";
  if ((!isDragActive && !isDragReject) || status === "success") {
    icon = "CheckCircleIcon";
    iconColor = "colorIconSuccess";
  }
  if (isDragAccept || status === "default" || status === "loading") {
    icon = "CloudArrowUpIcon";
    iconColor = "colorIconInfo";
  }
  if (isDragReject || status === "error" || status === "uploadError") {
    icon = "ExclamationTriangleIcon";
    iconColor = "colorIconError";
  }

  return <Icon color={iconColor} decorative icon={icon} size={"sizeIcon40"} />;
};

const Dropzone = React.forwardRef<HTMLDivElement, DropzoneProps>(
  (
    {
      fileTypes = { "application/pdf": [".pdf"] },
      cancelDocumentUpload,
      sendDocument,
    },
    ref
  ) => {
    const [status, setStatus] = useState("default");
    const [progress, setProgress] = useState(0);
    const [errors, setErrors] = useState("");
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
      maxSize: MAX_FILE_SIZE,
      multiple: false,
      accept: {
        ...fileTypes,
      },
      onDropAccepted: () => {
        setStatus("loading");
        sendDocument(acceptedFiles[0], (progress) => {
          setProgress(progress);
        })
          .then(() => {
            setProgress(0);
            setStatus("success");
          })
          .catch(() => {
            setStatus("uploadError");
          });
      },
      onDropRejected: (fileRejections) => {
        setStatus("error");
        forEach(fileRejections, (file) => {
          forEach(file.errors, (err) => {
            if (err.code === "file-too-large") {
              setErrors("File must be less than 50mb.");
            }
            if (err.code === "file-invalid-type") {
              setErrors("Wrong file type. PDF format only.");
            }
          });
        });
      },
    });

    React.useEffect(() => {
      if (isDragActive) {
        setStatus("default");
      }
    }, [isDragActive]);

    return (
      <>
        <Box.div
          {...getVariants(status, isDragAccept, isDragReject, isFocused)}
          alignItems="center"
          borderRadius={"borderRadius30"}
          borderStyle={"borderDashed"}
          borderWidth={"borderWidth10"}
          display="flex"
          flexDirection="column"
          padding={"space70"}
          {...getRootProps({
            status,
            isDragActive,
            isDragAccept,
            isDragReject,
          })}
          ref={ref}
        >
          <input {...getInputProps()} />
          {getIcon(status, isDragActive, isDragAccept, isDragReject)}

          {!isDragActive && status === "loading" && (
            <>
              {acceptedFiles[0].name}
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
                <CancelUploadButton
                  onClick={(event) => {
                    event.stopPropagation();
                    cancelDocumentUpload(acceptedFiles[0].name).then(() =>
                      setStatus("default")
                    );
                  }}
                />
              </Box.div>
            </>
          )}
          {!isDragActive && status === "uploadError" && (
            <Text.span
              color="colorTextStronger"
              fontSize={"fontSize30"}
              fontWeight="fontWeightRegular"
            >
              The file failed to upload, please try again.
            </Text.span>
          )}
          {!isDragActive && status === "success" && (
            <Text.span color="colorTextStronger" fontSize={"fontSize20"}>
              {acceptedFiles[0].name}
            </Text.span>
          )}
          {(isDragReject || status === "error") && (
            <Text.span
              color="colorTextStronger"
              fontSize={"fontSize30"}
              fontWeight="fontWeightRegular"
            >
              {errors || "Wrong file type. PDF format only."}
            </Text.span>
          )}
          {status == "default" && !isDragReject && (
            <>
              <Text.span
                color="colorTextStronger"
                fontSize={"fontSize30"}
                fontWeight="fontWeightRegular"
              >
                Drag and drop or browse
              </Text.span>
              <Text.span color="colorText" fontSize={"fontSize20"}>
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
