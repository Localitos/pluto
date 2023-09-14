import React from "react";

import { Box } from "../../../components/src/primitives/Box";
import { TokenEntry } from "../types/TokenEntry";

export const createFontSizePreview = ([, token]: TokenEntry): JSX.Element => {
  return (
    <Box.div style={{ fontSize: token.value }}>
      The quick brown fox jumped over the lazy dog.
    </Box.div>
  );
};
