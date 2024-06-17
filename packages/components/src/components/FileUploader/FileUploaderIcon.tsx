import React from "react";
import { SystemProp, Theme } from "@localyze-pluto/theme";
import { Box } from "../../primitives/Box";
import { Icon } from "../Icon";
import { IconName } from "../Icon/types/IconName";
import { FileUploaderStatus } from "./types/FileUploaderStatus";

const getIconContainerProps = (
  status: FileUploaderStatus,
  disabled = false,
): {
  backgroundColor: SystemProp<keyof Theme["colors"], Theme>;
} => {
  if (disabled && status !== "success") {
    return { backgroundColor: "colorBackgroundWeak" };
  }

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
  status: FileUploaderStatus,
  disabled = false,
): {
  color: SystemProp<keyof Theme["colors"], Theme>;
  icon: IconName;
} => {
  if (disabled && status !== "success") {
    return { icon: "cloud-upload", color: "colorTextStronger" };
  }

  switch (status) {
    case "success": {
      return { icon: "paperclip", color: "colorTextSuccess" };
    }
    case "error": {
      return { icon: "circle-x", color: "colorTextError" };
    }
    default: {
      return { icon: "cloud-upload", color: "colorTextLink" };
    }
  }
};

type FileUploaderIconProps = {
  status: FileUploaderStatus;
  disabled?: boolean;
};

export const FileUploaderIcon = ({
  status,
  disabled,
}: FileUploaderIconProps): React.ReactElement => {
  return (
    <Box.div
      alignItems="center"
      borderRadius="borderRadius10"
      display="flex"
      h="36px"
      justifyContent="center"
      minWidth="36px"
      {...getIconContainerProps(status, disabled)}
    >
      <Icon
        decorative={false}
        size="sizeIcon30"
        title="status"
        {...getIconProps(status, disabled)}
      />
    </Box.div>
  );
};
