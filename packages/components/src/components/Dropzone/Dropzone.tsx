import React from "react";
import type { SystemProp, Theme } from "@xstyled/styled-components";
import { FileWithPath, useDropzone } from "react-dropzone";
import type { DropzoneState } from "react-dropzone";
import { styled, theme } from "@localyze-pluto/theme";
import { Text } from "../../primitives/Text";
import { ProgressBar } from "../ProgressBar";
import { Box } from "../../primitives/Box";
import { Icon, IconProps } from "../Icon";
import { CancelUploadButton } from "./CancelUploadButton";

// interface SomeProps
//   extends Pick<
//     DropzoneState,
//     "isDragAccept" | "isDragReject" | "isFocused" | "isDragActive"
//   > {
//   status: string;
// }

type DropzoneProps = {
  // FileSize
  /** The maximum amount allowed for file size. In the format of number?. */
  // MaxFileSize: number;
  /** Are multiple file uploads allowed? Boolean */
  // MultipleFiles: boolean;
  /** This is the function that gets triggered when a file is dropped */
  sendDocument: (
    file: File,
    onProgress?: ((progressPercentage: number) => void) | undefined
  ) => Promise<unknown>;
  /** This is the function that gets triggered when a file is dropped */
  cancelDocumentUpload: () => Promise<unknown>;
  /** The file types allowed. In the format of an object. */
  fileTypes?: Record<string, never>;
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
    borderColor: "colorBorderPrimary",
  };
};

const getIcon = (
  status: string,
  isDragAccept: boolean,
  isDragReject: boolean,
  isDragActive: boolean
) => {
  let icon: IconProps["icon"] = "CloudArrowUpIcon";
  let iconColor: IconProps["color"] = "colorIconInfo";
  if (!isDragActive && status === "success") {
    icon = "CheckCircleIcon";
    iconColor = "colorIconSuccess";
  }
  if (isDragAccept) {
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
    const [status, setStatus] = React.useState("default");
    const [progress, setProgress] = React.useState(0);
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
      multiple: false,
      accept: {
        ...fileTypes,
      },
      onDropAccepted: () => {
        setStatus("loading");
        console.log("sendDocument", sendDocument);
        sendDocument(acceptedFiles[0], (progress) => {
          setProgress(progress);
        })
          .then(() => setStatus("success"))
          .catch(() => {
            setStatus("uploadError");
          });
      },
      onDropRejected: () => {
        setStatus("error");
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
          {status === "loading" && (
            <Box.div maxWidth="300px" w="100%">
              <Box.div marginTop="space40" maxWidth="280px" w="100%">
                <ProgressBar value={progress} />
              </Box.div>
              <CancelUploadButton
                onClick={() => {
                  cancelDocumentUpload().then(() => setStatus("default"));
                }}
              />
            </Box.div>
          )}
          {(isDragReject || status === "error" || status === "uploadError") && (
            <Text.span
              color="colorTextStronger"
              fontSize={"fontSize30"}
              fontWeight="fontWeightRegular"
            >
              {status === "uploadError"
                ? "The file failed to upload, please try again."
                : "Wrong file type. PDF format only."}
            </Text.span>
          )}
          {((!isDragActive && status === "default") || isDragAccept) && (
            <>
              <Text.span
                color="colorTextStronger"
                fontSize={"fontSize30"}
                fontWeight="fontWeightRegular"
              >
                Drag and drop or browse
              </Text.span>
              <Text.span color="colorText" fontSize={"fontSize20"}>
                File must be PDF format and no larger than xxMB
              </Text.span>
            </>
          )}
          {!isDragActive && status === "success" && (
            <Text.span color="colorTextStronger" fontSize={"fontSize20"}>
              {acceptedFiles[0].name}
            </Text.span>
          )}
        </Box.div>
      </>
    );
  }
);

Dropzone.displayName = "Dropzone";

export { Dropzone };
