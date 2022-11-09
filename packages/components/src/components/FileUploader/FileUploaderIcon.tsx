import React from "react";
import { SystemProp, Theme } from "@localyze-pluto/theme";
import * as HeroOutlineIcons from "@heroicons/react/24/outline";
import { Box } from "../../primitives/Box";
import { Icon } from "../Icon";
import { FileUploaderStatus } from "./types/FileUploaderStatus";

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

type FileUploaderIconProps = {
  status: FileUploaderStatus;
};

export const FileUploaderIcon = ({
  status,
}: FileUploaderIconProps): React.ReactElement => {
  return (
    <Box.div
      alignItems="center"
      borderRadius="borderRadius10"
      display="flex"
      h="36px"
      justifyContent="center"
      minWidth="36px"
      {...getIconContainerProps(status)}
    >
      <Icon
        decorative={false}
        size="sizeIcon30"
        title="status"
        {...getIconProps(status)}
      />
    </Box.div>
  );
};
