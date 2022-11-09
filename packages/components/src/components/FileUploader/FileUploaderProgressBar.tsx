import { useDown } from "@localyze-pluto/theme";
import React from "react";
import { Box } from "../../primitives/Box";
import { ProgressBar } from "../ProgressBar";

type FileUploaderProgressProps = {
  fileName?: string;
  progress: number;
};

export const FileUploaderProgressBar = ({
  fileName,
  progress,
}: FileUploaderProgressProps): React.ReactElement => {
  const isMobile = useDown("md");

  if (isMobile) {
    return (
      <Box.div paddingBottom="space50">
        <Box.span
          color="colorTextHeading"
          display="block"
          fontSize="fontSize10"
          paddingBottom="space30"
        >
          {fileName}
        </Box.span>
        <ProgressBar value={progress} />
      </Box.div>
    );
  }
  return (
    <Box.span flexGrow={1}>
      <ProgressBar value={progress} />
    </Box.span>
  );
};
