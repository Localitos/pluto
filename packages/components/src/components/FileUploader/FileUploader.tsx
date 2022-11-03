import { SystemProp, Theme, useDown } from "@localyze-pluto/theme";
import isEmpty from "lodash/isEmpty";
import React, { ReactElement, ReactNode } from "react";
import * as HeroOutlineIcons from "@heroicons/react/24/outline";
import { Box } from "../../primitives/Box";
import { Text } from "../../primitives/Text";
import { Anchor } from "../Anchor";
import { Icon } from "../Icon";
import { HelpText } from "../HelpText";
import { ProgressBar } from "../ProgressBar";
import { FileUploaderButtonProps } from "./FileUploaderButton";
import { RemoveButton } from "./RemoveButton";
import { CancelUploadButton } from "./CancelUploadButton";

export interface FileUploaderProps
  extends React.HTMLAttributes<HTMLDivElement> {
  /** The title of the file */
  label: string;

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

  /** The call to action button */
  children: ReactElement<ButtonProps | FileUploaderButtonProps>;

  /** Handles cancel upload  */
  onCancel?: () => void;

  /** Handles remove file */
  onRemove?: () => void;
}

type FileUploaderStatus = "error" | "loading" | "success" | "waiting";

const getIconContainerProps = (
  status: FileUploaderStatus
): {
  backgroundColor: SystemProp<keyof Theme["colors"], Theme>;
} => {
  switch (status) {
    case "success": {
      return { backgroundColor: "colorBackgroundSuccess" };
    }
    case "error": {
      return { backgroundColor: "colorBackgroundError" };
    }
    default: {
      return { backgroundColor: "colorBackgroundInfo" };
    }
  }
};

const getIconProps = (
  status: FileUploaderStatus
): {
  color: SystemProp<keyof Theme["colors"], Theme>;
  icon: keyof typeof HeroOutlineIcons;
} => {
  switch (status) {
    case "success": {
      return { icon: "PaperClipIcon", color: "colorTextSuccess" };
    }
    case "error": {
      return { icon: "XCircleIcon", color: "colorTextError" };
    }
    default: {
      return { icon: "CloudArrowUpIcon", color: "colorTextLink" };
    }
  }
};

const getStatus = (
  progress: number,
  fileUrl?: string,
  errorMessage?: string
): FileUploaderStatus => {
  if (progress > 0 && progress < 100) return "loading";
  if (!isEmpty(fileUrl)) return "success";
  if (!isEmpty(errorMessage)) return "error";
  return "waiting";
};

const getFileTitle = (label: string, fileUrl?: string): React.ReactElement => {
  if (fileUrl) {
    return (
      <Anchor href={fileUrl} target="_blank">
        {label}
      </Anchor>
    );
  }
  return <Text.span color="colorTextStrongest">{label}</Text.span>;
};

const getFileDescription = (
  status: FileUploaderStatus,
  { fileName, fileSize, maxFileSize }: Partial<FileUploaderProps>
): ReactNode => {
  const wrapTextInComponent = (value: string) => (
    <Text.span fontSize="fontSize10">{value}</Text.span>
  );

  if (status === "loading") {
    return fileName || "";
  }

  const name = fileName || (status !== "success" && "No file uploaded");
  const size =
    fileSize || (maxFileSize && `Max. file size ${maxFileSize}`) || null;

  if (name && size) {
    return wrapTextInComponent(`${name} • ${size}`);
  }

  if (name) {
    return wrapTextInComponent(name);
  }

  return null;
};

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
    },
    ref
  ) => {
    const isMobile = useDown("md");
    const status = getStatus(progress, fileUrl, errorMessage);

    return (
      <Box.div display="flex" flexDirection="column" gap="space25">
        <Box.div
          borderColor={
            status === "error" ? "colorBorderError" : "colorBorderWeaker"
          }
          borderRadius="borderRadius30"
          borderWidth="borderWidth10"
          display="flex"
          flexDirection={{ _: "column", md: "row" }}
          gap="space70"
          padding="space50"
          ref={ref}
        >
          <Box.div
            display="flex"
            flexDirection="row"
            flexGrow={1}
            gap="space70"
          >
            <Box.div
              alignItems="center"
              borderRadius="borderRadius10"
              display="flex"
              h="36px"
              justifyContent="center"
              w="36px"
              {...getIconContainerProps(status)}
            >
              <Icon
                decorative={false}
                size="sizeIcon30"
                title="status"
                {...getIconProps(status)}
              />
            </Box.div>

            <Box.div
              display="flex"
              flexDirection="column"
              flexGrow={1}
              justifyContent="center"
            >
              {getFileTitle(label, fileUrl)}
              <Box.div
                alignItems={{ _: "left", md: "center" }}
                display="flex"
                flexDirection={{ _: "column-reverse", md: "row" }}
                gap="space40"
              >
                {status === "loading" && (
                  <Box.span flexGrow={1}>
                    <ProgressBar value={progress} />
                  </Box.span>
                )}

                {getFileDescription(status, {
                  fileName,
                  fileSize,
                  maxFileSize,
                })}
              </Box.div>
            </Box.div>
          </Box.div>
          {status === "waiting" &&
            React.cloneElement(children, { fullWidth: isMobile })}
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
