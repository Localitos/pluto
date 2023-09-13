import React from "react";
import { Box } from "../../../components/src/primitives/Box";

const FontSizePreview = ({ fontSize }: { fontSize: string }): JSX.Element => {
  return (
    <Box.div style={{ fontSize: fontSize }}>
      The quick brown fox jumped over the lazy dog.
    </Box.div>
  );
};

export { FontSizePreview };
