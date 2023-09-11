import React from "react";
import keys from "lodash/keys";
import camelCase from "lodash/camelCase";
import capitalize from "lodash/capitalize";

import { TokenEntry } from "../types/TokenEntry";

import { CopyToClipboardButton } from "../CopyToClipboardButton";

export const getKey = (object: Record<string, unknown>): string => {
  return keys(object)[0];
};

export const getValue = ([, token]: TokenEntry): string => {
  return token.value;
};

export const getComment = ([, token]: TokenEntry): string => {
  return token.comment || "";
};

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
