import { SystemProp, Theme, useDown } from "@localyze-pluto/theme";
import isEmpty from "lodash/isEmpty";
import React, { ReactElement } from "react";
import * as HeroOutlineIcons from "@heroicons/react/24/outline";
import { Box } from "../../primitives/Box";
import { Text } from "../../primitives/Text";
import { Anchor } from "../Anchor";
import { Button, ButtonProps } from "../Button";
import { Icon } from "../Icon";
import { HelpText } from "../HelpText";
import { ProgressBar } from "../ProgressBar";
import { FileUploaderButtonProps } from "./FileUploaderButton";

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

const CancelUploadButton = (props: Partial<ButtonProps>): ReactElement => {
  const isMobile = useDown("md");

  if (isMobile) {
    return (
      <Button {...props} variant="secondary">
        Cancel upload
      </Button>
    );
  }

  return (
    <Button
      {...props}
      aria-label="Cancel upload"
      iconOnly
      trailingIcon="XMarkIcon"
      variant="ghost"
    />
  );
};

const RemoveButton = (props: Partial<ButtonProps>): ReactElement => {
  const isMobile = useDown("md");

  if (isMobile) {
    return (
      <Button {...props} aria-label="Remove file" variant="secondary">
        Remove
      </Button>
    );
  }

  return (
    <Button
      aria-label="Remove file"
      iconOnly
      trailingIcon="TrashIcon"
      variant="ghost"
    />
  );
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
): string => {
  if (status === "loading") {
    return fileName || "";
  }

  const name = fileName || "No file uploaded";
  const size =
    fileSize || (maxFileSize && `Max. file size ${maxFileSize}`) || null;

  if (size) {
    return `${name} • ${size}`;
  }

  return size;
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

            <Box.div display="flex" flexDirection="column" flexGrow={1}>
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
                <Text.span fontSize="fontSize10">
                  {getFileDescription(status, {
                    fileName,
                    fileSize,
                    maxFileSize,
                  })}
                </Text.span>
              </Box.div>
            </Box.div>
          </Box.div>
          {status === "waiting" &&
            React.cloneElement(children, { fullWidth: isMobile })}
          {(status === "error" || status === "success") && <RemoveButton />}
          {status === "loading" && <CancelUploadButton />}
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
