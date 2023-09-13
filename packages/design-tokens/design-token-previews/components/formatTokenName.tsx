import React from "react";
import camelCase from "lodash/camelCase";
import capitalize from "lodash/capitalize";
import { CopyToClipboardButton } from "./CopyToClipboardButton";

export const formatTokenName = (
  prefix: string,
  suffix: string
): JSX.Element => {
  const tokenName = camelCase(`${prefix}${capitalize(suffix)}`);
  return (
    <div style={{ display: "flex" }}>
      <div>{tokenName}</div>
      <div>
        <CopyToClipboardButton textToCopy={tokenName} />
      </div>
    </div>
  );
};
