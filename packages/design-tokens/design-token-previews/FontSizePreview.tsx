import React from "react";

const FontSizePreview = ({ fontSize }: { fontSize: string }): JSX.Element => {
  return (
    <div style={{ fontSize: fontSize }}>
      The quick brown fox jumped over the lazy dog.
    </div>
  );
};

export { FontSizePreview };
