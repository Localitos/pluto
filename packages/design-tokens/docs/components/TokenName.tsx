import React from "react";
import { Box } from "../../../components/src/primitives/Box";
import { CopyToClipboardButton } from "./CopyToClipboardButton";

export const TokenName = ({
  tokenName,
}: {
  tokenName: string;
}): JSX.Element => {
  return (
    <Box.div style={{ display: "flex" }}>
      <Box.div>{tokenName}</Box.div>
      <Box.div>
        <CopyToClipboardButton textToCopy={tokenName} />
      </Box.div>
    </Box.div>
  );
};
