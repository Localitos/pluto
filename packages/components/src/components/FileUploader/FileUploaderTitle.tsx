import React from "react";
import { Anchor } from "../Anchor";
import { Text } from "../../primitives/Text";

export const FileUploaderTitle = ({
  label,
  fileUrl,
}: {
  label: string;
  fileUrl?: string;
}): React.ReactElement => {
  if (fileUrl) {
    return (
      <Anchor href={fileUrl} target="_blank">
        {label}
      </Anchor>
    );
  }
  return <Text.span color="colorTextStrongest">{label}</Text.span>;
};
