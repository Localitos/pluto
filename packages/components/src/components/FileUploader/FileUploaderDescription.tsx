import React from "react";
import { Text } from "../../primitives/Text";

type FileUploaderDescriptionProps = {
  status: string;
  fileName?: string;
  fileSize?: string;
  maxFileSize?: string;
};

export const FileUploaderDescription = ({
  status,
  fileName,
  fileSize,
  maxFileSize,
}: FileUploaderDescriptionProps): JSX.Element => {
  const name = fileName || (status !== "success" && "No file uploaded");
  const size =
    fileSize || (maxFileSize && `Max. file size ${maxFileSize}`) || null;
  const text = size && status !== "loading" ? `${name} • ${size}` : name;

  return (
    <Text.span color="colorText" fontSize="fontSize10">
      {text}
    </Text.span>
  );
};
