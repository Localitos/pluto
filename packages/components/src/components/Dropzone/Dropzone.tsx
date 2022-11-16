import React from "react";
import { FileWithPath, useDropzone } from "react-dropzone";
import { styled, theme } from "@localyze-pluto/theme";
import { Text } from "../../primitives/Text";
import { ProgressBar } from "../ProgressBar";
import { Box } from "../../primitives/Box";
import { Icon, IconProps } from "../Icon";
import { CancelUploadButton } from "./CancelUploadButton";

type DropzoneProps = {
  // FileSize
  /** The maximum amount allowed for file size. In the format of number?. */
  // MaxFileSize: number;
  /** Are multiple file uploads allowed? Boolean */
  // MultipleFiles: boolean;
  /** This is the function that gets triggered when a file is dropped */
  sendDocument: (
    file: FileWithPath,
    progress: (progress: number) => void
  ) => Promise<string>;
  /** This is the function that gets triggered when a file is dropped */
  cancelDocumentUpload: () => void;
  /** The file types allowed. In the format of an object. */
  fileTypes?: Record<string, never>;
};

const getBorderColors = ({ status, isDragAccept, isDragReject, isFocused }) => {
  if (status === "success") {
    return `${theme.colors.colorBorderSuccess}`;
  }
  if (isDragAccept) {
    return `${theme.colors.colorBorderPrimary}`;
  }
  if (isDragReject || status === "error" || status === "uploadError") {
    return `${theme.colors.colorBorderError}`;
  }
  if (isFocused) {
    return `${theme.colors.colorBorderPrimary}`;
  }
  return `${theme.colors.colorBorder}`;
};

const getBackgroundColors = ({
  status,
  isDragAccept,
  isDragReject,
  isFocused,
}) => {
  if (status === "loading") {
    return `${theme.colors.colorBackgroundInfo}`;
  }
  if (status === "success") {
    return `${theme.colors.colorBackgroundSuccess}`;
  }
  if (isDragAccept) {
    return `${theme.colors.colorBackgroundInfo}`;
  }
  if (isDragReject || status === "error" || status === "uploadError") {
    return `${theme.colors.colorBackgroundError}`;
  }
  if (isFocused) {
    return `${theme.colors.colorBackground}`;
  }
  return `${theme.colors.colorBackgroundWeakest}`;
};

const getIcon = (status: string, isDragActive, isDragAccept, isDragReject) => {
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

const DropZone = styled(Box.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${theme.space.space70};
  border-width: 2px;
  border-radius: ${theme.radii.borderRadius30};
  border-color: ${(props) => getBorderColors(props)};
  border-style: dashed;
  background-color: ${(props) => getBackgroundColors(props)};
  outline: none;
  transition: border 0.24s ease-in-out;
  &:focus {
    outline: none;
    border-color: red;
  }
`;
/* This is what the dropzone should look like when used in a component */
{
  /* <Dropzone fileType="foo" onSuccess={() => console.log('yay')} /> */
}

const Dropzone = React.forwardRef<HTMLDivElement, DropzoneProps>(
  (
    {
      fileTypes = { "application/pdf": [".pdf"] },
      cancelDocumentUpload,
      sendDocument,
    },
    ref
  ) => {
    /* Const status = getStatus({ disabled, progress, fileUrl, errorMessage }); */
    const [status, setStatus] = React.useState("default");
    const [progress, setProgress] = React.useState(0);

    const {
      acceptedFiles,
      getRootProps,
      getInputProps,
      isDragActive,
      isDragAccept,
      isDragReject,
    } = useDropzone({
      maxFiles: 1,
      multiple: false,
      accept: {
        ...fileTypes,
      },
      onDropAccepted: () => {
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
        <DropZone
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
            <>
              <Box.div marginTop="space40" maxWidth="280px" w="100%">
                <ProgressBar value={progress} />
              </Box.div>
              <CancelUploadButton
                onClick={() => {
                  cancelDocumentUpload();
                }}
              />
            </>
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
        </DropZone>
      </>
    );
  }
);

Dropzone.displayName = "Dropzone";

export { Dropzone };
