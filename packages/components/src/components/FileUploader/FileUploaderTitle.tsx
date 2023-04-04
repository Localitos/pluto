import React from "react";
import { Anchor } from "../Anchor";
import { Text } from "../../primitives/Text";

export const FileUploaderTitle = ({
  label,
  fileUrl,
  status,
}: {
  label: string;
  status: string;
  fileUrl?: string;
}): React.ReactElement => {
  if (fileUrl && status !== "disabled") {
    return (
      <Anchor href={fileUrl} target="_blank">
        {label}
      </Anchor>
    );
  }
  return <Text.span color="colorTextStrongest">{label}</Text.span>;
};
