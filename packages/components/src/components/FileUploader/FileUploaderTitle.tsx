import React from "react";
import { Anchor } from "../Anchor";
import { Text } from "../../primitives/Text";

export const FileUploaderTitle = ({
  label,
  fileUrl,
  onClick,
}: {
  label: string;
  fileUrl?: string;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}): React.ReactElement => {
  if (fileUrl) {
    return (
      <Anchor href={fileUrl} onClick={onClick} target="_blank">
        {label}
      </Anchor>
    );
  }
  return (
    <Text.span color="colorTextStrongest" onClick={onClick}>
      {label}
    </Text.span>
  );
};
