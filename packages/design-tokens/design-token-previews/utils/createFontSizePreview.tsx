import React from "react";

import { FontSizePreview } from "../components/FontSizePreview";
import { TokenEntry } from "../types/TokenEntry";

export const createFontSizePreview = ([
  tokenSuffix,
  token,
]: TokenEntry): JSX.Element => {
  return <FontSizePreview fontSize={token.value} key={tokenSuffix} />;
};
