import React from "react";

import { TokenEntry } from "../types/TokenEntry";

import { IconSizePreview } from "../components/IconSizePreview";

export const createIconSizePreview = ([
  tokenSuffix,
  token,
]: TokenEntry): JSX.Element => {
  return <IconSizePreview key={tokenSuffix} pixels={token.value} />;
};
